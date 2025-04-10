//including expresss module and initialising an app
const express = require('express');
const app = express();
//variable that stores the port number
const port = 3000;


//request -> get/ put/ post/ delete
//path - /, /about, /articles, /blog
app.get('/', (req,res) => {
    console.log("Get reqest receive hui h");
    
})

//start your app or serverd
app.listen(port,() => {
    console.log("Application start ho chuki hai");  
} )

