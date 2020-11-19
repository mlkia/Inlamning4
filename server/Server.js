import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'

dotenv.config()
const app = express()
app.use(helmet())
const port = process.env.PORT

app.get('/home', (req, res) => {
    res.send('This is home page')
})

app.listen(1337, () =>{
  console.log (`SERVER RUNING ON PORT ${port}`)
} )