import Period from "../db/models/period.js"

export const getAllPeriods = async (req, res) => {

    const periods = await req.user.getPeriods();

    const userPeriods = periods.map(period => {
        return {
            code: period.code,
            name: period.name,
            description: period.description,
        }
    });

    return res.status(200).json(userPeriods);

}