const express = require('express');
const cors = require('cors');
require('./Db/Config');
const { body, validationResult } = require('express-validator');

const port = process.env.PORT || 5000;

const app = express();
const User = require('./db/User');

app.use(express.json());
app.use(cors());

// Register Route
app.post("/register", [
    body('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let checkUser = await User.findOne({ email: req.body.email });
        if (checkUser) {
            return res.status(400).json({ error: "Email already exists" });
        }

        let users = new User(req.body);
        let result = await users.save();
        result = result.toObject();
        delete result.password;  // Remove password from response
        res.status(201).json(result);  // Return success response with status code 201

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: "Server error. Please try again later." });
    }
});

// Login Route
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if both email and password are provided
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        let user = await User.findOne({ email: email, password: password }).select("-password");
        if (user) {
            return res.status(200).json(user);  // Return the user if credentials match
        } else {
            return res.status(404).json({ error: "Invalid email or password" });
        }

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: "Server error. Please try again later." });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
