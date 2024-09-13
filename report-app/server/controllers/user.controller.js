const User = require('../models/user.model');
const Response = require('../utils/ResponseHandler');

const isEmail = (str) => /\S+@\S+\.\S+/.test(str);

const signup = async (req, res) => {
    const { email, username, password } = req.body;

    // Validations
    if (!email || !username || !password) {
        return res.status(400).json(Response(400, 'All fields are required !!'));
    }

    const user = await User.findOne({ email });

    if (user) {
        return res.status(400).json(Response(400, 'Email already exists'));
    }

    // Creating a new user
    const newUser = new User({
        email,
        username,
        password
    });

    await newUser.save();

    res.status(201).json(Response(201, 'User created successfully', newUser));
}

const login = async (req, res) => {
    const { input, password } = req.body;

    if (!input) {
        return res.status(400).json(Response(400, 'Username or email is required!!'));
    }

    const query = isEmail(input) ? { email: input } : { username: input };

    const user = await User.findOne(query);
    if (!user) {
        return res.status(401).json(Response(401, 'Invalid credentials!!'));
    }

    if (user.password != password) {
        return res.status(403).json(Response(403, 'Invalid Password!!'));
    }

    res.json(Response(200, 'Logged in successfully', user));

};

module.exports = {
    signup,
    login
}