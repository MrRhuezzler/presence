import User from "../db/models/user.js"

const createNewUser = async (res, req) => {

    const { email, password, name } = req.body;

    const user = User.findOne({ email });
    if (user) {
        return res.status(400).json({ errors: ["User already exists"] });
    }

    try {

        const hashedPassword = await User.hashPassword(password);

        await User.create({
            email,
            password: hashedPassword,
            name
        });

    } catch (err) {
        return res.status(500).json({ errors: ["Error creating the user"] });
    }

    return res.status(201).json({ 'message': 'User created successfully' });

}

export { createNewUser };