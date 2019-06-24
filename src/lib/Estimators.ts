import * as _ from 'lodash'

import {isListSizeEqual} from '../utils/helper'
import {MeasureOfLocation} from './MeasureOfLocation'

/**
 * @description
 *  We shall find b1 and b0, the Estimates of B1 and B0
 *  y = b0 + b1*x
 *  where b0 is the intercept and b1 is the slope
 */

 /**
  * @description
  *     return the current b1 for our equation
  */
export class Estimator {
    sum_of_x_list!: number
    sum_of_y_list!: number
    list_len!: number
    x_list!: Array<number>
    y_list!: Array<number>
    
    constructor(x_list: Array<number>, y_list: Array<number>) {
        this.x_list = x_list
        this.y_list = y_list
        this.list_len = _.size(x_list)
    }

    CurrentSlope(): number {
        let current_b1 = 0
        if (isListSizeEqual(this.x_list, this.y_list) 
            && !!(_.isEmpty(this.x_list && _.isEmpty(this.y_list)))) {
            
            this.sum_of_x_list = 0
            let sqrt_of_x_list_element = 0
            _.forEach(this.x_list, (element: number) => {
                this.sum_of_x_list += element
                sqrt_of_x_list_element += element**2
            })
            
            this.sum_of_y_list = 0
            _.forEach(this.y_list, (element: number) => {
                this.sum_of_y_list += element
            })
    
            let x_list_sum_by_y_list_sum = 0
            for (let i = 0; i < this.list_len; i++) {
                x_list_sum_by_y_list_sum += this.x_list[i] * this.y_list[i]
            }
    
            current_b1 = ((this.list_len * x_list_sum_by_y_list_sum) - (this.sum_of_x_list*this.sum_of_y_list))/
                            ((this.list_len*sqrt_of_x_list_element) - this.sum_of_x_list**2)
        }
    
        return Number(current_b1.toFixed(6))
    }

    /**
     * @description return the current b0 for our equation
     * @summary it depends on the CurrentSlope function
     */
    CurrentIntercept(current_b1: number): number {
        return (this.sum_of_y_list - (current_b1 * this.sum_of_x_list))/this.list_len
    }

    /**
     * @description Partition of Total Variability and Estimation of σ2
     * @returns [Sxx, Syy, Sxy]
     */
    PartionOfTotalVariability(): any {
        const x_list_mean: number = new MeasureOfLocation(this.x_list).Mean()['mean']
        const y_list_mean: number = new MeasureOfLocation(this.y_list).Mean()['mean']

        //* Sxx = SUM(xi − x̄) 2
        let sxx = 0
        _.forEach(this.x_list, element => {
            sxx += (element - x_list_mean) ** 2
        })

        //* Syy = SUM(yi − ȳ) 2
        let syy = 0
        _.forEach(this.y_list, element => {
            syy += (element - y_list_mean) ** 2
        })


        let sxy = 0
        for (let i = 0; i < this.list_len; i++) {
            sxy += (this.x_list[i] - x_list_mean) * (this.y_list[i] - y_list_mean)
        }

        return {sxx: sxx.toFixed(2), syy: syy.toFixed(2), sxy: sxy.toFixed(2)}
    }

    /**
     * @description: Estimator of σ^2 as a Mean Squared Error (SSE)
     * @function: s^2 = n SUM(yi − ŷi ) 2 /(n − 2) Or s^2 = (Syy - b1*Sxy)/(n-2)
     */
    MeanSquaredError(): number {
        let mse: number = 0
        let {syy, sxy} = this.PartionOfTotalVariability()
        const b1 = this.CurrentSlope()
        mse = (syy - (b1*sxy))/(this.list_len-2)
        return Number(mse.toFixed(4))
    }

    /**
     * @description Aside from merely estimating the linear relationship between x and Y for purposes
        of prediction, the experimenter may also be interested in drawing certain inferences
        about the slope and intercept
     * @param c_interval 
     */
    ConfidenceIntervalForSlope(c_interval: number): Array<number> {
        let interval: Array<number> = []
        const b1 = this.CurrentSlope()
        const {sxx} = this.PartionOfTotalVariability()
        const s = Math.sqrt(this.MeanSquaredError())
        const helper = ((c_interval*s)/Math.sqrt(sxx))
        interval[0] = Number((b1 - helper).toFixed(4))
        interval[1] = Number((b1 + helper).toFixed(4))
        return interval
    }
}