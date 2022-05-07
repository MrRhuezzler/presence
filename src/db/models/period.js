import { Model, DataTypes } from 'sequelize';
import sequelize from '../index.js';
import Room from './room.js'
import Course from './course.js'

// class Period extends Model { }

const Period = sequelize.define('period', {
    code: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

Course.hasMany(Period);
Period.belongsTo(Course);

Period.hasMany(Room);
Room.belongsTo(Period);

export default Period;