
module.exports = function(sequelize, DataTypes) {
  const Burger = sequelize.define("Burger", {    
      type: DataTypes.STRING,
      devoured: DataTypes.BOOLEAN    
  });
  return Burger;
};
