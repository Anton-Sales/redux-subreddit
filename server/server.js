const path = require('path')
const express = require('express')
const request = require('superagent')
const redditRoutes = require('./reddit')
const giphyRoutes = require('./giphy')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/reddit', redditRoutes)

const wikiRoute = 'https://en.wikipedia.org/w/api.php?'

server.use('/api/v1/reddit', redditRoutes)

server.get('/api/v1/wiki', (req, res) => {
    const keys = Object.keys(req.query)
    const query = keys.map(key => `${key}=${req.query[key]}`).join('&')    
    request
    .get(wikiRoute+query)
    .then(wikiRes => {
        const data = makeWikiDataBetter(wikiRes.body)                 
        res.json(data)
    })
})

function makeWikiDataBetter(data){    
  return data[1].map((title, i) => ({title, description: data[2][i], url: data[3][i]}))
}

module.exports = server
