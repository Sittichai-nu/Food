const express = require("express");
const router = require("express").Router();
const auth = require('../../controllers/auth')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const { check, validationResult } = require('express-validator');


router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});
router.post('/', [
    check('email', 'Email must be valid').isEmail(),
    check('password', 'Password is required').exists()
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { email, password } = req.body;
        try {
            // see if user exits
            let user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
            }


            //return jwt
            const payload = {
                user: {
                    id: user.id
                }
            }


            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                { expiresIn: '6h' },
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