import User from "../db/models/user.js";
import bcrypt from 'bcryptjs';

const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (err) {
        throw err;
    }
}

const createNewUser = async (req, res) => {

    const { email, password, name } = req.body;

    const user = await User.findOne({ where: { email: email } });
    if (user) {
        return res.status(400).json({ errors: [{ "msg": "User already exists" }] });
    }

    try {

        const hashedPassword = await hashPassword(password);

        await User.create({
            email,
            password: hashedPassword,
            name,
            isFaculty: false,
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({ errors: [{ "msg": "Error creating the user" }] });
    }

    return res.status(201).json({ 'message': 'User created successfully' });

}

const createNewFaculty = async (req, res) => {

    const { email, password, name } = req.body;

    const user = await User.findOne({ where: { email: email } });
    if (user) {
        return res.status(400).json({ errors: [{ "msg": "User already exists" }] });
    }

    try {

        const hashedPassword = await hashPassword(password);

        await User.create({
            email,
            password: hashedPassword,
            name,
            isFaculty: true,
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({ errors: [{ "msg": "Error creating the user" }] });
    }

    return res.status(201).json({ 'message': 'User created successfully' });

}


export { createNewUser, createNewFaculty };