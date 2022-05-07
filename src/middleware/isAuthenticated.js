import User from "../db/models/user.js";

export const isAuthenticated = async (req, res, next) => {

    req.user = await User.findOne({ email: 'abcabc@gmail.com' });

    // const authHeader = req.headers.Authorization;
    // const userEmail = Buffer.from(authHeader, 'base64').toString();

    // if (!authHeader) {
    //     return res.status(401).json({ message: 'Unauthorized' });
    // }

    // try {

    //     const user = await User.findOne({ email: userEmail });
    //     if (!user) {
    //         return res.status(401).json({ message: 'Unauthorized' });
    //     }

    //     // user is present
    //     req.currentUser = user;

    // } catch (err) {
    //     return res.status(401).json({ message: 'Unauthorized' });
    // }

    next();

}
