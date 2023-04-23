import { Sequelize, DataTypes } from 'sequelize';

const options = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'teste',
    username: 'marcos',
    password: 'mysecret'
}

const db = new Sequelize(options);

const User = db.define('users_table', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    name: DataTypes.STRING(100),
    email: DataTypes.STRING(100),
    password: DataTypes.STRING(100),
})

User.sync();

export default User;