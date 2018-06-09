module.exports = function(sequelize, DataTypes) {
    var Userlogin = sequelize.define("Userlogin", {
      // Giving the Userlogin model a name of type STRING
      EMAIL_ADDRESS: DataTypes.STRING,
      allownulls: false,

      P_WORD: {
          type: DataTypes.STRING,
          allownulls: false,

      },
      
    });

  
    Userlogin.associate = function(models) {
      // Associating Userlogin with Main
      // When an Userlogin is deleted, also delete any associated Main
      Userlogin.hasMany(models.Main, {
        onDelete: "cascade"
      });
    };
  
    return Userlogin;
  };
  