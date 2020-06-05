const express = require("express");
const router = require("express").Router();
const { check, validationResult } = require('express-validator/check');


router.post('/', [
    check('name', 'Name is Required').not().isEmpty(),
    check('email', 'Email must be valid').isEmail(),
    check('password', 'Please enter your password with at lease 6 characters').isLength({ min: 6 })
],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        res.send('User route')
    });

module.exports = router;