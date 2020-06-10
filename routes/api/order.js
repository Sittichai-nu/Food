const express = require("express");
const router = require("express").Router();
const order = require('../../models/order')
const auth = require('../../controllers/auth')

router.get('/', auth, async (req, res) => {
    try {
        const order = await order
            .find(req.query)
            .sort({ date: -1 })
            .then(order => res.json(order))
    } catch (err) {
        res.status(422).json(err);
    }

});

router.post('/', auth, (req, res)=>{
    const newOrder = new Order({
        user: req.body.id,
        item: req.body.item,
        section: req.body.section,
        quantity:req.body.quantity,
        price:req.body.price,
        done:req.body.done
    })
    newOrder.save().then(order => res.json(order))
})

module.exports = router;