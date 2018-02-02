/**
 * Created by vikram on 1/2/18.
 */

var SkillsOperation = require('../database/operations/skillsOperation');
var Promise = require('promise');

//for saving the skills
var saveSkills = function (parameter) {
    return new Promise(function (resolve, reject) {
        if(parameter && parameter.skill_name){
            SkillsOperation.saveNewSkills(parameter)
                .then(function (responses) {
                    resolve(responses);
                });
        }else{
            resolve("No data to save");
        }
    });
};

//for getting the skills
var getSkills = function () {
    return new Promise(function (resolve, reject) {
        SkillsOperation.getAllSkills()
            .then(function (allSkills) {
                if(allSkills){
                    resolve(allSkills)
                }else{
                    resolve("Error in fetching the data");
                }
            });
    });
};

//for getting the selected skill
var getSelectSkills = function (selectedSearch) {
    return new Promise(function (resolve, reject) {
        if(selectedSearch){
            var query = {
                skill_name:selectedSearch,
                isDeleted:false
            }
            SkillsOperation.getAllSelectedSkills(query)
                .then(function (allSkills) {
                    if(allSkills){
                        resolve(allSkills)
                    }else{
                        resolve("Error in fetching the Skills");
                    }
                });
        }else{
            SkillsOperation.getAllSkills()
                .then(function (allSkills) {
                    if(allSkills){
                        resolve(allSkills)
                    }else{
                        resolve("Error in fetching the data");
                    }
                });
        }
    });
};

//for updating the skill
var updateSkills = function (selectedSkill) {
    var query = {
        skill_name:selectedSkill.skill_name,
        status:selectedSkill.status,
    }
    var id = selectedSkill._id;
    return new Promise(function (resolve, reject) {
        SkillsOperation.updateSelectedSkills(query, id)
            .then(function (allSkills) {
                if(allSkills){
                    resolve(allSkills)
                }else{
                    resolve("Error in Updating the Skills");
                }
            });
    });
};


//for updating the skill
var deleteSkills = function (selectedSkill) {
    var query = {
        skill_name:selectedSkill.skill_name,
        status:selectedSkill.status,
        isDeleted:selectedSkill.isDeleted,
    }
    var id = selectedSkill._id;
    return new Promise(function (resolve, reject) {
        SkillsOperation.updateSelectedSkills(query, id)
            .then(function (allSkills) {
                if(allSkills){
                    resolve(allSkills)
                }else{
                    resolve("Error in Updating the Skills");
                }
            });
    });
};


module.exports = {
    saveSkills:saveSkills,
    getSkills:getSkills,
    getSelectSkills:getSelectSkills,
    updateSkills:updateSkills,
    deleteSkills:deleteSkills
}
