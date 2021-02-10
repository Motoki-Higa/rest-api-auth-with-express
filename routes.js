'use strict';

const express = require('express');
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

// This array is used to keep track of user records
// as they created.
const users = [];

// Construct a router instance
const router = express.Router();

// To check if value exist for 'name' field with express-validator
// const nameValidator = check('name')
//     .exists({ checkNull: true, checkFalsy: true })
//     .withMessage(`Please provide a value for 'name'`)

// Route that creates a new user.
router.post('/users', [
    check('name')
        .exists()
        .withMessage(`Please provide a value for 'name'`),
    check('username')
        .exists()
        .withMessage(`Please provide a value for 'username'`),
    check('password')
        .exists()
        .withMessage(`Please provide a value for 'password'`),
], (req, res, next) => {
    // Attempt to get the validation result from the request object.
    const errors = validationResult(req);

    // If there are validation errors
    if (!errors.isEmpty()){
        // Use the Array 'map()' methos to get a list of error messages.
        const errorMessages = errors.array().map(error => error.msg);

        // Return the validation errors to the client.
        return res.status(400).json({ errors: errorMessages });
    }

    // Get the user from the request body
    const user = req.body;

    // Hash the new user's password
    user.password = bcryptjs.hashSync(user.password);

    // Add the user to the 'users' array.
    users.push(user);

    // Set the status to 201 Created and end the response/
    res.status(201).end();
});

module.exports = router;