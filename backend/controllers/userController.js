const loginUser = async (req, res) => {
    res.json({ msg: 'User logged in'})
}

const registerUser = async (req, res) => {
    res.json({ msg: 'User registered'})
}

module.exports = {
    loginUser,
    registerUser
}