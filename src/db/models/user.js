import { Model, DataTypes } from 'sequelize';
import sequelize from '../index.js';
import bcrypt from 'bcryptjs';

class User extends Model {
    static async hashPassword(password) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            return hash;
        } catch (err) {
            throw err;
        }
    }
}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isFaculty: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false
    }
}, {
    sequelize,
    modelName: 'User',
});

export default User;