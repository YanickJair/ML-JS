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
 * @description:
 *  *   The most common distance
 * @param {list1} LIST
 * @param {list2} LIST
 * @return
 *  * distance
 */
function EuclideanDistance(list1, list2) {
    let distance = 0;
    if (helper_1.isListSizeEqual(list1, list2)) {
        _.forEach(list1, (_, index) => {
            distance += Math.pow((list1[index] - list2[index]), 2);
        });
    }
    //* Return the square root of the distance
    return Math.sqrt(distance);
}
exports.EuclideanDistance = EuclideanDistance;
/**
 * @description:
 *  * Similiar to the Euclidean Distance
 *  * Except it return absolute sum of distance
 * @param list1
 * @param list2
 */
function ManhattanDistance(list1, list2) {
    let distance = 0;
    if (helper_1.isListSizeEqual(list1, list2)) {
        _.forEach(list1, (_, index) => {
            //* Add absolute positive integer value to the distance
            distance += Math.abs(list1[index] - list2[index]);
        });
    }
    return distance;
}
exports.ManhattanDistance = ManhattanDistance;
/**
 *
 * @param list1
 * @param list2
 */
function HammingDistance(list1, list2) {
    let distance = 0;
    if (helper_1.isListSizeEqual(list1, list2)) {
        _.forEach(list1, (val, index) => {
            if (_.isEqual(list1[index], list2[index])) {
                distance += 1;
            }
        });
    }
    return distance / list1.length;
}
exports.HammingDistance = HammingDistance;
