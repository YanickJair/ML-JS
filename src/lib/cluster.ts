import cluster from 'cluster'
import os from 'os'

export default function() {
    //* Cunt the machine's CPU's
    const cpuCount = os.cpus().length

    for (let i = 0; i < cpuCount; i++) {
        cluster.fork()
    }

    //* Listen for dying workers
    cluster.on('exit', () => {
        cluster.fork()
    })
}