const NewsModel = require('../models/Article');

module.exports.read = async function() {
  try {
    if (arguments.length) {
      const id = arguments[0];
      
      return await NewsModel.findById(id).exec();
    }
  
    return await NewsModel.find().exec();
  } catch (e) {
    console.log(e)
  }
};

module.exports.create = async function({ article }) {
  try {
    await NewsModel.create({
      title: article.title,
      author: article.author,
      url: article.url,
      description: article.description,
      content: article.content,
      publishedAt: article.publishedAt,
      urlToImage: article.urlToImage,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports.update = async function(id, data) {
  try {
    await NewsModel.findByIdAndUpdate(id, data)
  } catch (err) {
    console.error(err);
  }
};

module.exports.deleteNews = async function(id) {
  try {
    await NewsModel.findByIdAndDelete(id)
  } catch (err) {
    console.error(err);
  }
};
