import User from "../db/models/user.js";

const pong = async (req, res) => {

    await User.create({
        name: "John",
        email: "abc@abc.com",
        password: "123456",
        isFaculty: true
    });

    return res.status(200).json({ 'message': 'pong' });
}

export { pong };