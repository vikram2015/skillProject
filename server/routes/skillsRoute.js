/**
 * Created by vikram on 1/2/18.
 */

var express = require('express');
var router = express.Router();
var config = require('../../config/config');
var secretKey = config.secretKey;
var SkillController = require('../controller/skillsController')

//route for saving the skills
router.post('/saveSkills',function(req,res){

    var skills = req.body.skill_name;
    var status = req.body.status;
    var parameters = {
        skill_name:skills,
        status:status
    }

    if(skills){
        SkillController.saveSkills(parameters)
            .then(function (response) {
                if(response){
                    res.json(response);
                }else{
                    res.json("Error Occur");
                }
            });
    }else{
        res.json("No Skills Found To Save");
    }
});


//route for getting the data
router.get('/getSkills',function (req, res, next) {
    SkillController.getSkills()
        .then(function (data) {
            if(data){
                res.json(data);
            }else{
                res.json("Error occur");
            }
        });
});


//route for getting the data
router.get('/getSelectedSkill',function (req, res, next) {
    var selectedSkill = req.query.data;
    if(selectedSkill){
        SkillController.getSelectSkills(selectedSkill)
            .then(function (data) {
                if(data){
                    res.json(data);
                }else{
                    res.json("Error occur");
                }
            });
    }else{
        SkillController.getSkills()
            .then(function (data) {
                if(data){
                    res.json(data);
                }else{
                    res.json("Error occur");
                }
            });
    }

});


//route for Updating the Skills
router.post('/updateSkill',function (req, res, next) {
    var skill_name = req.body.skill_name;
    var status = req.body.status;
    var id = req.body._id
    var selectedSkill = {
        skill_name:skill_name,
        status:status,
        _id:id
    }
    SkillController.updateSkills(selectedSkill)
        .then(function (data) {
            if(data){
                res.json(data);
            }else{
                res.json("Error occur");
            }
        });
});

//route for deleting the Skills
router.post('/deleteSkill',function (req, res, next) {
    // var isDeleted = false;
    var skill_name = req.body.skill_name;
    var status = req.body.status;
    var id = req.body._id;
    var isDeleted = req.body.isDeleted;
    var selectedSkill = {
        skill_name:skill_name,
        status:status,
        isDeleted:isDeleted,
        _id:id
    }
    SkillController.deleteSkills(selectedSkill)
        .then(function (data) {
            if(data){
                res.json(data);
            }else{
                res.json("Error occur");
            }
        });
});

module.exports = router;
