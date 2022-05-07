import 'dotenv/config';
import app from './src/server.js';
import sequelize from './src/db/index.js';
import logger from './src/utils/logger.js';

const PORT = 3000;

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})

