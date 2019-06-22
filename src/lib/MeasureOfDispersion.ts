import * as _ from 'lodash'
import {ArrayHelper as Measures} from '../_interface/_interface'

export class MeasureOfDisperion {
    private variance!: Measures

    Variance(mean: number, data: Array<number>): Measures {
        if (!_.isEmpty(data)) {
            let var_sum = 0
            _.forEach(data, element => {
                var_sum += (element - mean) ** 2
            })
            this.variance = {variance: var_sum/_.size(data)}
        }
        return this.variance
    }

    /**
     * @description the positive square root of Varaince
     */
    Deviation(): Measures {
        return []//{deviation: Math.sqrt(this.Variance()['variance'])} 
    }
}