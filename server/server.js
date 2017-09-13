var express =require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {users} = require('./models/users');


var app = express();

app.use(bodyParser.json()); //mddleware: access something off the librar
//bodyParser.json() returns a function

app.post('/todos',(req,res)=>{

var todo = new Todo({
text: req.body.text
});


var todo1 = new Todo({
    text : req.body.text,
    completedAt : req.body.completedAt
});


todo.save().then((docs)=>{
    res.send(docs);
},(err)=>{
    res.status(400).send(err);
});

todo1.save().then((docs)=>{
    res.send(docs);
},(err)=>{
res.status(400).send(err);
});

});




app.listen(3000,()=>{
    console.log('connected to 3000 port');
});