const express = require('express');
const cors = require('cors');
const db = require('./config/db.js');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get('/api/get', (req, res) => {
    db.query(`SELECT * FROM posts;`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/api/getFromId/:id', (req, res) => {
    const id = req.params.id;
    db.query(`SELECT * FROM posts WHERE id = ?;`, id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/api/create', (req, res) => {
    const userName = req.body.userName;
    const title = req.body.title;
    const text = req.body.text;

    db.query(`INSERT INTO posts (title, post_text, user_name) VALUES (?, ?, ?);`, [title, text, userName], (err, result) => {
      if (err) {
          console.log(err);
      } else {
          res.send(result);
      }
  })
});

app.post('/api/like/:id', (req, res) => {
    const id = req.params.id;
    db.query(`UPDATE posts SET likes = likes + 1 WHERE id = ?;`, id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))