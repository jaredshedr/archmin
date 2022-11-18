const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

// create a schema
const { Schema } = mongoose;
const BowlsSchema = new Schema({
  bowlId: String,
  name: String,
  price: String,
  thumbnail: [String],
  category: String
});
// create a model
const Bowls = mongoose.model('Bowl', BowlsSchema);


module.exports.addBowl = function (data, callback) {
  // console.log('in db', data);


  // Author.findOneAndUpdate({userName: data.user, authorName: data.author}, {userName: data.user, authorName: data.author}, {overwrite: true, upsert: true})
  //   .then((res) => {
  //     callback(null, res);
  //   })
  //   .catch(err => callback(err, null));
}

module.exports = { Bowls }