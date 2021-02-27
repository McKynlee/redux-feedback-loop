const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET info from the db to display on Admin page:
router.get('/', (req, res) => {
  console.log('GET feedback')

  let sqlScript = 'SELECT * FROM "feedback" ORDER BY "date" ASC;';

  pool.query(sqlScript)
    .then(dbRes => {
      // console.log('dbRes:', dbRes);
      res.send(dbRes.rows)
    }).catch(error => {
      console.log('ERROR GETting feedback:', error);
      res.sendStatus(500);
    })
}) // end GET

// When a user submits their feedback,
// POST it to the database:
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

router.put('/:id', (req, res) => {
  const flaggedStatusToChangeId = req.params.id;
  const flaggedStatusToChange = req.body.flagged;

  console.log('PUT id:', flaggedStatusToChangeId, 'req.body:', req.body);

  let sqlScript;

  // if (flaggedStatusToChange === 'TRUE') {
  //   sqlScript = `
  //   UPDATE "feedback"
  //   SET "flagged" = `
  // }
}) // end PUT

// When admin clicks on delete button of f
// feedback row, delete that row by its id:
router.delete('/:id', (req, res) => {
  let idToDelete = Number(req.params.id);

  let sqlScript = `DELETE FROM "feedback" 
  WHERE "id"=$1`

  pool.query(sqlScript, [idToDelete])
    .then(dbRes => {
      // console.log('Feedback deleted', dbRes);
      res.sendStatus(200);
    }).catch(error => {
      console.log('Error deleting feedback:', error);
      res.sendStatus(500);
    })
}) // end DELETE

module.exports = router;