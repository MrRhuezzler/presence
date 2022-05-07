import User from '../db/models/user.js';
import bcrypt from 'bcryptjs';

const userLogin = async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email });
        const isOkay = await bcrypt.compare(password, user.password);
        if (!isOkay) {
            return res.status(400).json({ errors: [{ "msg": "Please check your credentials" }] });
        }

    } catch (err) {
        return res.status(400).json({ errors: [{ "msg": "Please check your credentials" }] });
    }

}

export { userLogin };