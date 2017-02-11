var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var merchantSchema=new Schema({
    name:'String',
    image:'String'
});

module.exports=mongoose.model('Merchant',merchantSchema);
