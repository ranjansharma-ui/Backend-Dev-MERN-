const express = require('express');
const connectDB = require('./db');
const users = require('./routes/users')
const app = express();

const PORT = 3000;

//connect to database
connectDB();

app.use('/api',users);

//body parser
app.use(express.json());
//connect to database
connectDB();

app.get('/', (req,res) => {
    console.log("I am inside home page route handler");
    res.send("Hello jee, Welcome to Code help.");
    
})


app.listen(PORT, () => {
    console.log("App server is Ruunning")
})