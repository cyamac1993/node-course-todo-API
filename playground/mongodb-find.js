
const {MongoClient,ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
    return console.log('Unable to connect to MongoDB server'); // we use return statement to stop programm in this line if we hade not used this the 2nd log will be prined anyway(function will stop)
}
console.log(' connected to MongoDB server');

// db.collection('Todos').find({
//     _id: new ObjectID('59b63d96283e34d80e85cc70')   //querying
// }).toArray().then((docs)=>{
// console.log('Todos');
// console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//     console.log('unable to fetch',err);
// });  //find returns mongoDB cursor(tons of cursor methods) toArray returns a promiss

// db.collection('Todos').find().count().then((count)=>{
//     console.log(`Todos count:${count}`);
// },(err)=>{
//     console.log('unable to fetch todos',err);
// });

db.collection('Users').find({name:'cyamac'}).toArray().then((docs)=>{
console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
    console.log(`unable to fetch`,err);
});

//db.close();
});