import * as _ from 'lodash'
import {isListSizeEqual} from '../utils/helper'

/**
 * @description:
 *  *   The most common distance
 * @param {list1} LIST
 * @param {list2} LIST
 * @return 
 *  * distance
 */
export function EuclideanDistance(list1: Array<number>, list2: Array<number>): number {
    let distance: number = 0
    if (isListSizeEqual(list1, list2)) {
        _.forEach(list1, (_, index) => {
            distance += (list1[index] - list2[index]) ** 2
        })
    }
    //* Return the square root of the distance
    return Math.sqrt(distance)
}

/**
 * @description:
 *  * Similiar to the Euclidean Distance 
 *  * Except it return absolute sum of distance    
 * @param list1 
 * @param list2 
 */
export function ManhattanDistance(list1: Array<number>, list2: Array<number>): number {
    let distance: number = 0
    if (isListSizeEqual(list1, list2)) {
        _.forEach(list1, (_, index) => {
            //* Add absolute positive integer value to the distance
            distance += Math.abs(list1[index] - list2[index])
        })
    }
    return distance
}

/**
 * 
 * @param list1
 * @param list2 
 */
export function HammingDistance(list1: Array<number>, list2: Array<number>): number {
    let distance: number = 0
    if (isListSizeEqual(list1, list2)) {
        _.forEach(list1, (val, index) => {
            if (_.isEqual(list1[index], list2[index])) {
                distance += 1
            }
        })
    }
    return distance/list1.length
}