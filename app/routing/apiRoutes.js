var friends = require("../data/friends");



module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  app.post("/api/friends", function(req, res) {
 
 friends.push(req.body);

 /*
-take the req.body.scores for loop through it
-for loop through all the friends.js scores as well
-use the abs() to substract each score against each of all the friends in data/freinds app.
-which ever result gives the lowest score that would be the match
-res.json() that match and populate the modal with the person picture and name
-very curious to see the solution had hard time coding this logic

 */
  });


};
