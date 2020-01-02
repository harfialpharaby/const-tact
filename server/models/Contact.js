'use strict';
module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model;
    
    class Contact extends Model {}
    Contact.init({
        fullName: DataTypes.STRING,
        phone: DataTypes.STRING
    }, { sequelize, tableName: 'contacts' });

    Contact.associate = function(models) {
        // associations can be defined here
    };
    return Contact;
};