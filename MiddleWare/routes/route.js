const express = require('express')
const router = express.Router()

//middlewares
const auth = function(req,res,next) {
    console.log("I am inside auth wala middleware");
    
    //tumahari sahayta k liye ek dummy uder add krra hu
    req.user = {userId:1, role:"student"};

    if(req.user) {
        //if a valid user is there in req, then proceed to next middleware
        next();
    }
    else{
        //if not a valid user
        res.json({
            success:false,
            message: "Not a Valid User",
        })
    }
}

const isStudent = function(req, res, next) {
    console.log("I'm inside student wala middleware");

    if(req.user.role === "student") {
        next();
    }
    else{
        res.json({
            success:false,
            message: "Access Denied, this rout is only for student"
        })
    }
    
}

const isAdmin = function (req,res,next) {
    console.log("I am inside isAdim wala middleware");

    if(req.user.role === "admin") {
        next();
    }
    else{
        res.json({
            success: false,
            message: "Access denied: this route is only for admin"
        });
    }
}


//routes

router.get("/student", auth, isStudent, (req,res) => {
    console.log("I am inside Student route")
    res.send("Student specific page");
})

router.get("/admin", auth, isAdmin, (req,res) => {
    console.log("I am inside admin route")
    res.send("Admin specific page");
})




module.exports = router