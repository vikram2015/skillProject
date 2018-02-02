/**
 * Created by vikram on 1/2/18.
 */
angular.module('mainService',[])

    .factory('mainService',function ($http, $q) {

        var userData = {};

        //function for saving the skills
        userData.saveSkills = function (secretKey) {
            return $http.post('/skills/saveSkills',secretKey)
                .then(function (data) {
                    return (data.data.items);
                });
        };
        //function for getting all the skills
        userData.getAllSkills = function () {
            return $http.get('/skills/getSkills')
                .then(function (data) {
                    return (data.data.skills);
                });
        };
        //function for search single skill
        userData.searchData = function (data) {
            return $http.get('/skills/getSelectedSkill',{params: { data:data }})
                .then(function (data) {
                    return (data.data.skills);
                });
        };

        //function for update the skill
        userData.updateSkills = function (data) {
            return $http.post('/skills/updateSkill',data)
                .then(function (data) {
                    return (data.data.skills);
                });
        };

        //function for delete the skill
        userData.deleteSkills = function (data) {
            return $http.post('/skills/deleteSkill',data)
                .then(function (data) {
                    return (data.data.skills);
                });
        };

        return userData;
    });