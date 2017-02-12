var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema=new Schema({
    _id: 'String',
    name:'String',
    referral:'String',
    image: 'String'
});

module.exports=mongoose.model('User',userSchema);
