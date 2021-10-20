"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 50],
        },
      },
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
  };

  User.get = async function (id) {
    return await User.findByPk(id);
  };

  User.prototype.toSafeObject = function () {
    // remember, this cannot be an arrow function
    const { id, username } = this; // context will be the User instance
    return { id, username };
  };

  return User;
};
