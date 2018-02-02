/**
 * Created by vikram on 1/2/18.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SkillsSchema = new Schema({

    id:{
        type:Object
    },
    skill_name:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:false,
        default:false
    },
    isDeleted:{
        type:Boolean,
        required:false,
        default:false
    }
});

module.exports = mongoose.model('newSkill',SkillsSchema);