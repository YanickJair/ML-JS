import {init as server} from './utils/server'
/* import workers from './lib/cluster'
import cluster from 'cluster' */
import {Estimator} from './lib/Estimators'

//* Look for our cluster
function init(cb?: any) {
    server(8080)
    cb()
}

//* Run Server
init(() => {
    const solids_reduction = [3,7,11,15,18,27,29,30,30,31,31,32,33,33,34,36,36,
        36,37,38,39,39,39,40,41,42,42,43,44,45,46,47,50]
    const oxygen_demand = [5,11,21,16,16,28,27,25,35,30,40,32,34,32,34,37,38,
        34,36,38,37,36,45,39,41,40,44,37,44,46,46,49,51]
    const estimator = new Estimator(solids_reduction, oxygen_demand)
    console.log(estimator.ConfidenceIntervalForSlope(2.045))
})