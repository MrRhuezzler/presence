import Room from "../db/models/room.js"
import Period from "../db/models/period.js";
import { otpGenerator } from "../utils/otpGenerator.js";

export const createNewRoom = async (req, res) => {

    const { period_code } = req.body;

    // generate a random otp
    const generatedOTP = otpGenerator();

    const room = await Room.create({
        otp: generatedOTP
    });

    // add the period to the room
    const period = await Period.findOne({ where: { code: period_code } });
    if (!period) {
        return res.status(404).json({ errors: [{ msg: 'Period Code Incorrect' }] });
    }

    // await room.addPeriod(period);
    await period.addRoom(room);

    const users = await period.getUsers();
    const students = users.filter(user => user.isFaculty === false);
    const periodStudents = students.map(student => {
        return {
            name: student.name,
            email: student.email,
        }
    });

    return res.status(200).json({
        otp: generatedOTP,
        students: periodStudents
    });

}