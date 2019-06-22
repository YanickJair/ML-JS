import * as _ from 'lodash'

import {isListSizeEqual} from '../utils/helper'

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
    
        return current_b1
    }

    /**
     * @description return the current b0 for our equation
     * @summary it depends ont eh CurrentSlope function
     */
    CurrentIntercept(current_b1: number): number {
        return (this.sum_of_y_list - (current_b1 * this.sum_of_x_list))/this.list_len
    }
}