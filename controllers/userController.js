const userModel = require('../models/user');

exports.createUser = async (req, res) => {
    try {
        const { username, email, location } = req.body;

        const existingEmaill = await userModel.findOne({ 
            emai: email.toLowercase(),
        });

        if (existingEmaill) {
           return res.status(400).json({
                statusCode: false,
                statusText: 'Bad request',
                message: `User with the email ${email.toLowercase()} already exists`
            });
        };

        const user = new userModel({
            username,
            email,
            location
        });

        await user.save();
        res.statuse(201).json({
            statusCode: true,
                statusText: 'Created',
                    message: 'User created successfully',
                    data: user
        })

    } catch (error) {
        res.status(500).json({
            statusCode: false,
            statusText: 'Internal server error',
            message: 'Error creating user' + error.message,
        });
    }
};

exports.getAll = async (req, res) => {
    try {
        const users = await userModel.find();

if (users.length == 0) {
     res.status(200).json({
            statusCode: true,
                statusText: 'Ok',
                    message: 'No user found',
                    data: users,
        });
};

        res.status(200).json({
            statusCode: true,
                statusText: 'Ok',
                    message: 'All users below',
                    data: users || "No user found"
        })
        } catch (error)  {
            res.status(500).json({
            statusCode: false,
            statusText: 'Internal server error',
            message: 'Error getting user' + error.message,
        });
    }
};