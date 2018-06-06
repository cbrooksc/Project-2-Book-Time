module.exports = function(sequelize, DataTypes) {
    var Main = sequelize.define("Main", {
      AUTHOR: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
    GENERES: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      PUBLISHED_YEAR: {
        type: DataTypes.STRING,
      
      },
      BOOK_LENGTH: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
        SUMMARY: {
          type: DataTypes.TEXT,
          allowNull: true,
        } ,
        URL:{
          type: DataTypes.STRING,
          allowNull: false,
        } 
    });
    return Main;
  };
  