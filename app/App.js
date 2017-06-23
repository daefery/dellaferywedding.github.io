'use strict';

var app = angular.module('wedding', ['ngRoute', 'ngSanitize', 'ngDialog']);

app.constant('API_URL', 'http://localhost:8080/angulara/api/v1/');
// app.constant('API_URL', 'http://ferdeapi.hostzi.com/api/v1/');

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
      templateUrl:'../index.html',
    });
});

app.directive('owlCarousel', function(){
  return {
        restrict: 'E',
        transclude: false,
        link: function (scope) {
            scope.initCarousel = function(element) {
              // provide any default options you want
                var defaultOptions = {
                };
                var customOptions = scope.$eval($(element).attr('data-options'));
                // combine the two options objects
                for(var key in customOptions) {
                    defaultOptions[key] = customOptions[key];
                    if(key == 'navigation'){
                      if(defaultOptions[key]){
                        defaultOptions['navigationText'] = ["<i class=\"fa fa-chevron-circle-left\" style=\"margin-top: 5px;\" aria-hidden=\"true\"></i>","<i class=\"fa fa-chevron-circle-right\" style=\"margin-top: 5px;\" aria-hidden=\"true\"></i>"];
                      }
                    }
                }
                // init carousel
                $(element).owlCarousel(defaultOptions);
            };
        }
    };
});

app.directive('owlCarouselItem', function(){
  return {
        restrict: 'A',
        transclude: false,
        link: function(scope, element) {
          // wait for the last item in the ng-repeat then call init
            if(scope.$last) {
                scope.initCarousel(element.parent());
            }
        }
    };
});

app.factory("apiService", function($http, $q, API_URL){
  var url = API_URL;
  return {
    getGuest: function() {
      return $http.get(url+'guests').then(function(result) {
        var data = result.data;
        if (data == null){
           return $q.reject("Invalid data");
        }
        return data;
      });
    },
    saveGuest:function(data_guest){
      return $http({
          method: 'POST',
          url: url+"guests",
          data: $.param(data_guest),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function(result) {
        var data = result.data;
        if (data == null){
           return $q.reject("Invalid data");
        }
        return data;
      });
    }
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
      {image:'images/gallery/gallery-10.jpg',thumb:'images/gallery/gallery-10_thumb.jpg'},
      {image:'images/gallery/gallery-11.jpg',thumb:'images/gallery/gallery-11_thumb.jpg'},
      {image:'images/gallery/gallery-12.jpg',thumb:'images/gallery/gallery-12_thumb.jpg'},
      {image:'images/gallery/gallery-13.jpg',thumb:'images/gallery/gallery-13_thumb.jpg'},
      {image:'images/gallery/gallery-14.jpg',thumb:'images/gallery/gallery-14_thumb.jpg'},
      {image:'images/gallery/gallery-15.jpg',thumb:'images/gallery/gallery-15_thumb.jpg'},
      {image:'images/gallery/gallery-16.jpg',thumb:'images/gallery/gallery-16_thumb.jpg'},
      {image:'images/gallery/gallery-17.jpg',thumb:'images/gallery/gallery-17_thumb.jpg'},
      {image:'images/gallery/gallery-18.jpg',thumb:'images/gallery/gallery-18_thumb.jpg'},
      {image:'images/gallery/gallery-19.jpg',thumb:'images/gallery/gallery-19_thumb.jpg'},
      {image:'images/gallery/gallery-20.jpg',thumb:'images/gallery/gallery-20_thumb.jpg'},
      {image:'images/gallery/gallery-21.jpg',thumb:'images/gallery/gallery-21_thumb.jpg'},
      {image:'images/gallery/gallery-22.jpg',thumb:'images/gallery/gallery-22_thumb.jpg'},
      {image:'images/gallery/gallery-23.jpg',thumb:'images/gallery/gallery-23_thumb.jpg'},
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

app.controller('GuestController', function($scope, $http, apiService){
  apiService.getGuest()
     .then(function(result){
        $scope.guest = angular.copy(result);
      });
});

app.controller('RsvpController', function($scope, $http, $sce, $timeout, apiService, API_URL, ngDialog){
  $scope.form = {};
  $scope.submitButtonText = 'Submit';
  $scope.submitted = false;

  $scope.save = function(form,param) {
    $scope.msgError = undefined;
    $scope.submitted = true;
    var check = $scope.formChecker(form, param);
    if(check){
      $scope.submitButtonText = "";
      var data_guest = {
        attend:(param.attend == undefined?true:param.attend),
        name:param.name,
        email:param.email,
        phone:param.phone,
        relation:(param.relation == 'other'?param.other+' of '+param.withWhom:param.relation),
        message:param.message,
      };
      apiService.saveGuest(data_guest).then(function(response){
        if(response.success){
          ngDialog.open({
            template: '<h4 style="text-align:center">Your wish has been sent! <br>Please check your email for confirmation!.</h4>'+
            '<button class="submit button lila" onclick="window.location.reload()">'+
              'Ok'+
            '</button>',
            plain: true,
            preCloseCallback: function(value) {
              window.location.reload();
            }
          });
          $scope.submitButtonText = "Submit";
        }else{
          $scope.submitButtonText = "Submit";
          $scope.msgError = response.message;
          $scope.form = {};
          $scope.form.attend = true;
        }
      });
    }
  }

  $scope.formChecker = function(form, param){
    $scope.formErrorMessage = [];
    var result = true;
    var regexp = /[0-9() +-]/g;
    var regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var no = param.phone;
    if(!form){
      $scope.formErrorMessage.push($sce.trustAsHtml("please, fill all the <b>required</b> * fields !"));
      result = false;
    }
    if (!regexp.test(no) && no != undefined) {
      $scope.formErrorMessage.push($sce.trustAsHtml("phone number format invalid! please refer to this format <strong>0811223223XXX</strong> !"));
      result = false;
    }
    if(param.message != undefined && param.message.length < 100){
      $scope.formErrorMessage.push($sce.trustAsHtml("messages should be at least <strong>100 character</strong> !"));
      result = false;
    }
    if(!regex_email.test(param.email) && param.email != undefined){
      $scope.formErrorMessage.push($sce.trustAsHtml("email format invalid, please refer to this format <strong>ferde@info.com</strong> !"));
      result = false;
    }
    return result;
  }
});
