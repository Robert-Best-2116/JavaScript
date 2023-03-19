

const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.get('/api/products', ProductController.findAllProducts);
    app.get('/api/product/:id', ProductController.findOneProduct);
    app.post('/api/product', ProductController.createNewProduct);
    app.patch('/api/product/:id', ProductController.updateProductById);
    app.delete('/api/product/:id', ProductController.deleteAnExistingProduct);
}