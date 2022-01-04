const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// declare a new express app
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

/* Get */ 
app.get('/contact/send', function(req, res) {
  const items = ['hello', 'there']
  res.json({success: 'What are you trying to get?', items});
});

app.get('/contact/send/*', function(req, res) {
  const items = ['hello', 'there']
  res.json({success: 'What are you trying to get?', items});
});

/* Post */
app.post('/contact/send', (req, res) => {
  console.log(req.body);
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name}\nemail: ${email}\nmessage: ${message}`;

  // Setup email
  var mail = {
      from: email,
      to: process.env.OUTGOING_EMAIL,
      subject: 'New contact form submission',
      text: content
  };

  // Setup transport
  var transport = {
      service: 'gmail',
      auth: {
          type: 'OAuth2',
          user: process.env.EMAIL,
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken: process.env.ACCESS_TOKEN
      }
  }
  
  // Setup transporter
  var transporter = nodemailer.createTransport(transport);

  transporter.verify((err) => {
      if (err){
          console.log(err);
      }

      else{
          console.log('Server is ready to take messages');
      }
  })

  // Act
  transporter.sendMail(mail, (err) => {
      if (err){
          console.log(err);
          res.json({
              status: 'fail',
              error: err
          })
      }
      else{
          res.json({
              status: 'success'
          })
      }
  })
})

app.post('/contact/send/*', (req, res) => {
  console.log(req.body);
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name}\nemail: ${email}\nmessage: ${message}`;

  // Setup email
  var mail = {
      from: email,
      to: process.env.OUTGOING_EMAIL,
      subject: 'New contact form submission',
      text: content
  };

  // Setup transport
  var transport = {
      service: 'gmail',
      auth: {
          type: 'OAuth2',
          user: process.env.EMAIL,
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken: process.env.ACCESS_TOKEN
      }
  }
  
  // Setup transporter
  var transporter = nodemailer.createTransport(transport);

  transporter.verify((err) => {
      if (err){
          console.log(err);
      }

      else{
          console.log('Server is ready to take messages');
      }
  })

  // Act
  transporter.sendMail(mail, (err) => {
      if (err){
          console.log(err);
          res.json({
              status: 'fail',
              error: err
          })
      }
      else{
          res.json({
              status: 'success'
          })
      }
  })
})

/* Put */
app.put('/contact/send', function(req, res) {
  const items = ['hello', 'there']
  res.json({success: 'What are you trying to put?', items})
});

app.put('/contact/send/*', function(req, res) {
  const items = ['hello', 'there']
  res.json({success: 'What are you trying to put?', items})
});

/* Delete */
app.delete('/contact/send', function(req, res) {
  const items = ['hello', 'there']
  res.json({success: 'What are you trying to delete?', items});
});

app.delete('/contact/send/*', function(req, res) {
  const items = ['hello', 'there']
  res.json({success: 'What are you trying to delete?', items});
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
