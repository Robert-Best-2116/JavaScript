

const AuthorController = require("../controllers/author.controller");

module.exports = app => {
    app.get('/api/author', AuthorController.findAllAuthors);
    app.get('/api/author/:id', AuthorController.findOneAuthor);
    app.put('/api/author/:id', AuthorController.updateAuthorById);
    app.post('/api/author', AuthorController.createNewAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAnExistingAuthor);
}