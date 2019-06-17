import {init as server} from './lib/server'
import workers from './lib/cluster'
import cluster from 'cluster'
import {DataFrame} from './_data/DataFrame'

//* Look for our cluster
function init(cb?: any) {
    if (cluster.isMaster) {
        workers()
    } else {
        server(8080)

        const df = new DataFrame()
        const d = [['Alex',10],['Bob',12],['Clarke',13]]
        const res = df.DataFrame(d, null, ['Name', 'Age'])
        console.log(res)
    }
}

//* Run Server
init()