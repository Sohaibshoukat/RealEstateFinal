const connectToMongo = require("./DB");
const express = require('express')
var cors = require('cors')
const nodemailer = require('nodemailer');

connectToMongo()

const app = express()
const port = 5000
app.use(express.json())


app.use(cors())

app.use('/api/user', require('./Routes/User'));
app.use('/api/dev', require('./Routes/Developer'));
app.use('/api/building', require('./Routes/Building'));
app.use('/api/villa', require('./Routes/Villa'));
app.use('/api/penthouse', require('./Routes/PentHouse'));

app.post('/send-email', (req, res) => {
  const { title, name, Email,PhoneNu, Message,TourTime,TourDate } = req.body;

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'sohaibshoukat94@gmail.com', // generated ethereal user
      pass: 'wykgmnowgsxjvrtu', // generated ethereal password
    },
  });

  // Define the email options
  const mailOptions = {
    from: Email,
    to: 'sohaibshoukat94@gmail.com',
    subject: `Meeting Schedule For ${title}`,
    text: `Name: ${name}\nEmail: ${Email}\nPhone No: ${PhoneNu} \nDate: ${TourDate}\nTime: ${TourTime} \nMessage: ${Message}`,
  };

  // Send the email using the transporter
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Inote-book listening at http://localhost:${port}`)
})

