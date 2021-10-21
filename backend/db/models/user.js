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

  User.prototype.toSafeObject = function () {
    // remember, this cannot be an arrow function
    const { id, username, created } = this; // context will be the User instance
    console.log("\n\n\n\n\n\n", this, "\n\n\n\n\n\n");
    return { id, username, created: Boolean(created) };
  };

  return User;
};
