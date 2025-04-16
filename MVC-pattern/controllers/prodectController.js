const Product = require('../models/productModel');

//business Logic

const getProducts = async(req,res) => {
    try{

        const allProducts = await Product.find();
        if(!allProducts || allProducts.length === 0){
            res.json({
                message: "These is No Product"
            })
        }
        // if we have product >= 1
        res.status(200).json({
            success: true,
            Product: allProducts,
        })

    }
    catch(err){
        res.status(500).json({
            success:false,
            message: "Internal Server Error!"
        })
    }
}

const creatProduct = async (req,res) => {
    try{
        const {name,price,description} = req.body;
        const newProduct = new Product({name,price,description});

        await newProduct.save();
        res.status(200).json({
            Product: newProduct
        })

    }
    catch(err) {
        res.status(500).json({
            success:false,
            message:"Internal Server Error!"
        })
    }

}

const updateProduct = async(req,res) => {
    try{
        const {id} = req.params;
        const {name,price,description} = req.body;

        const updateProduct = await Product.findByIdAndUpdate(id, {name,price,description}, {new:true});

        res.status(200).json({
            Product : updateProduct
        })

    }
    catch(err) {
        res.status(500).json({
            success:false,
            message:"Internal Server Error!"
        })

    }
}

const deleteProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const deleteProduct = await Product.findByIdAndDelete(id);

        if(!deleteProduct) {
            res.json({
                message : "Produnct not found, cannot delete"
            })
        }

        res.status(200).json({
            message: "Product Deleted Success",
            product : deleteProduct
        })



    }
    catch(err) {
        res.status(500).json({
            success:false,
            message:"Internal Server Error!"
        })
    }

}

module.exports = {getProducts, updateProduct,creatProduct,deleteProduct}
