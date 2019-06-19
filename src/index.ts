import {init as server} from './lib/server'
import workers from './lib/cluster'
import cluster from 'cluster'
import {DataFrame} from './_data/DataFrame'

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
    console.log(res['Name'])
})