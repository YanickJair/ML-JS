import express, {Application} from 'express'

export function init(port: number) {
    const app: Application = express()

    app.listen(port, err => {
        if (!err) {
            console.info(`Server running: http://localhost:${port}`)
        } else {
            console.error(`Server could not be started at: ${port}`)
        }
    })
}