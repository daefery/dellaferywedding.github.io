'use strict';

var app = angular.module('wedding', ['ngRoute', 'ngSanitize', 'ngDialog']);

app.constant('API_URL', 'http://ferdeapi.hostzi.com/api/v1/');

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
      templateUrl:'../index.html',
    });
});

app.directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            scope.loading = function(param, img){
              $('#'+param).hide();
              $('#'+img).removeAttr('style');
            }
            element.bind('load', function() {
                scope.$apply(attrs.imageonload);
            });
            element.bind('error', function(){
              scope.$apply(attrs.imageonload);
            });
        }
    };
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
         return $q.reject("Data not available");
      })
    },
    uploadImage: function(files) {
      var result = false;
      var formData = new FormData();
      formData.append("file", files[0]);
      return $http.post(url+'uploadimage', formData,
      {
        headers: {'Content-Type': undefined },
        transformRequest: angular.identity
      }).then(function(result) {
        var data = result.data;
        if (data == null){
           return $q.reject("Invalid data");
        }
        return data;
      })
      .catch(function(err){
         return $q.reject("Data not available");
      })
    },
    saveGuest:function(data_guest){

      return $http({
          method: 'POST',
          url: url+"guest",
          data: $.param(data_guest),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function(result) {
        var data = result.data;
        if (data == null){
           return $q.reject("Invalid data");
        }
        return data;
      })
      .catch(function(err){
         return $q.reject("Data not available");
      })
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
            image:'images/masjid.jpg',
            type:'Ijab Qobul',
            time:'8:00 - 10:00',
            description:'Donec sit amet nibh ullamcorper, mattis elit at, venenatis ex. Proin justo nisi, vulputate mollis tincidunt ut, elementum non dolor.'
          },
          {
            image:'images/hotel.jpg',
            type:'Walimah',
            time:'20:00 - 22:00',
            description:'Donec sit amet nibh ullamcorper, mattis elit at, venenatis ex. Proin justo nisi, vulputate mollis tincidunt ut, elementum non dolor.'
          }
        ];
});

app.controller('GuestController', function($scope, $http, apiService){
  apiService.getGuest()
     .then(function(result){
        $scope.guest = angular.copy(result);
        setTimeout(function () {
          $("#testimonial-slider").owlCarousel({
            autoPlay: 4000,
            stopOnHover : true,
            navigation : false,
            itemsCustom : [
              [320, 1],
              [480, 1],
              [768, 2],
              [992, 3],
              [1200, 3]
            ],
            pagination : true
          });
        });
        }, 10);

  $scope.loadImg = function(param) {
    return param;
  }
});

app.controller('RsvpController', function($scope, $http, $sce, $timeout, apiService, API_URL, ngDialog){
  $scope.form = {};
  $scope.Images = {};
  $scope.submitButtonText = 'Submit';
  $scope.submitted = false;

  $scope.save = function(form,param) {
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
        image:""
      };
      if($scope.Images.length > 0){
        apiService.uploadImage($scope.Images)
         .then(function(result){
            if(result.success){
              data_guest.image = result.filename;
              apiService.saveGuest(data_guest).then(function(response){
                if(response.success){
                  ngDialog.open({
                    template: '<h4 style="text-align:center">Your wish has been sent!</h4>'+
                    '<button class="submit button lila" onclick="window.location.reload()">'+
                      'Ok'+
                    '</button>',
                    plain: true,
                    preCloseCallback: function(value) {
                      window.location.reload();
                    }
                  });
                }else{
                  $scope.submitButtonText = "Submit";
                  $scope.msgError = response.message;
                  $scope.form = {};
                  $scope.form.attend = true;
                }
              });
            }
          });
      }else{
        apiService.saveGuest(data_guest).then(function(response){
          if(response.success){
            ngDialog.open({
              template: '<h4 style="text-align:center">Your wish has been sent!</h4>'+
              '<button class="submit button lila" onclick="window.location.reload()">'+
                'Ok'+
              '</button>',
              plain: true,
              preCloseCallback: function(value) {
                window.location.reload();
              }
            });
          }else{
            $scope.submitButtonText = "Submit";
            $scope.msgError = response.message;
            $scope.form = {};
            $scope.form.attend = true;
          }
        });
      }
    }
  }

  $scope.formChecker = function(form, param){
    $scope.formErrorMessage = [];
    var result = true;
    var regexp = /[0-9() +-]/g;
    var regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var no = param.phone;
    var image_name = ($scope.Images.length > 0?$scope.Images[0].name:null);
    if(!form){
      $scope.formErrorMessage.push($sce.trustAsHtml("please, fill all the <b>required</b> * fields !"));
      result = false;
    }
    if (!regexp.test(no) && no != undefined) {
      $scope.formErrorMessage.push($sce.trustAsHtml("phone number format invalid! please refer to this format <strong>0811223223XXX</strong> !"));
      result = false;
    }
    if($scope.Images.length > 0){
      if($scope.Images[0].size > 1000000){
        $scope.formErrorMessage.push($sce.trustAsHtml("image size more than <strong>1MB</strong> !"));
        result = false;
      }
    }
    if(param.message != undefined && param.message.length < 100){
      $scope.formErrorMessage.push($sce.trustAsHtml("messages should be at least <strong>100 character</strong> !"));
      result = false;
    }
    if(!regex_email.test(param.email) && param.email != undefined){
      $scope.formErrorMessage.push($sce.trustAsHtml("email format invalid, please refer to this format <strong>ferde@info.com</strong> !"));
      result = false;
    }
    if(image_name != null){
      var image_ext = image_name.substr(image_name.lastIndexOf('.')+1)
      if(image_ext == 'jpg' || image_ext == 'png'){

      }else{
        $scope.formErrorMessage.push($sce.trustAsHtml("file extention is not <strong>.jpg</strong> or <strong>.png</strong>!"));
        result = false;
      }
    }

    return result;
  }

  $scope.setImages = function(param){
    $scope.Images = param;
  }
});
