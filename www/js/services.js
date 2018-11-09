angular.module('todo.services', [])
    .factory('TodoService', function () {

        const service = {
            returnTodayDate,
            addFunction,
            deleteFunction,
            checkFunction,
            addDate
        }
         return service;


        function returnTodayDate() {

            let today = new Date();
            let dd = today.getDate();
            let mm = today.getMonth() + 1;

            if (dd < 10) {
                dd = '0' + dd;
            }

            if (mm < 10) {
                mm = '0' + mm;
            }
            today = dd + '/' + mm;

            return today;
        }


        function addFunction(toDoItems,dates) {
            


            class Todo {
                constructor(name, checked) {
                    this.name = name;
                    this.checked = checked;
                }
            }

            let inputValue = document.getElementById('inputer').value;
            if (inputValue.trim().length != 0) {
                console.log(inputValue);
                addDate(dates, returnTodayDate());
                // addDate(dates,"04/22");
                console.log('dates', dates);


                const todo = new Todo(inputValue, false);
                toDoItems.push(todo);
                document.getElementById('inputer').value = '';
                console.log('toDoItems', toDoItems);
                
                localStorage.setItem('toDoItems',JSON.stringify(toDoItems));

            }
        }


        function addDate(dates, today) {
            
           if (dates.length===0 || dates.indexOf(today)===-1) {
                dates.push(today);
                localStorage.setItem('dates',JSON.stringify(dates));
                
            }
        }

        function deleteFunction(toDoItems) {
            toDoItems.splice(toDoItems.indexOf(this.todo), 1);
            localStorage.setItem('toDoItems',JSON.stringify(toDoItems));
            if(JSON.parse(localStorage.getItem('dates')).length===0)
                localStorage.setItem('dates',null);
            console.log('toDoItems', toDoItems);

        }



        function checkFunction(toDoItems) {
            this.todo.checked = !this.todo.checked;
            localStorage.setItem('toDoItems',JSON.stringify(toDoItems));
            console.log('toDoItems', toDoItems);
            if (this.todo.checked === true) {
                let target = angular.element(event.target);
                target[0].className = 'button button-light icon ion-android-done-all';
            }
            else {
                let target = angular.element(event.target);
                target[0].className = 'button button-light icon ion-ios-checkmark';
            }
        }





        //   function addTodo() {
        //       console.log('addTodo');
        //       WL.JSONstore.add(todo)
        //       .then(() => {
        //         todoList.push(todo);
        //         resolve();
        //       })
        //       .fail()
        //   }


    });
