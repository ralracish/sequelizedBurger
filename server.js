//***DEPENDENCIES
const express = require('express');

//Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Requiring our models for syncing
const db=require('./models');

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================
require('./routes/html-routes.js')(app);
require('./routes/burger-api-routes.js')(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App now listening at localhost:${PORT}`);
  });
})
