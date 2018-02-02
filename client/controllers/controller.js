/**
 * Created by vikram on 1/2/18.
 */

var app = angular.module('testApp',['mainService']);

app.controller('testController', function($scope, $http, mainService, $rootScope) {

    $scope.skillList = [];
    $scope.showAdd = false;
    $scope.addSkills = {
        // "id": "",
        "skill_name": "",
        "status": false
    }

    //function for saving the skills
    $scope.addSkill = function() {

        $scope.skillList.push($scope.addSkills)
        $scope.addSkills = {
            skill_name:$scope.addSkills.skill_name,
            status:$scope.addSkills.status
        }
        mainService.saveSkills($scope.addSkills)
            .then(function (data) {
                if(data){
                    alert('Skill is saved Successfully');
                    $scope.addSkills.skill_name = "";
                    $scope.approvalForSkill = false;
                    $scope.getAllSkillsSet();
                }
            });
        $scope.getAllSkillsSet();
    };

    //function for getting all the skills
    $scope.getAllSkillsSet = function() {
        mainService.getAllSkills()
            .then(function (data) {
                $scope.skillList = data;
            });
    };

    //function for status update
    $scope.changeStatus = function(data){
        mainService.updateSkills(data)
            .then(function (response) {
                if(response){
                    alert("Your skill is Updated")
                    $scope.getAllSkillsSet();
                }else{
                    $scope.getAllSkillsSet();
                }
            });
    };

    //function for delete the skills
    $scope.deleteSkills = function(list, i){

        if(confirm('Do you really want to delete')){
            $scope.skillList.splice(i);
            list.isDeleted = true;
            mainService.deleteSkills(list)
                .then(function (response) {
                    if(response){
                        alert('The skill is deleted successfully');
                        $scope.getAllSkillsSet();
                    }
                });
        }else{
            $scope.getAllSkillsSet();
        }
    };

    $scope.getSearchData= function (search) {
        if(search.length > 0){
            mainService.searchData(search)
                .then(function (result) {
                    if (result) {
                        $scope.skillList=[];
                        $scope.skillList.push(result)
                    }
                })
        }else{
            $scope.getAllSkillsSet();
        }
    };

    $scope.getAllSkillsSet();
});
