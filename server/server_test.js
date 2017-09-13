// mongodb is the native driver for interacting with a mongodb instance and mongoose is an Object modeling tool for MongoDB. 

var {mangoose} = require('./db/mongoose');






var newUser = new User({
    email:' belabela@gogole.com  '
});


newUser.save().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
    console.log('unable to save',err);
});

// var newModel = new Todo({
// text : '           coock         diner'
// });

// newModel.save().then((docs)=>{
// console.log(docs);
// },(err)=>{
// console.log('unable to save',err);
// });

// var Model_2 = new Todo({
//     text:'eat lunch',
//     completed:false,
//     completedAt:12
// });
// Model_2.save().then((docs)=>{
//     console.log(JSON.stringify(docs,undefined,2));
// },()=>{
//     console.log('unabale to save',err);
// });