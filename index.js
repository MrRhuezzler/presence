import 'dotenv/config';
import app from './src/server.js';
import sequelize from './src/db/index.js';
import logger from './src/utils/logger.js';
import User from './src/db/models/user.js';
import Period from './src/db/models/period.js';

const PORT = 3000;

sequelize.sync().then(async () => {

    // const user = await User.create({ name: "STUDENT 1", email: "defdef@gmail.com", password: "123456", isFaculty: false });
    // const user = await User.create({ name: "TEACHER 1", email: "abcabc@gmail.com", password: "123456", isFaculty: true });

    // const period = await Period.create({
    //     code : '20XT42',
    //     name : 'Operating Systems',
    //     description : 'MSC TCS - 2nd Year'
    // });
    // const period = await Period.create({
    //     code : '20XT41',
    //     name : 'Stochastic Process',
    //     description : 'MSC TCS - 2nd Year'
    // });
    // console.log(period);

    // const user = await User.findOne({ where: { email: 'defdef@gmail.com' } });
    // const period = await Period.findOne({ where: { code: '20XT41' } });
    // await user.addPeriod(period);
    // await period.addUser(user);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

});
