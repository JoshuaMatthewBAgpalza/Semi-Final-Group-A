const { Sequelize, DataTypes, Model } = require('sequelize');

class User extends Model {}

function initUserModel(sequelize) {
  User.init(
    {
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      passwordHash: { type: DataTypes.STRING, allowNull: false },
      title: { type: DataTypes.STRING, allowNull: false },
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      role: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: 'User',
      defaultScope: {
        attributes: { exclude: ['passwordHash'] },
      },
      scopes: {
        withHash: {
          attributes: { include: ['passwordHash'] },
        },
      },
    }
  );
  return User;
}

module.exports = { User, initUserModel };
