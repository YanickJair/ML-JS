import * as _ from 'lodash'
import {dataType, createDimensionalArray} from '../utils/helper'

/**
 * @description
 *  *   Based on Rectangular Data, DataFrame is essentially a two-dimensional
 *  *   matrix with rows indicating records (cases) and columns indicating features(variables).
 * @tutorial
 *  * feature: A column in the table is commoly referred to as a feature
 *      *   Synonymous: attribute, input, predictor, variable
 */
export class DataFrame {
    dtype: any
    response: any
    /**
     * 
     * @param data
     * @description data parameter can be array of object or array of matrix
     */
    DataFrame(data: any, dtype?: any, columns?: string[]): Array<any>{
        //TODO simplify the logic behind columns and rows
        //TODO conditionals for each data type
        try {
            this.dtype = dataType(data)
            //* If we have header, we set it first
            switch (this.dtype) {
                //* Check if we have an object containing array values
                case 'object':{
                    if (typeof columns !== 'undefined') {
                        this.response = createDimensionalArray(columns.length, data.length)
                        _.forEach(this.response, (__, index: number) => {
                            this.response[index] = columns[index]
                            _.forEach(data, (value, _index) => {
                                this.response[index][_index] = value
                            })
                        });
                    }
                    
                    break;
                }
                
                default:
                    break;
            }
        } catch (error) {
            console.log(error)
        }
        return this.response
    }

    getDataType() {
        return this.dtype
    }
}