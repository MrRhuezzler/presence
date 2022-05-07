import { Model, DataTypes } from 'sequelize';
import sequelize from '../index.js';
import Period from './period.js';
import Room from './room.js';
import Course from './course.js';
import bcrypt from 'bcryptjs';

// class User extends Model {
//     static async hashPassword(password) {
//         try {
//             const salt = await bcrypt.genSalt(10);
//             const hash = await bcrypt.hash(password, salt);
//             return hash;
//         } catch (err) {
//             throw err;
//         }
//     }
// }

const User = sequelize.define('user', {
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
});

User.hasOne(Course);
Course.belongsTo(User);

User.belongsToMany(Room, { through: 'attendance' });
Room.belongsToMany(User, { through: 'attendance' });

User.belongsToMany(Period, { through: 'handle' });
Period.belongsToMany(User, { through: 'handle' });

export default User;