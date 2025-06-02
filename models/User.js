const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/mydatabase');

const userSchema = new Schema({
  name: String,
  email: String,
  image: String,
});
module.exports = mongoose.model('User', userSchema);