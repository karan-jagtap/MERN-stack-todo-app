const { request } = require("express");

const express = require('express');
const router = express.Router();

//todo model
const TodoModel = require('../../models/TodoModel');


// @route GET api/todos
// @desc Get all todos
// @access Public
router.get('/', (req, res) => {
    TodoModel
        .find()
        .sort({ date: -1 })
        //.then()
        //1. it returns all documents in it and then parses it using res.json(document)
        .then(todos => {
            res.json(todos);
            console.log('All Todos retrieved successfully.');
        })
        .catch(err => console.log(`Todo Model GET Error in file TodoRoutes.js --> ${err}`));
});

// @route POST api/todos
// @desc Add a todo
// @access Public
router.post('/', (req, res) => {
    const newTodo = new TodoModel({
        name: req.body.name,
        markDone: false
    });
    newTodo
        .save()
        //.then()
        //1. it returns the currently saved document
        .then(todoItem => {
            res.json(todoItem);
            console.log('A new Todo Item saved to db\n--> ' + todoItem);
        })
        .catch(err => console.log(`Todo Model POST Error in file TodoRoutes.js --> ${err}`));
});

// @route UPDATE api/todos/:id
// @desc Update a Todo
// @access Public
router.post('/update/:id', (req, res) => {
    let newTodo = new TodoModel();
    newTodo._id = req.params.id;
    newTodo.name = req.body.name;
    newTodo.done = req.body.done;
    newTodo.date = Date.now();
    TodoModel
        .findByIdAndUpdate(
            { _id: req.params.id },
            newTodo,
            { new: true })
        .then(TodoItem => {
            res.json(TodoItem);
            console.log(`Sending edited todo data\n${TodoItem}`);
        })
        .catch(err => {
            res.status(404).json({
                success: false,
                message: 'Todo with given id not updated.',
                mongoError: err.message
            });
            console.log(`Todo Model UPDATE findByIdAndUpdate Error in file TodoRoutes.js --> ${err}`);
        });
});

// @route DELETE api/todos/:id
// @desc Delete a Todo
// @access Public
router.delete('/:id', (req, res) => {
    TodoModel
        .findById(req.params.id)
        .then(TodoItem => {
            TodoItem
                .remove()
                .then(() => {
                    res.json({ success: true });
                })
                .catch(err => console.log(`Todo Model DELETE remove Error in file TodoRoutes.js --> ${err}`));
        })
        .catch(err => {
            res.status(404).json({
                success: false,
                message: 'Todo with given id does not exists.',
                mongoError: err.message
            });
            console.log(`Todo Model DELETE findById Error in file todos.js --> ${err}`);
        });
});

module.exports = router;

//the flow is as follows
//1. router makes a request to a specific url
//2. then if there are any parameters need to be included in it then we use
// --req.params.<parameter> which is /api/todos/:parameter
// --the name of parameter should match
//3. else we return the resolve object as json to response,
// --which then will be displayed to the frontend app