import dotenv from 'dotenv';
import app from './src/server.js';

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
