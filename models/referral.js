var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var referralSchema=new Schema({
    merchantID:'String',
    fromID: 'String',
    toID: 'String',
    status: 'String',
    points:'String'
});

module.exports=mongoose.model('Referrals',referralSchema);
