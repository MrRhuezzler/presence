import { Model, DataTypes } from 'sequelize';
import sequelize from '../index.js';

// class Course extends Model { }

const Course = sequelize.define('course', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default Course;