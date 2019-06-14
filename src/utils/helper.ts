import * as _ from 'lodash'

export function isListSizeEqual(list1: Array<number>, list2: Array<number>): boolean {
  if (list1.length == list2.length) return true
  return false
}

/**
 * @description
 *  *   Gradient Descent for intercept is the process by which we try to minimize loss,
 *  *   we take each parameter we're changing, and move it as long as we're decreasing loss
 *  
 * @param {x_axis} list
 * @param {y_axis} list
 * @param {m} slope
 * @param {b} intercept
 * @returns gradient: number
*/
export function GradiendDescentIntercept(x_axis: Array<number>, y_axis: Array<number>, m: number, b:number): number {
  let gradient: number = 0
  let diff: number = 0
  if (!_.isEmpty(x_axis) && !_.isEmpty(y_axis)) {
      if (isListSizeEqual(x_axis, y_axis)) {
          const N = x_axis.length
          _.forEach(x_axis, (value, index) => {
              diff += y_axis[index] - (value * m + b)
          })
          gradient = (-2/N) * diff
      }
  }
  return gradient
}

/**
 * @description
 *  *  To find m(slope) Gradient:
 *      *   we find the sum of x_value * (y_value-(m*x_value + b)) for all the y_values and x_values
 *      *   and then we multiply the sum by a factor of -2/N. N being the number of points we have 
 * @param x_axis 
 * @param y_axis 
 * @param m 
 * @param b 
 */
export function GradiendDescentSlope(x_axis: Array<number>, y_axis: Array<number>, m: number, b:number): number {
  let gradient: number = 0
  let diff: number = 0
  if (!_.isEmpty(x_axis) && !_.isEmpty(y_axis)) {
    if (isListSizeEqual(x_axis, y_axis)) {
      const N = x_axis.length
      _.forEach(x_axis, (value, index) => {
        diff += value * (y_axis[index] - (value * m + b))
      })
      gradient = (-2/N) * diff
    }
  }
  return gradient
}