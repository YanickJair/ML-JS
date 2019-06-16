"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
function isListSizeEqual(list1, list2) {
    if (list1.length == list2.length)
        return true;
    return false;
}
exports.isListSizeEqual = isListSizeEqual;
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
function GradiendDescentIntercept(x_axis, y_axis, m, b) {
    let gradient = 0;
    let diff = 0;
    if (!_.isEmpty(x_axis) && !_.isEmpty(y_axis)) {
        if (isListSizeEqual(x_axis, y_axis)) {
            const N = x_axis.length;
            _.forEach(x_axis, (value, index) => {
                diff += y_axis[index] - (value * m + b);
            });
            gradient = (-2 / N) * diff;
        }
    }
    return gradient;
}
exports.GradiendDescentIntercept = GradiendDescentIntercept;
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
function GradiendDescentSlope(x_axis, y_axis, m, b) {
    let gradient = 0;
    let diff = 0;
    if (!_.isEmpty(x_axis) && !_.isEmpty(y_axis)) {
        if (isListSizeEqual(x_axis, y_axis)) {
            const N = x_axis.length;
            _.forEach(x_axis, (value, index) => {
                diff += value * (y_axis[index] - (value * m + b));
            });
            gradient = (-2 / N) * diff;
        }
    }
    return gradient;
}
exports.GradiendDescentSlope = GradiendDescentSlope;
