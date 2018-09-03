//creating a user table
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("Users", {
    userId: {
      type: DataTypes.INTEGER,
      autoincrement: true
    },
    userdate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    useremail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userPhone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userlocation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });

  users.Associate = function(models) {
    users.hasMany(models.products, {
      onDelete: "cascade"
    });
  };
  return users;
};
