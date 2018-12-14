console.log("inside of controllers/foodtrucks.js");

const mongoose = require('mongoose');
const Foodtruck = mongoose.model('Foodtruck');

class Foodtrucks {
    getAll(req, res){
        Foodtruck.find({}).sort({"avgreview" : -1}).exec( function(err, foodtrucks){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else {
                res.json({"status": "ok", "foodtrucks": foodtrucks})
            }
        });
    }
    getId(req, res){
        Foodtruck.findOne({_id: req.params.id}, function(err, foodtruck){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else {
                res.json({"status": "ok", "foodtruck": foodtruck});
            }
        });
    }
    create(req, res){
        let foodtruck = new Foodtruck(req.body);
        foodtruck.save(function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else {
                res.json({"status": "ok"});
            }
        });
    }
    update(req, res){
        Foodtruck.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true}, function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else {
                res.json({"status": "ok"});
            }
        })
    }
    delete(req, res){
        Foodtruck.remove({_id: req.params.id}, function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }else{
                res.json({"status": "ok"});
            }
        })
    }
}

module.exports = new Foodtrucks();