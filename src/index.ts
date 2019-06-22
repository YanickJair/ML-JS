import {init as server} from './utils/server'
/* import workers from './lib/cluster'
import cluster from 'cluster' */

//* Look for our cluster
function init(cb?: any) {
    server(8080)
    cb()
}

//* Run Server
init(() => {
})