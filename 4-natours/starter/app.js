const express = require('express');
const app = express();
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// 1. Middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json()); // Middleware receive json
app.use(express.static(`${__dirname}/public`));

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });

// 3) Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;

// const express = require('express');
// const morgan = require('morgan');

// const tourRouter = require('./routes/tourRoutes');
// const userRouter = require('./routes/userRoutes');

// const app = express();

// // 1) MIDDLEWARES
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

// app.use(express.json());
// app.use(express.static(`${__dirname}/public`));

// app.use((req, res, next) => {
//   console.log('Hello from the middleware 👋');
//   next();
// });

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });

// // 3) ROUTES
// app.use('/api/v1/tours', tourRouter);
// app.use('/api/v1/users', userRouter);

// module.exports = app;

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .send({ message: 'Hello from the server side... ', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to this endpoint');
// });
