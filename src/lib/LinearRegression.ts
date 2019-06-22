import * as _ from 'lodash'
import {isListSizeEqual, GradiendDescentIntercept, GradiendDescentSlope} from '../utils/helper'

export class LinearRegression {
    //TODO check ou to implement this method
    constructor() {

    }
    
    /**
     * @description
     *  * Fit a our model
     */
    Fit(x_axis: Array<number>, y_axis: Array<number>) {
        //TODO work on how to fit our models
    }

    /**
     * * Make a prediction based on trained model
     */
    Predict(axis: Array<number>): Array<number> {
        //TODO work on how to make prediction
        let prediction: Array<number> = []

        return prediction
    }

    /**
     * * Line formula
     *      *   y = mx + b
     *  ! m is the slope
     *  ! b is the intercept
     *  *   Slope is a measure of how steep the line is
     *  *   Intercept is a measure of where the line hits the y-axix
     */
    Line(list: Array<number>, m: number, b: number): Array<number> {
        let y: Array<number> = []
        if (!_.isEmpty(list)) {
            _.forEach(list, value => y.push(value*m +b))
        }
        return y
    }

    /**
     * @description
        * * Loss is the squared distance from the point to the line.
        *  *   We do the squared distance(instead of just the distance) so that points
        *  *   above and below the line both contribute to total loss in the same way
     * @param {list} dataset
     * @param {line} pridiction
     * @param {m} slope
     * @param {b} intercept
     */
    Loss(list: Array<number>, line: Array<number>, m?: number, b?: number): number {
        let loss: number = 0
        if(!_.isEmpty(list) && !_.isEmpty(line)) {
            if (isListSizeEqual(list, line)) {
                _.forEach(list, (value, index) => {
                    loss += (value - line[index]) ** 2
                })
            }
        }
        return loss
    }

    StepGradient(x_axis: Array<number>, y_axis: Array<number>, 
                m: number, b: number, learning_rate: number): {b: number, m: number} {
        let gradient: {b: number, m: number}
        const b_gradient = GradiendDescentIntercept(x_axis, y_axis, m, b)
        const m_gradient = GradiendDescentSlope(x_axis, y_axis, m, b)
        const b_current = b - (0.01 * b_gradient)
        const m_current = m - (0.01 * m_gradient)
        gradient = {b: b_current, m: m_current}
        return gradient
    }

    GradientDescent(x_axis: Array<number>, y_axis: Array<number>,
                    learning_rate: number, num_iterations: number): {b: number, m: number} {
        let m: number = 0
        let b: number = 0
        for (let i = 0; i < num_iterations; i++) {
            let val = this.StepGradient(x_axis, y_axis, m, b, i)
            m = val.m
            b = val.b
        }
        return {b, m}
    }
}