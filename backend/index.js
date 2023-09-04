const connectToMongo = require('./db');

connectToMongo();
const express=require('express')
const cors = require('cors')
const app = express()
const port=5000

app.use(cors())
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))


app.listen(port,()=>{
    console.log('listening to port',port); 
})