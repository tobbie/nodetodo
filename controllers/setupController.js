var Todos = require('../models/todoModel');

module.exports = function(app){
    app.get('/api/setupTodos', function(req, res){

        //seed database
        var starterTodos = 
        [
            {
              "username": "fugiat",
              "todo": "commodo veniam ad",
              "isDone": false,
              "hasAttachment": false
            },
            {
              "username": "minim",
              "todo": "laborum ullamco est",
              "isDone": true,
              "hasAttachment": true
            },
            {
              "username": "elit",
              "todo": "exercitation aliqua mollit",
              "isDone": false,
              "hasAttachment": true
            },
            {
              "username": "duis",
              "todo": "duis mollit cillum",
              "isDone": false,
              "hasAttachment": true
            },
            {
              "username": "ut",
              "todo": "do minim occaecat",
              "isDone": false,
              "hasAttachment": true
            },
            {
              "username": "occaecat",
              "todo": "voluptate occaecat consequat",
              "isDone": true,
              "hasAttachment": false
            }
          ];

          Todos.findById('5be57bce11c1069f84600cad', function(err, result ){
            if(err)
            {
                throw err;
            }
            res.send(result);
          });
          /** 
          Todos.create(starterTodos, function(err, results){
              if(err)
              {
                  throw err;
              }
              res.send(results);
          });
          **/

    });
}
