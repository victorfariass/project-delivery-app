module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      url_image: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'products',
    },
  );
  Product.associate = (models) => {
    Product.hasMany(models.SalesProduct, { foreignKey: 'product_id', as: 'salesProducts' });
  }
  return Product;
};
