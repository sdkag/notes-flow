"use strict";
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define(
    "Note",
    {
      content: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Note.associate = function (models) {
    // associations can be defined here
    Note.belongsTo(models.User, {
      as: "author",
      foreignKey: "userId",
    });
  };
  return Note;
};
