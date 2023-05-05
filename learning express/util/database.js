const Sequelize=require('sequelize');
const sequelize= new Sequelize('express_js','root','homomomo',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;