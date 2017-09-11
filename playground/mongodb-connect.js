// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

//object destructuring

// var obj = {name:'cyamac',last:'beikzade'};
// var {name} = obj;
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
    return console.log('Unable to connect to MongoDB server'); // we use return statement to stop programm in this line if we hade not used this the 2nd log will be prined anyway(function will stop)
}
console.log(' connected to MongoDB server');

// db.collection('Todos').insertOne({
// text:'Somthing to do',
// completed:false
// },(err,result)=>{
// if(err){
//     return('unable to insert Todos',err);
// }
// console.log(JSON.stringify(result.ops,undefined,2));
// });

// db.collection('Users').insertOne({
//     name:'cyama',
//     age:24,
//     location:'teh'
// },(err,result)=>{
//     if(err){
//         return console.log('unable to insert',err);
//     }
//     console.log(JSON.stringify(result.ops,undefined,2));
// });

db.close();
});