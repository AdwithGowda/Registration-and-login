const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
router.post('/', async (req, res) => {
    const data = req.body;
    const isEmailExists = await User.findOne({ email: data.email });
    if (isEmailExists) {
        return res.send("Email already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(data.password, salt);
    try {
        const createdUser = new User({
            name: data.name,
            email: data.email,
            phone: data.phone,
            password: hashedpassword,

        });
        await createdUser.save();
        res.send("User created")
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});
router.post('/login', async (req, res) => {
    const data = req.body;
    const userData = await User.findOne({ email: data.email });
    if (!userData) {
        return res.send({
            message: "User not Registered",
            data: [],
            status: "error"
        });
    }

    //check if password is equal
    const validPassword = await bcrypt.compare(data.password, userData.password);
    if (!validPassword) {
        return res.send(
            {
                message: "Invalid user email or password",
                data: [],
                status: "error"
            });
    };
    res.send({
        message: "Login succesful",
        data: userData,
        status: "succesful"
    })
});
module.exports = router;