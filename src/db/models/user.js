import { Model, DataTypes } from 'sequelize';
import sequelize from '../index.js';
import Period from './period.js'
import Room from './room.js'
import Course from './course.js'

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

User.hasOne(Course);
Course.belongsTo(User, {as: 'tutor'});

User.belongsToMany(Room, {through: 'Attendance', as: 'attended'});
Room.belongsToMany(User, {through: 'Attendance', as: 'present'});

User.belongsToMany(Period, {through: 'Handles', as: 'teaches'});
Period.belongsToMany(User, {through: 'Handles', as: 'taughtBy'});

User.belongsToMany(Period, {through: 'Enrolled', as: 'enrolledIn'});
Period.belongsToMany(User, {through: 'Enrolled', as: 'students'});

export default User;