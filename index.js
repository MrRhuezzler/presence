import 'dotenv/config';
import app from './src/server.js';
import sequelize from './src/db/index.js';
import logger from './src/utils/logger.js';
import User from './src/db/models/user.js';
import Period from './src/db/models/period.js';

const PORT = 3000;

sequelize.sync().then(async () => {

    // const emails = ['20pt01@psgtech.ac.in', '20pt12@psgtech.ac.in', '20pt25@psgtech.ac.in', '20pt33@psgtech.ac.in', 'nadarajan@psgtech.ac.in'];
    // const period = await Period.findOne({ where: { code: '20XT41' } });
    // emails.forEach(async email => {
    //     const user = await User.findOne({ where: { email: email } });
    //     await user.addPeriod(period);
    // });

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

});
