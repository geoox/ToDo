

angular.module('todo.controllers', ['ionic'])

    .controller('HomeCtrl', function ($scope, $state, TodoService,$ionicModal) {
        // $state.go('home');
        // addTodayDate,
        // addFunction,
        // deleteFunction,
        // checkFunction,
        // addDate

        if(localStorage.length===0){
            var toDoItems = [];
            var dates=[];
        }
        else{
            var toDoItems=JSON.parse(localStorage.getItem('toDoItems'));
            var dates=JSON.parse(localStorage.getItem('dates'));
        }


        $scope.dates=dates;
        $scope.toDoItems=toDoItems;
        $scope.todos = toDoItems;
        $scope.todosList=toDoItems;


       
 
        // TodoService.addFunction(toDoItems,dates);
        // TodoService.addTodayDate();

        // TodoService.deleteFunction(toDoItems);
        // TodoService.checkFunction(toDoItems);
        // TodoService.addDate(dates,TodoService.addTodayDate());

        // $scope.addFunction = TodoService.addFunction;
        $scope.deleteFunction = TodoService.deleteFunction;
        $scope.checkFunction = TodoService.checkFunction;
        $scope.addFunction = TodoService.addFunction;
        

        $ionicModal.fromTemplateUrl('modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
          }).then(function(modal) {
            $scope.modal = modal;
          });


    })
    
    .controller('RequestCtrl',function($scope){
        
        axios.get('http://www.mocky.io/v2/5afaa7ee2e00005300279006')
        .then(function(response){
            $scope.elements=response.data;
            console.log(response.data);
        })
       

       
        
        
        
        

    });