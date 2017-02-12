var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var merchantSchema=new Schema({
    _id:'String',
    name:'String',
    image:'String'
});

module.exports=mongoose.model('Merchant',merchantSchema);
