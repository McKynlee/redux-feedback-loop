const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET info from the db to display on Admin page:
router.get('/', (req, res) => {
  console.log('GET feedback')

  let sqlScript = 'SELECT * FROM "feedback" ORDER BY "date" ASC;';

  pool.query(sqlScript)
    .then(dbRes => {
      console.log('dbRes:', dbRes);
      res.send(dbRes.rows)
    }).catch(error => {
      console.log('ERROR GETting feedback:', error);
      res.sendStatus(500);
    })
}) // end GET

router.post('/', (req, res) => {
  // create variable to hold feedback 
  // data sent from ReviewPage
  let newFeedback = req.body;
  console.log('adding new feedback:', newFeedback);

  // Tell sql db to insert data:
  let sqlScript = `INSERT INTO "feedback"
  ("feeling", "understanding", "support", "comments")
  VALUES ($1, $2, $3, $4)`

  pool.query(sqlScript,
    [newFeedback.feeling,
    newFeedback.understanding,
    newFeedback.support,
    newFeedback.comments])
    .then(dbRes => {
      console.log('db POST response', dbRes);
      res.sendStatus(201);
    }).catch(error => {
      console.log('ERROR Posting', error);
      res.sendStatus(500);
    })
});

module.exports = router;