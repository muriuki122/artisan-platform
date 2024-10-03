const db = require('../config/db');

const registerUser = (req, res) => {
    const { name, email, password } = req.body;
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.execute(query, [name, email, password], (err, result) => {
        if (err) return res.status(500).json({ message: 'Registration failed' });
        res.status(200).json({ message: 'User registered successfully' });
    });
};

const loginUser = (req, res) => {
    // Logic for user login
};

module.exports = { registerUser, loginUser };
