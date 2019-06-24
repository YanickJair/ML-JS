import * as _ from 'lodash'
import {ArrayHelper as Measures} from '../_interface/_interface'
/**
 * @description Provide the Analyst with some quantitative values 
 * of where the center, or some other location, of data is located.
 */
export class MeasureOfLocation {
    private data!: Array<number>
    private measures!: Measures
    private mean!: Measures
    private median!: Measures
    private data_len!: number
    private variance!: Measures

    constructor(data: Array<number>) {
        this.data = data
        this.data_len = _.size(data)
    }

    Measures(): Measures {
        if (!_.isEmpty(this.data)) {
            this.measures = {
                mean: this.Mean()['mean']
            }
        }
        return this.measures
    }

    /**
     * @description the numerical average of our data's elements
     * @method x = xi/n
     */
    Mean(): Measures {
        if (!_.isEmpty(this.data)) {
            let total_sum = 0
            _.forEach(this.data, element => {
                total_sum += element
            })
            const mean = total_sum/this.data_len
            this.mean = {mean: mean.toFixed(2)}
        }
        return this.mean
    }

    /**
     * @description The purpose of mean  is to reflect the central tendency of the sample
     * in such a way that is uninfluenced by extreme values or outliers
     * @property median = x(n+1)/2, if n is odd
     * media = 1/2(Xn/2 + Xn/2+1), if n is even
     */
    Median(): Measures {
        if (!_.isEmpty(this.data)) {
            //* Sort by increasing order before anything
            const sorted_data = this.data.sort((a, b) => a - b)
            let _median = 0

            //* n is even
            if ((this.data_len % 2) == 1) {
                _median = sorted_data[Math.round((this.data_len+1)/2)]
            } else {
                //* n is odd
                //! Attention: because array start count from 0 we subract the first pos and let the second as it is
                const pos = [(this.data_len/2)-1, (this.data_len/2)]
                _median = (sorted_data[pos[0]] + sorted_data[pos[1]])/2
            }
            this.median = {median: _median.toFixed(2)}

        }
        return this.median
    }
}