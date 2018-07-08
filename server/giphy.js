const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('/gif/:gif', (req, res) => {
  request
    .get(`https://giphy.com/search/${req.params.gif}.json`)
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body.data.children)
      }
    })
})

module.exports = router