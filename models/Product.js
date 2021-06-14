module.exports = (sequelize, DataTypes) =>{
    const Product = sequelize.define('Product', {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        price:{
            type:DataTypes.DOUBLE,
            allowNull:false
        },
        quantity:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        createdAt:{
            type:DataTypes.DATE,
            allowNull:false
        },
        updatedAt:{
            type:DataTypes.DATE,
            allowNull:true
        }
    },{
        tableName:'products'
    })

    return Product
}