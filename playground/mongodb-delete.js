
const {MongoClient,ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
    return console.log('Unable to connect to MongoDB server'); // we use return statement to stop programm in this line if we hade not used this the 2nd log will be prined anyway(function will stop)
}
console.log(' connected to MongoDB server');

//deleteMany

db.collection('Todos').deleteMany({text:'eat lunch'}).then((obj)=>{
    console.log(obj);
},()=>{});

//db.close();
});