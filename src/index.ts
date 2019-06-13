import express, {Application} from 'express'
// import {EuclideanDistance} from './regression/Distance'

const app: Application = express()

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`)
})