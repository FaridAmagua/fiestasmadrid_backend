import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Product = db.define('PRODUCTS', {
    product_name: {
        type: DataTypes.STRING
    },
    product_stock: {
        type: DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true // prevents the table from becoming pluriform
});

export default Product;

//correct the driver because i want to change the name to product_id