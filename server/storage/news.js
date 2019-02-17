const mongoose = require("mongoose");
const { Schema } = mongoose;

const NewsSchema = new Schema({
  author: String,
  title: String,
  publishedAt: Date
});

const NewsModel = mongoose.model("News", NewsSchema);

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

module.exports.create = async function({ title, author, publishedAt }) {
  try {
    await NewsModel.create({ title, author, publishedAt });
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
