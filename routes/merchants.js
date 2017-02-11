var Merchant=require('../models/merchant');
var express=require('express');

//configure routes

var router=express.Router();

router.route('/merchants')
    .get(function(req,res){
       Merchant.find(function(err,merchants){
           if(err)
                res.send(err);
           res.json(merchants);
       });
    })

    .post(function(req,res){
        var merchant=new Merchant(req.body);
        merchant.save(function(err){
            if(err)
                res.send(err);
            res.send({message:'Merchant Added'});
        });
    });

router.route('/merchants/:id')
    .put(function(req,res){
        Merchant.findOne({_id:req.params.id},function(err,merchant){

            if(err)
                res.send(err);

           for(prop in req.body){
                merchant[prop]=req.body[prop];
           }

            // save the merchant
            merchant.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Merchant updated!' });
            });

        });
    })

    .get(function(req,res){
        Merchant.findOne({_id:req.params.id},function(err, merchant) {
            if(err)
                res.send(err);

            res.json(merchant);
        });
    })

    .delete(function(req,res){
        Merchant.remove({
            _id: req.params.id
        }, function(err, merchant) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports=router;
