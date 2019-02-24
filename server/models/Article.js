const mongoose = require('mongoose');

const Article = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  description: String,
  content: String,
  publishedAt: String,
  urlToImage: String,
  source: {
    id: String,
    name: String,
  },
})

module.exports = mongoose.model('news', Article);
