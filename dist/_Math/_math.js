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
const helper_1 = require("../utils/helper");
/**
 * * Math alike library
 * * Shoud serve to calculate statistics alike math formulas
 */
class _Math {
    /**
     * * Line formula
     *      *   y = mx + b
     *  ! m is the slope
     *  ! b is the intercept
     *  *   Slope is a measure of how steep the line is
     *  *   Intercept is a measure of where the line hits the y-axix
     */
    Line(list, m, b) {
        let y = [];
        if (!_.isEmpty(list)) {
            _.forEach(list, value => y.push(value * m + b));
        }
        return y;
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
    Loss(list, line, m, b) {
        let loss = 0;
        if (!_.isEmpty(list) && !_.isEmpty(line)) {
            if (helper_1.isListSizeEqual(list, line)) {
                _.forEach(list, (value, index) => {
                    loss += Math.pow((value - line[index]), 2);
                });
            }
        }
        return loss;
    }
    StepGradient(x_axis, y_axis, m, b, learning_rate) {
        let gradient;
        const b_gradient = helper_1.GradiendDescentIntercept(x_axis, y_axis, m, b);
        const m_gradient = helper_1.GradiendDescentSlope(x_axis, y_axis, m, b);
        const b_current = b - (0.01 * b_gradient);
        const m_current = m - (0.01 * m_gradient);
        gradient = { b: b_current, m: m_current };
        return gradient;
    }
    GradientDescent(x_axis, y_axis, learning_rate, num_iterations) {
        let m = 0;
        let b = 0;
        for (let i = 0; i < num_iterations; i++) {
            let val = this.StepGradient(x_axis, y_axis, m, b, i);
            m = val.m;
            b = val.b;
        }
        return { b, m };
    }
}
exports._Math = _Math;
