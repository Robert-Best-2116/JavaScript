

const Product = require ("../models/product.model");


            //Find All 
            module.exports.findAllProducts = (req, res) => {
                Product.find()
                    .then((allProducts) => {
                        res.json(allProducts)
                    })
                    .catch((err) => {
                        res.json({message: "Find All: Something went wrong", error: err})
                });
            }

            //Find One 
            module.exports.findOneProduct = (req, res) => {
            Product.findById(req.params.id )
                .then(oneProduct => {
                    res.json({ product: oneProduct })
                })
                .catch((err) => {
                    res.json({ message: 'Find One: Something went wrong', error: err })
                });}

            //Create
            module.exports.createNewProduct = (req, res) => {
            Product.create(req.body)
                .then(newProduct => {
                    res.json({ product: newProduct })
                })
                .catch((err) => {
                    res.json({ message: 'Create: Something went wrong', error: err })
                });}

            //Update 
            module.exports.updateProductById = (req, res) => {
            Product.findByIdAndUpdate( req.params.id, req.body, { new: true, runValidators: true })
                .then(updatedProduct => {
                    res.json({ product: updatedProduct })
                })
                .catch((err) => {
                    res.json({ message: 'Update: Something went wrong', error: err })
                });}

            //Delete 
            module.exports.deleteAnExistingProduct = (req, res) => {
            Product.findByIdAndDelete( req.params.id )
                .then(result => {
                    res.json({ result: result })
                })
                .catch((err) => {
                    res.json({ message: 'Delete: Something went wrong', error: err })
                });}