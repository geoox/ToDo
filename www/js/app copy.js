// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('todo', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// .config(function($stateProvider,$urlRouterProvider){
//   $stateProvider

//   .state('home',{
//     url:'/home',
//     templateUrl:'templates/home.html'
//   })
//   .state('login', {
//     url: '/login',
//     templateUrl:'templates/login.html'
//   });

//   $urlRouterProvider.otherwise('templates/home.html');
// })

.controller('homeCtrl',function($scope,$ionicModal){
    
    $scope.salut='ok';

    //date
    let dates=[];

    let today=new Date();
    let dd=today.getDate();
    let mm=today.getMonth()+1;
    
    if(dd<10){
        dd='0'+dd;
    }

    if(mm<10){
        mm='0'+mm;
    }
    today=dd+'/'+mm;

    //todo array
    class Todo {
      constructor(name, checked) {
          this.name = name;
          this.checked = checked;
      }
    } 
    let toDoItems=[];
    
    $scope.addFunction=function(){
      let inputValue=document.getElementById('inputer').value;
      if(inputValue.trim().length != 0){

        
        addDate(dates,today);
        console.log('dates',dates);
        $scope.dates=dates;

        const todo=new Todo(inputValue,false);
        toDoItems.push(todo);
        document.getElementById('inputer').value='';
        console.log('toDoItems',toDoItems);
        $scope.todos=toDoItems;


      }
    }

    function addDate(dates,today){
      if(dates.indexOf(today)!=0){
        dates.push(today);

      }
  }

    $scope.deleteFunction=function(){
      toDoItems.splice(toDoItems.indexOf(this.todo),1);
      console.log('toDoItems',toDoItems);
    }

    $scope.checkFunction=function(){
      this.todo.checked=!this.todo.checked;
      if(this.todo.checked===true){
        let target=angular.element(event.target);
        target[0].className='button button-light icon ion-android-done-all';
        console.log('toDoItems',toDoItems);
      }
      else{
        let target=angular.element(event.target);
        target[0].className='button button-light icon ion-ios-checkmark';
        console.log('toDoItems',toDoItems);
      }
    }

    //modal

    $ionicModal.fromTemplateUrl('modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
       $scope.modal = modal; });
});
