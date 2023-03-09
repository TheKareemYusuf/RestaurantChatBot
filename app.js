const express = require('express');

const app = express()


app.get('/', (req, res) => {
    res.json({
      status: 'Success',
      message: 'Welcome to my Restaurant ChatBot, kindly visit the following links for information about usage',
      GitHub_link: 'https://github.com/TheKareemYusuf/RestaurantChatBot',
    })
  })

module.exports = app