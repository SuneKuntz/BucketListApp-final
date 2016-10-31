angular.module('bucketApp', [])
  .controller('bucketController', function() {
    var bucketList = this;
    bucketList.todos = [
      {text:'Learn to fly', done:true},
      {text:'Beat Dark Souls', done:false},
      {text:'Travel the world', done:false},
      {text:'Get a dog', done:false},
      {text:'Become a holy warrior', done:false},
      {text:'Not die', done:true},
      {text:'Beat Pac-man', done:false},
      {text:'Lick my elbow', done:false},
      {text:'Get 1 subscriber', done:false}];

 
    bucketList.addTodo = function() {
      bucketList.todos.push({text:bucketList.todoText, done:false});
      bucketList.todoText = '';
    };
 
    bucketList.remaining = function() {
      var count = 0;
      angular.forEach(bucketList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    bucketList.archive = function() {
      var oldTodos = bucketList.todos;
      bucketList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) bucketList.todos.push(todo);
      });
    }; 
  });