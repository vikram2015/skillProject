/**
 * Created by vikram on 1/2/18.
 */

var SkillsModel = require('../models/skillsModel');
var Promise = require('promise');
var config = require('../../../config/config');
var secretKey = config.secretKey;

//for saving all the Skills in Database
var saveNewSkills =function (parameter) {
    return new Promise(function (resolve, reject) {

        var newSkillsRecord = new SkillsModel(parameter);

        newSkillsRecord.save(function (err, item) {
            if(err){
                resolve({success:false,MSG:"Error occur during saving",error:err});
            }else{
                resolve({success:true,MSG:"Skills saved successfully",items:item});
            }
        });
    });
};


//for getting all the skills From Database
var getAllSkills = function () {
    return new Promise(function (resolve, reject) {

        SkillsModel.find({isDeleted:false}).exec(function (err, skills) {
            if(err){
                resolve({success:false,MSG:"Error occur",error:err});
            }else{
                resolve({success:true,MSG:"Skills Found",skills:skills});
            }
        });
    });
};


//for getting Selected skills From Database
var getAllSelectedSkills = function (query) {
    return new Promise(function (resolve, reject) {

        SkillsModel.findOne(query).exec(function (err, skills) {
            if(err){
                resolve({success:false,MSG:"Error occur",error:err});
            }else{
                resolve({success:true,MSG:" Selected Skill Found",skills:skills});
            }
        });
    });
};



//for updating selected skills In Database
var updateSelectedSkills = function (query, id) {

    return new Promise(function (resolve, reject) {
        SkillsModel.update({_id:id},query).exec(function (err, skills) {
            if(err){
                resolve({success:false,MSG:"Error occur During Update",error:err});
            }else{
                resolve({success:true,MSG:"Selected Skill Updated",skills:skills});
            }
        });
    });
};


module.exports = {
    saveNewSkills:saveNewSkills,
    getAllSkills:getAllSkills,
    getAllSelectedSkills:getAllSelectedSkills,
    updateSelectedSkills:updateSelectedSkills
}

