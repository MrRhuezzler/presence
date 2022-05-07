import { Model, DataTypes } from 'sequelize';
import sequelize from '../index.js';

class User extends Model { }

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