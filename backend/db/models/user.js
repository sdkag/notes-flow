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
    { timestamps: false }
  );
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Note, {
      foreignKey: "userId",
      as: "notes",
    });
  };
  User.login = async function (username) {
    return await User.findOrCreate({
      where: { username },
      include: "notes",
    });
  };

  return User;
};
