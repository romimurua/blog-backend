const { DataTypes } = require('sequelize');
const db = require("../utils/database");

const Posts = db.define("posts", {
    id: {
        type: DataTypes.INTEGER, //.BIGINT
        autoIncrement: true,
        primaryKey: true,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false, // = a NOt NULL
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isPublished: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
});

module.exports = Posts