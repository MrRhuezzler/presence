import { Model, DataTypes } from 'sequelize';
import sequelize from '../index.js';

class Period extends Model { }

Period.init({
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
}, {
    sequelize,
    modelName: 'Period',
});

export default Period;