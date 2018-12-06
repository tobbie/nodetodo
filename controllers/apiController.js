var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');
var httpStatus = require("http-status-codes");

module.exports = function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    
    //get todos that match given username;
    app.get('/api/todos/:username', function(request, response){

        Todos.find({username : request.params.username}, function(error, results){
            if(error || results.length < 1)
            {              
                response.status(httpStatus.NOT_FOUND)
                        .send({error: httpStatus.getStatusText      (httpStatus.NOT_FOUND)});              
            }
            else
            {
                response.status(httpStatus.OK)
                .send(results);
            }                      
        });
    });

    //get single todo that matches an id
    app.get('/api/todo/:id', function(request, response){

        Todos.findById({_id : request.params.id}, function(error, results){
            if(error)
            {
                throw error;
            }            
            response.status(httpStatus.OK)
            .send(results);
            
        });
    });

    app.post('/api/todo', function(request, response){

        if(request.body.id)
        {
            Todos.findByIdAndUpdate(request.body.id, {
                todo : request.body.todo,
                isDone : request.body.isDone,
                hasAttachment : request.body.hasAttachment
            }, function(error, result){
                if(error) throw error;
                response.status(httpStatus.OK);
                response.send('Success');
            })
        }
        else{

            var newTodo = Todos({
                username : 'test',
                todo : request.body.todo,
                isDone : request.body.isDone,
                hasAttachment : request.body.hasAttachment
            });

            newTodo.save(function(error){
                if(error) 
                {
                   console.log(error); 
                   response.status(httpStatus.INTERNAL_SERVER_ERROR)
                   .send({error: httpStatus.getStatusText(httpStatus.INTERNAL_SERVER_ERROR)})
                }
                else
                {
                    response.status(httpStatus.CREATED)
                    .send('Success');
                }               
            })
        }
    });


 //delete todo by id
    app.delete('/api/todo', function(request, response){
        Todos.findOneAndDelete(request.body.id, function(error){
            if(error) throw error;
            response.status(httpStatus.OK);
            response.send('Removed');
        });
    });

}