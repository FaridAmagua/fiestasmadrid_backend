import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../db/connection";

export const User = sequelize.define('User',{
  id:{
    type:DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true, 
  },
  username:{
    type:DataTypes.STRING,
    unique:true,
    allowNull:false
  },
  password:{
    type:DataTypes.STRING,
    unique:true,
    allowNull:false
  }
}, {    
  freezeTableName: false, // prevents the table from becoming pluriform seq-document
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt:'updatedAt',  
 
});
  

export default User;