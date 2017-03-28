'use strict';
var app = angular.module('wedding', ['ngRoute'], function($httpProvider){
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
});
app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
      templateUrl:'../index.html',
      controller:'WeddingController'
    });

});
app.controller('WeddingController', function($scope, $http, $timeout){
  $scope.bride_name = 'Della';
  $scope.bride_fullname = 'Difliyatul Isna Alvionita';
  $scope.groom_fullname = 'Fery Yundara Putera';
  $scope.groom_name = 'Fery';
  $scope.duedate = 'July / 7th / 2017';
  $scope.form = {};
  $scope.submitButtonText = 'Submit';
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
    $scope.people =
      [
        {image:'images/bridemaid.jpg',name:'Lisa Hornet',status:'Bridemaid'},
        {image:'images/best-man.jpg',name:'Dan Hornet',status:'Best man'},
        {image:'images/brides-mother.jpg',name:'Anna Parker',status:'Brides mother'},
        {image:'images/grooms-mother.jpg',name:'Sarah Benson',status:'Grooms mother'},
        {image:'images/brides-father.jpg',name:'Philip Parker',status:'Brides father'},
        {image:'images/grooms-father.jpg',name:'Lisa Hornet',status:'Grooms father'}
      ];
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

        $scope.accommodation =
          [
            {
              image:'images/hotel-1.jpg',
              name:'Hotel Leonardo',
              description:'Donec laoreet lacinia odio, quis elementum arcu efficitur in. Duis iaculis aliquam nisi sed pretium.'
            },
            {
              image:'images/hotel-2.jpg',
              name:'Hotel Aqua',
              description:'Donec laoreet lacinia odio, quis elementum arcu efficitur in. Duis iaculis aliquam nisi sed pretium.'
            },
            {
              image:'images/hotel-3.jpg',
              name:'Hotel Vanguar',
              description:'Donec laoreet lacinia odio, quis elementum arcu efficitur in. Duis iaculis aliquam nisi sed pretium.'
            }
          ];

          $scope.guest =[
            {
              name:'Fery Yp',
              attend:false,
              message:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.'
            },
            {
              name:'Lorem Yp',
              attend:true,
              message:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.'
            },
            {
              name:'Beckham Victory',
              attend:false,
              message:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.'
            },
            {
              name:'Dolle Dae',
              attend:true,
              message:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.'
            }
          ];

          $scope.Attend = function(param) {
            $scope.submitButtonText = "";
            var data = {
              attend:param.status,
              name:param.name,
              email:param.email,
              phone:param.phone,
              message:param.message
            };
            $http.post('http://localhost:8080/wedds/public/wedding/d2VkZGluZ3MuZmVyZGUudXM=', data).success(function(result){
              console.log(result);
            });
            // $timeout(function(){
            //     $scope.submitButtonText = "Submit";
            // }, 100000000);
          }
});
