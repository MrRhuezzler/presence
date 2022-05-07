import dotenv from 'dotenv';
import app from './src/server';

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
