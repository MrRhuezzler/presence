import { Model, DataTypes } from 'sequelize';
import sequelize from '../index.js';

// class Room extends Model { }

const Room = sequelize.define('room', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    notes: {
        type: DataTypes.STRING,
        allowNull: true
    },
    otp: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default Room;