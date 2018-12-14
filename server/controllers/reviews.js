console.log("inside of controllers/reviews.js");

const mongoose = require('mongoose');
const Foodtruck = mongoose.model('Foodtruck');
const Review = mongoose.model('Review');

class Reviews {

    addReview(req, res){
        let review = new Review(req.body);
        review.save(function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else{
                Foodtruck.findOne({_id:req.params.id}, function(err, foodtruck){
                    if(err){
                        res.json({"status": "not ok", "errors": err}); 
                    }
                    else {
                        foodtruck.reviews.push(review);
                        let total = 0;
                        for (let r of foodtruck.reviews){
                            total += r.rating;
                        }
                        foodtruck.avgreview = total/foodtruck.reviews.length;
                        foodtruck.save(function(err){
                            if (err){
                                res.json({"status": 'not ok', "errors": err});
                            }
                            else{
                                res.json({"status": 'ok'});
                            }
                        })
                    }
                })
            }
        });
    }
}

module.exports = new Reviews();