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

            $scope.addProfile = function(){
                $scope.profiles.push($scope.newProfile);
                Post.add($scope.newProfile).then(function(){

                }, function(){
                        alert('votre profile n est pas sauvgarder');
                });
                $scope.newProfile = {};
            }

    });
