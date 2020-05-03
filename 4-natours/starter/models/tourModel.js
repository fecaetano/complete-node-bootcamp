const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price']
  },
  rating: {
    type: Number,
    default: 4.5
  }
});

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;

// Test
// const testTour = new Tour({
//   name: 'The Forest Hiker',
//   price: 497,
//   rating: 4.7
// });

//   const testTour = new Tour({
//     name: 'The Park Camper',
//     price: 997
//   });

//   testTour
//     .save()
//     .then(doc => {
//       console.log(doc);
//     })
//     .catch(err => {
//       console.log('ERROR:  ', err);
//     });
