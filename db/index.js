const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

// create a schema
const { Schema } = mongoose;
const BowlsSchema = new Schema({
  bowlId: String,
  name: String,
  price: String,
  size: String,
  thumbnail: [String],
  category: String
});
// create a model
const Bowls = mongoose.model('Bowl', BowlsSchema);


module.exports.addABowl = function (data, callback) {
  console.log('in db', data);

  Bowls.findOneAndUpdate({name: data.name, price: data.price, size: data.size, thumbnail: data.images}, {name: data.name, price: data.price, size: data.size, thumbnail: data.images}, {overwrite: true, upsert: true})
    .then((res) => {
      console.log(res);
      callback(null, res);
    })
    .catch(err => {
      console.log(err)
      callback(err, null)
    });
}

module.exports.getAllBowls = function (callback) {
  Bowls.find()
    .then(res => callback(null, res))
    .catch(err => callback(err, null))
}

// module.exports = { Bowls }