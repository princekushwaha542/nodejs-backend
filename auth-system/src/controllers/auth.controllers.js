const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
    try {
        const { username, email, password } = req.body;

        const isUserAlreadyExists = await userModel.findOne({ email });
        if(isUserAlreadyExists) {
            return res.status(409).json({
                message: "User already exists",
            });
        }

        const user = await userModel.create({
            username,
            email,
            password,
        });

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET
        );

        res.cookie("token", token);

        return res.status(201).json({
            message: "User registered successfully",
            user,
            token,
        });

    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = { registerUser };