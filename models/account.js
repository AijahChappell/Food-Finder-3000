module.exports = function(sequelize, DataTypes) {
  var Account = sequelize.define("account", {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });

  Account.associate = function(models) {
    this.hasOne(models.fridge, {
      onDelete:'cascade'
    });
  };

  Account.prototype.validatePassword = function(val) {
    return this.password === val;
  }

  return Account;
};
