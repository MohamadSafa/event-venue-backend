const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./config/database');
const eventRouter = require('./routes/eventRoute');
const reservationRouter = require('./routes/reservationRoute');
const userRouter = require('./routes/userRoute');
const venueRouter = require('./routes/enrollementRoute');
const classRouter = require('./routes/classRoute');

//const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/users', userRouter);
app.use('/events', eventRouter);
app.use('/reservations', reservationRouter);
app.use('/venues', venueRouter);


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});