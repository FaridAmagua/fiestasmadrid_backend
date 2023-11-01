import { DataTypes } from 'sequelize';
    import sequelize from '../db/connection';

export const Product = sequelize.define('Product', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_stock: {
        type: DataTypes.INTEGER
    }
}, {    
    freezeTableName: false, // prevents the table from becoming pluriform seq-document
    //correct the driver because i want to change the name to product_id
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt:'updatedAt',  
    // Configura la función para generar las fechas
   
});
export default Product;
