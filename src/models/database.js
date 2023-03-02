
const Sequelize = require('sequelize');
const DT = Sequelize.DataTypes;
const db = new Sequelize('restaurantDB', 'root', '12345678', {
     define: {timestamps:false},
     logging:false,
    
    host: 'localhost',
    dialect:'mysql'
  });
const Client = db.define('clients',{
    id:{
        type: DT.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DT.STRING,
        unique: true,
        allowNull: false
    },
    email:{
        type: DT.STRING,
        unique: true,
        allowNull: false
    },
    password:{
        type: DT.STRING,
        allowNull: false
    }

})
 

  module.exports ={db,Client};





