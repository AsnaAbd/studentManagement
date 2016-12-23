 'use strict';

/**
 * @ngdoc function
 * @name studentManagement.controller:ProfileCtrl
 * @description
 * # CommentsCtrl
 * Controller of the studentManagement
 */
  app.controller('ProfileCtrl', function($scope, Post, $routeParams) {

            $scope.loading = true;
            $scope.newProfile = {};

            Post.get($routeParams.id).then(function(data){
            		$scope.loading = false;
            		$scope.firstname = data.firstname;
                $scope.lastname = data.lastname;
    	   }, function(msg){
    		        alert(msg);
    	   })
         
         $scope.loading = true;

         $scope.posts = Post.find().then(function(data){
             $scope.loading = false;
             $scope.posts = data;
           }, function(msg){
             alert(msg);
           })

           $scope.addProfile = function(){
             $scope.posts.push({
               $lastName: $scope.newProfile.lastName,
               $firstname: $scope.newProfile.firstname,
               $email: $scope.newProfile.email,
               $password: $scope.newProfile.password,
               $diplomas: $scope.newProfile.diplomas,
               $promotion: $scope.newProfile.promotion
           });
             $scope.newProfile = {};
         }

    });
