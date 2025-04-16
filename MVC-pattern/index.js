const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes') //mounts it's means calling
const app = express()
app.use(express.json())

//load env
dotenv.config();
const port = process.env.PORT;



//connect to database
connectDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//calling
app.use('/api', productRoutes)

// hit -> api/

app.listen(port, () => {
  console.log(`Product app listening on port ${port}`)
})