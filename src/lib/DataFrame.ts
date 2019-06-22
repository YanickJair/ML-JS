import * as _ from 'lodash'
import {dataType} from '../utils/helper'
import { ArrayHelper as Frame } from '../_interface/_interface'
/**
 * @description
 *  *   Based on Rectangular Data, DataFrame is essentially a two-dimensional
 *  *   matrix with rows indicating records (cases) and columns indicating features(variables).
 * @tutorial
 *  * feature: A column in the table is commoly referred to as a feature
 *      *   Synonymous: attribute, input, predictor, variable
 */

export class DataFrame {
    private dtype: any
    private frame!: Frame;

    /**
     * @description note that we're returning our Frame interface
     * @description it allows us to get data by index
     * @param data
     * @description data parameter can be array of object or array of matrix
     */
    DataFrame(data: any, dtype?: any, columns?: string[]): Frame {
        //TODO simplify the logic behind columns and rows
        //TODO conditionals for each data type
        try {
            this.dtype = dataType(data)
            this.frame = []
            //* If we have header, we set it first
            switch (this.dtype) {
                //* Check if we have an object containing array values
                case 'object':{
                    if (typeof columns !== 'undefined') {
                        _.forEach(columns, (col: any, pos: number) => {
                            this.frame[col] = new Array()
                            _.forEach(data, item => {
                                this.frame[col].push([item[pos]])
                            })
                        })    
                    } else {
                        _.forEach(data, (item: any, pos: any) => {
                            this.frame[pos] = new Array()
                            if (typeof item === 'object') {
                                _.forEach(item, val => {
                                    this.frame[pos].push(val)
                                })
                            } else {
                                this.frame[pos].push(item)
                            }
                        })
                    }
                    
                    break;
                }
                
                default:
                    break;
            }
        } catch (error) {
            console.log(error)
        }
        return this.frame
    }

    /**
     * @description return the rows(indexs) from our frame
     */
    FrameColumns() {
        return Object.keys(this.frame)
    }

    /**
     * @description return the type of our dataset frame
     */
    FrameType() {
        return this.dtype
    }
}