// **************************************************************************************** */
// api-routes.js -this file offers a set of routes for displaying and saving data to the db
// **************************************************************************************** */


// Dependencies
//==========================================================================

// Requiring our Burgers model
const db = require('../models');

//Routes
//==========================================================================
module.exports = (app) => {

  // GET route for getting all of the posts
  app.get('/api/burgers/', (req, res) => {
    db.Burgers.findAll({})
      .then((dbBurgers) => {
        console.log(dbBurgers)
        res.json(dbBurgers);
      });
  });

  // Get route for returning posts of a specific category
  app.get('/api/burgers/devoured/:devoured', (req, res) => {
    db.Burgers.findAll({
      where: {
        devoured: req.params.devoured
      }
    })
      .then((dbBurgers) => {
        res.json(dbBurgers);
      });
  });

  // Get route for retrieving a single post
  app.get('/api/burgers/:id', (req, res) => {
    db.Burgers.findOne({
      where: {
        id: req.params.id
      }
    })
      .then((dbBurgers) => {
        res.json(dbBurgers);
      });
  });

  // POST route for saving a new post
  app.post('/api/burgers', (req, res) => {
    console.log(req.body);
    db.Burgers.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured,
    })
      .then((dbBurgers) => {
        console.log(dbBurgers)
        res.json(dbBurgers);
      });
  });

  // DELETE route for deleting posts
  app.delete('/api/posts/:id', (req, res) => {
    db.Burgers.destroy({
      where: {
        id: req.params.id
      }
    })
      .then((dbBurgers) => {
        res.json(dbBurgers);
      });
  });

  // PUT route for updating posts
  app.put('/api/burgers', (req, res) => {
    db.Burgers.update(
      {
        devoured: req.body.devoured
      },
      {
        where: {
          id: req.body.burger_id
        }
      })
      .then((dbBurgers) => {
        res.json(dbBurgers);
      });
  });
};