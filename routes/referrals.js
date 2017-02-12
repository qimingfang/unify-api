var Referrals = require('../models/referral');
var express = require('express');

//configure routes

var router = express.Router();

router.route('/referrals')
	.get(function(req, res) {
		Referrals.find(function(err, referrals) {
			if (err)
				res.send(err);
			res.json(referrals);
		});
	})

	.post(function(req, res) {
		var referral = new Referrals(req.body);
		referral.save(function(err) {
			if (err)
				res.send(err);
			res.send({
				message: 'Referrals Added'
			});
		});
	})

	.delete(function(req, res) {
		Referrals.remove({}, function(err, referral) {
			if (err)
				res.send(err);

			res.json({
				message: 'Successfully deleted all referrals'
			});
		});
	});

router.route('/referrals/:id')
	.put(function(req, res) {
		Referrals.findOne({
			_id: req.params.id
		}, function(err, referral) {

			if (err)
				res.send(err);

			for (prop in req.body) {
				referral[prop] = req.body[prop];
			}

			// save the referral
			referral.save(function(err) {
				if (err)
					res.send(err);

				res.json({
					message: 'Referrals updated!'
				});
			});

		});
	})

	.get(function(req, res) {
		Referrals.findOne({
			_id: req.params.id
		}, function(err, referral) {
			if (err)
				res.send(err);

			res.json(referral);
		});
	})

	.delete(function(req, res) {
		Referrals.remove({
			_id: req.params.id
		}, function(err, referral) {
			if (err)
				res.send(err);

			res.json({
				message: 'Successfully deleted'
			});
		});
	});

module.exports = router;
