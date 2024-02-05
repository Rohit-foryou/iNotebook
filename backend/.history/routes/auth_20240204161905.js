const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Create a User using: POST "/api/auth/". doesn't require authentication
router.post('/', [

    body('name', 'Enter a valid Name').isLength({ min: 5 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password','Password must be at least 5 characters').isLength({ min: 5 }),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    User.create({
        username: req.body.username,
        password: req.body.password,
    }).then(user=> res.json(user));

    res.send(req.body);

})

module.exports = router