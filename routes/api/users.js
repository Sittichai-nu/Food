const express = require("express");
const router = require("express").Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const { check, validationResult } = require('express-validator');
const User = require('../../models/User')

router.post('/', [
    check('name', 'Name is Required').not().isEmpty(),
    check('email', 'Email must be valid').isEmail(),
    check('password', 'Please enter your password with at lease 6 characters').isLength({ min: 6 })
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { name, email, password } = req.body;
        try {
            // see if user exits
            let user = await User.findOne({ email });

            if (user) {
                return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
            }
            user = new User({
                name, email, password
            })

            //Encrypt password
            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            await user.save();

            //return jwt
            const payload = {
                user: {
                    id: user.id
                }
            }
            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                { expiresIn: 3600000000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token })
                })
        } catch (err) {
            console.log(err.message);
            res.status(500).send('server error')
        }

    });

module.exports = router;