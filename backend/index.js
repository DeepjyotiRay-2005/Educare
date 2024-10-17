const express = require('express');
require('./db/Confug')
const {body, validationResult} = require('express-validator');

const port = 5000;

const app = express();

const User = require('./db/User');

app.use(express.json());

app.post("/register",[
    body('name').isLength({ min : 3}),
    body('email').isEmail(),
    body('password').isLength({ min : 5})
], async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors : errors.array()});
    }
    try {
        let users = new User(req.body);
    let result = await users.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
    } catch (error) {
        return res.status(500).send('error');
    }
});

app.post("/login", async (req, resp) => {
    try {
        if (req.body.password && req.body.email) {
            let user = await User.findOne({ email: req.body.email, password: req.body.password }).select("-password");
            if (user) {
                resp.send(user); 
            } else {
                resp.status(404).send("User not found or incorrect credentials");
            }
        } else {
            resp.status(400).send("Please fill both auth fields");
        }
    } catch (error) {
        console.error(error.message);
        resp.status(500).send("Server error, please try again later");
    }
});

app.listen(port);