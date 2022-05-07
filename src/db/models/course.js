import { Model, DataTypes } from 'sequelize';
import sequelize from '../index.js';

class Course extends Model { }

Course.init({
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
}, {
    sequelize,
    modelName: 'Course',
});

export default Course;