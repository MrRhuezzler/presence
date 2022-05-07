import User from '../db/models/user.js';
import bcrypt from 'bcryptjs';

const userLogin = async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ where: { email } });
        const isOkay = await bcrypt.compare(password, user.password);
        if (!isOkay) {
            return res.status(400).json({ errors: [{ "msg": "Please check your credentials" }] });
        }

        return res.status(200).json({ email: user.email, name: user.name, isFaculty: user.isFaculty });

    } catch (err) {
        return res.status(400).json({ errors: [{ "msg": "Please check your credentials" }] });
    }


}

export { userLogin };