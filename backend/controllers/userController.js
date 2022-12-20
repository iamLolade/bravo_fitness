const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '1d' })
}

const loginUser = async (req, res) => {
    res.json({ msg: 'User logged in'})
}

const registerUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.register(email, password)

        // create token
        const token = createToken(user._id)
        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

    res.json({ msg: 'User registered'})
}

module.exports = {
    loginUser,
    registerUser
}