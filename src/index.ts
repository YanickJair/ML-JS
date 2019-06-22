import {init as server} from './utils/server'
/* import workers from './lib/cluster'
import cluster from 'cluster' */
import {DataFrame} from './lib/DataFrame'
import {MeasureOfLocation} from './lib/MeasureOfLocation'

//* Look for our cluster
function init(cb?: any) {
    server(8080)
    cb()
}

//* Run Server
init(() => {
    const df = new DataFrame()
    const data = {Name: ['Tom', 'Jack', 'Steve', 'Ricky'], Age:[28,34,29,42]}
    const res = df.DataFrame(data)
    const lm = new MeasureOfLocation([7.07, 7.00, 7.10, 6.97, 7.00, 7.03, 7.01, 7.01, 6.98, 7.08])
    console.log(lm.Mean())
})