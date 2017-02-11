var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var referralSchema=new Schema({
    customerID:'String',
    merchantID:'String',
    points:'String'
});

module.exports=mongoose.model('Referrals',referralSchema);
