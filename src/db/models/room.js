import { Model, DataTypes } from 'sequelize';
import sequelize from '../index.js';

class Room extends Model { }

Room.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    notes: {
        type: DataTypes.STRING,
        allowNull: true
    },
    otp: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Room',
});

export default Room;