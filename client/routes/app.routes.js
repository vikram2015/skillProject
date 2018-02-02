/**
 * Created by vikram on 1/2/18.
 */

angular.module('uiRoutes',['ui.router'])

    .config(function ( $stateProvider) {
        /*var userPage = {

         name:'home',
         url:'/home',
         templateUrl:'app/views/pages/home.html'
         }*/
        $stateProvider

            .state('home',{
                url:'/home',
                templateUrl:'app/views/pages/home.html',
                controller:'mainController'
            })
            .state('userPage',{
                url:'/userPage',
                templateUrl:'app/views/pages/userPage.html',
                controller:'userController'
            })
        // $stateProvider.state(userPage);
    })