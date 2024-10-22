const User = require('../model/UserSchema');

exports.AddUser = async (req, res) => {
    const { userId, username, email, password, avatar, channels } = req.body;

    try {
        const existingUser = await User.findOne({email});

        if(existingUser){
            res.status(400).json({message:"User Already Existed"})
        }

        const newUser = new User({
            userId, username, email, password, avatar, channels
        })

        const savedUser = await newUser.save();

        res.status(201).json({ message:"User Created Successfully !", user: savedUser })
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
}