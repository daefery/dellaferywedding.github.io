'use strict';
var app = angular.module('wedding', ['ngRoute'])
        .constant('API_URL', 'http://localhost:8080/angulara/public/api/v1/');

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
      templateUrl:'../index.html',
    });

});

app.factory("apiService", function($http, $q, API_URL){
  var url = API_URL;
  return {
    getGuest: function() {
      return $http.get(url+'guest').then(function(result) {
        var data = result.data;
        if (data == null){
           return $q.reject("Invalid data");
        }
        return data;
      })
      .catch(function(err){
         // for example, "re-throw" to "hide" HTTP specifics
         return $q.reject("Data not available");
      })
    }
    // same idea for getReport
  }
});

app.controller('HomeController', function($scope, $http, $timeout, API_URL){
  $scope.bride_name = 'Della';
  $scope.groom_name = 'Fery';
  $scope.duedate = 'July / 7th / 2017';

});

app.controller('StoryController', function($scope){
  $scope.bride_fullname = 'Difliyatul Isna Alvionita';
  $scope.groom_fullname = 'Fery Yundara Putera';
});

app.controller('GalleryController', function($scope){
  $scope.gallery =
    [
      {image:'images/gallery/gallery-1.jpg',thumb:'images/gallery/gallery-1_thumb.jpg'},
      {image:'images/gallery/gallery-2.jpg',thumb:'images/gallery/gallery-2_thumb.jpg'},
      {image:'images/gallery/gallery-3.jpg',thumb:'images/gallery/gallery-3_thumb.jpg'},
      {image:'images/gallery/gallery-4.jpg',thumb:'images/gallery/gallery-4_thumb.jpg'},
      {image:'images/gallery/gallery-5.jpg',thumb:'images/gallery/gallery-5_thumb.jpg'},
      {image:'images/gallery/gallery-6.jpg',thumb:'images/gallery/gallery-6_thumb.jpg'},
      {image:'images/gallery/gallery-7.jpg',thumb:'images/gallery/gallery-7_thumb.jpg'},
      {image:'images/gallery/gallery-8.jpg',thumb:'images/gallery/gallery-8_thumb.jpg'},
      {image:'images/gallery/gallery-9.jpg',thumb:'images/gallery/gallery-9_thumb.jpg'}
    ];
});

app.controller('PeopleController', function($scope){
  $scope.people =[
      {image:'images/bridemaid.jpg',name:'Lisa Hornet',status:'Bridemaid'},
      {image:'images/best-man.jpg',name:'Dan Hornet',status:'Best man'},
      {image:'images/brides-mother.jpg',name:'Anna Parker',status:'Brides mother'},
      {image:'images/grooms-mother.jpg',name:'Sarah Benson',status:'Grooms mother'},
      {image:'images/brides-father.jpg',name:'Philip Parker',status:'Brides father'},
      {image:'images/grooms-father.jpg',name:'Lisa Hornet',status:'Grooms father'}
    ];
});

app.controller('EventController', function($scope){
  $scope.agenda =
        [
          {
            image:'images/ceremony-image.jpg',
            type:'Ceremony',
            time:'16:30 - 17:15',
            description:'Donec sit amet nibh ullamcorper, mattis elit at, venenatis ex. Proin justo nisi, vulputate mollis tincidunt ut, elementum non dolor.'
          },
          {
            image:'images/restaurant-image.jpg',
            type:'Restaurant',
            time:'17:30 - 23:00',
            description:'Donec sit amet nibh ullamcorper, mattis elit at, venenatis ex. Proin justo nisi, vulputate mollis tincidunt ut, elementum non dolor.'
          },
          {
            image:'images/party-image.jpg',
            type:'Party',
            time:'23:30 - 06:00',
            description:'Donec sit amet nibh ullamcorper, mattis elit at, venenatis ex. Proin justo nisi, vulputate mollis tincidunt ut, elementum non dolor.'
          }
        ];
});

app.controller('GuestController', function($scope, $http, apiService){
  apiService.getGuest()
     .then(function(result){
        $scope.guest = angular.copy(result); // actual reports data
        console.log($scope.guest);
      });
});

app.controller('RsvpController', function($scope, $http, $timeout, apiService, API_URL){
  $scope.form = {};
  $scope.submitButtonText = 'Submit';
  $scope.isSuccess = false;
  $scope.isErrorForm = false;
  $scope.submitted = false;
  $scope.isError = false;
     //save new record / update existing record
  $scope.save = function(form,param) {
    $scope.submitted = true;
    $scope.isSuccess = false;
    $scope.isErrorForm = false;
    $scope.isError = false;
    if(form){
      var parse = parseInt(param.phone);
      var v_phone = isNaN(parse);
      if(v_phone){
        $scope.isErrorForm = true;
      }else{
        $scope.submitButtonText = "";
        var url = API_URL + "guest";
        var data_guest = {
          attend:(param.attend == undefined?true:param.attend),
          name:param.name,
          email:param.email,
          phone:param.phone,
          relation:(param.relation == 'other'?param.other:param.relation),
          message:param.message
        };
        //append employee id to the URL if the form is in edit mode
        // if (modalstate === 'edit'){
        //     url += "/" + id;
        // }

        $http({
            method: 'POST',
            url: url,
            data: $.param(data_guest),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(response) {
            console.log(response);
            $scope.isSuccess = true;
            $scope.submitButtonText = "Submit";
            $scope.form = {};
            $scope.form.attend = true;
        }).error(function(response) {
            console.log(response);
            $scope.submitButtonText = "Submit";
            $scope.isError = true;
            $scope.msgError = 'This is embarassing. An error has occured. Please check the log for details';
            $scope.form = {};
            $scope.form.attend = true;
        });
      }
    }else{
      $scope.isErrorForm = true;
    }
}


    //delete record
    $scope.confirmDelete = function(id) {
        var isConfirmDelete = confirm('Are you sure you want this record?');
        if (isConfirmDelete) {
            $http({
                method: 'DELETE',
                url: API_URL + 'employees/' + id
            }).
                    success(function(data) {
                        console.log(data);
                        location.reload();
                    }).
                    error(function(data) {
                        console.log(data);
                        alert('Unable to delete');
                    });
        } else {
            return false;
        }
    }
});
