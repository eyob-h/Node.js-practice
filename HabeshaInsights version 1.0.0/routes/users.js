const User = require("../models/user.model");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//update

router.put("/:id", async (req, res) => {
    // if (req.body.userId === req.params.id || req.body.isAdmin) {
    console.log(req.body.first_name)
    console.log(req.body.userId)
    console.log(req.params.id)
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
        try {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        } catch (err) {
            return res.status(500).json(err);
        }
        }
        try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        });
        res.status(200).json("Account has been updated");
        } catch (err) {
        return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can update only your account!");
    }
    });

//delete
//get
//follow
//unfollow


module.exports = router;