var Article = require("../models/Article");

module.exports = {
  
//Find method for finding all articles in the db
  find: function(req, res) {
    console.log("Gathering saved articles from the db");
    Article.find().then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
//Insert method handles to add new articles
  insert: function(req, res) {
    console.log("Adding saved artice to the db");
    console.log("req.body: ", req.body);
    Article.create(req.body).then(function(doc) {
      res.json(doc);
      console.log("doc: ", doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
//Delete method to delete articles
  delete: function(req, res) {
    console.log("Deleting a saved article from the db");
    Article.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
      console.log("doc: ", doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};