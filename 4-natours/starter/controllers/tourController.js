// const fs = require('fs');
const Tour = require('./../models/tourModel');

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

// exports.checkID = (req, res, next, val) => {
//   console.log(`Tour id is ${val}`);
//   if (req.params.id * 1 >= tours.length) {
//     // Convert string to a number
//     return res.status(404).json({
//       status: 'error',
//       message: `Invalid id ${val}`
//     });
//   }
//   next();
// };

// exports.checkBody = (req, res, next) => {
//   console.log(`Body  ${req}`);
//   if (!req.body.name || !req.body.price) {
//     return res.status(400).json({
//       status: 'fail',
//       message: `Missing name or price id`
//     });
//   }
//   next();
// };

exports.getAllTours = async (req, res) => {
  // console.log(req.requestTime);
  try {
    const tours = await Tour.find();

    res.status(200).json({
      status: 'success',
      // results: tours.length,
      data: {
        tours
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id); // Tour.findOne({_id: req.params.id)
    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error
    });
  }
};
// console.log(req.params);
// const id = req.params.id * 1; // Convert string to a number
// const tour = tours.find(el => el.id === id);

exports.createTour = async (req, res) => {
  // const testTour = new Tour({});
  // testTour.save();
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent'
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'sucess',
      data: {
        tour
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: 'Invalid data sent'
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'sucess',
      data: null
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: 'Invalid data sent'
    });
  }
};
