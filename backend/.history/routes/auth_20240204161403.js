const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Create a User using: POST "/api/auth/". doesn't require authentication
router.post('/', [

    body('name').isLength({ min: 5 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
], (req, res) => {

    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    res.send(req.body);

})

module.exports = router