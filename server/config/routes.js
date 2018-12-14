console.log ("inside of config/routes.js");

const Foodtrucks = require("../controllers/foodtrucks");
const Reviews = require("../controllers/reviews");

module.exports = function(app){
    app.get("/foodtruck", Foodtrucks.getAll);
    app.get("/foodtruck/:id", Foodtrucks.getId);
    app.post("/foodtruck", Foodtrucks.create);
    app.post('/foodtruck/:id/review', Reviews.addReview);
    app.put('/foodtruck/:id', Foodtrucks.update);
    app.delete('/foodtruck/:id', Foodtrucks.delete);
}