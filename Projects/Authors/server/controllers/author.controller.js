

const Author = require ("../models/author.model");

//implement your CRUD functionality-Label Errors individually for recognition 

//Find All (use 500 error code, reasoning, it will only break if there is a server issue.)
module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => {
            res.json(allAuthors)
        })
        .catch((err) => {
            res.status(500).json({err})
    });
}

//Find One 
module.exports.findOneAuthor = (req, res) => {
Author.findById({ _id: req.params.id })
    .then(oneAuthor => {
        res.json({ author: oneAuthor })
    })
    .catch((err) => {
        res.status(400).json({err})
    });}

//Create
module.exports.createNewAuthor = (req, res) => {
Author.create(req.body)
    .then(newAuthor => {
        res.json({ author: newAuthor })
    })
    .catch((err) => {
        res.status(400).json({err})
    });}

    // module.exports.createNewAuthor = (req, res) => {
    //     Author.create(req.body)
    //         .then(newAuthor => {
    //             res.json({ author: newAuthor })
    //         })
    //         .catch((err) => {
    //             res.json({ message: 'Create: Something went wrong', error: err })
    //         });}

//Create With Validation Errors Platform Way
// module.export = {
//     create: (req, res) => {
//         const { name } = request.body;
//         Author.create ({ 
//             name: name
//         })
//             .then(author => res.json(author))
//             .catch(err => res.status(400).json(err))
//     }
// }

//Update 
module.exports.updateAuthorById = (req, res) => {
Author.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, runValidators: true }
)
    .then(updatedAuthor => {
        res.json({ author: updatedAuthor })
    })
    .catch((err) => {
        res.status(400).json({err})
    });}

//Delete 
module.exports.deleteAnExistingAuthor = (req, res) => {
Author.findByIdAndDelete({ _id: req.params.id })
    .then(result => {
        res.json({ result: result })
    })
    .catch((err) => {
        res.status(400).json({err})
    });}

