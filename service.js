angular.module('userProfiles').service('mainService', function($http) {

var baseurl = "https://reqres.in/api/users?page=1";

var serviceUsers = this;

  this.getUsers = function() {
    return $http.get(baseurl).then(function(response) {
        serviceUsers.users = response.data.data;
        return serviceUsers.users;
    });
  };

});


// https://reqres.in/api/users?page=1