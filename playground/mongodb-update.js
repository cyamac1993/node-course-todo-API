
const {MongoClient,ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
    return console.log('Unable to connect to MongoDB server'); // we use return statement to stop programm in this line if we hade not used this the 2nd log will be prined anyway(function will stop)
}
console.log(' connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({
//     _id : new ObjectID( '59b63ec7ca5158dad8070e56')
// },{
//     $set:{      //update oprator
//         completed : true
//     }
// },{
//     returnOriginal : false
// }).then((result)=>{
// console.log(result);
// });

db.collection('Users').findOneAndUpdate({
    _id : new ObjectID('59b63ec7ca5158dad8070e56')
},{
    $set : {
        name : 'Akbar'
    },
    $inc:{
        age : 10
    }
},{
    returnOriginal : false
}).then((result)=>{
console.log(result);
});


//db.close();
});