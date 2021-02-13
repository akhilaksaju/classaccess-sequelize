'use script'
module.exports = (sequelize, DataTypes) => {
    var Guardian = sequelize.define('guardian', {
    guardian_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false,
        notEmpty: true,
    },
    name: {type:DataTypes.STRING},
    email:  {type:DataTypes.STRING, unique: true, notEmpty: true, validate: {isEmail: true}},
    password:  {type:DataTypes.STRING},
    guardianType:{type:DataTypes.ENUM,values:['primary','secondary']},
    mobileNumber: {type:DataTypes.STRING, unique: true  ,  validate: {isNumeric: true}},
    relationShip:{type:DataTypes.ENUM,values:['parent','grand parent','caretaker']},
    receiveTips: {type:DataTypes.BOOLEAN}
  })
  return Guardian;
}