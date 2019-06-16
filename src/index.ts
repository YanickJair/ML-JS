import {init as server} from './lib/server'
import workers from './lib/cluster'
import cluster from 'cluster'

//* Look for our cluster
function init() {
    if (cluster.isMaster) {
        workers()
    } else {
        server(8080)
    }
}

//* Run Server
init()