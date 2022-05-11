const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

const PORT = process.env.PORT || 3000;

// declare a new express app
const app = express();
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Retrieve OAuth2 information
const oauth2Client = new google.auth.OAuth2 (
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
});

const accessToken = oauth2Client.getAccessToken();

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Credentials", "True")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods", "OPTIONS, POST")
  next()
});

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })

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
  // Setup email
  var mail = {
      from: process.env.GOOGLE_CLIENT_EMAIL,
      to: process.env.OUTGOING_EMAIL,
      subject: `Contact Form Submission from: ${req.body.email}`,
      text: `name: ${req.body.name}\nmessage: ${req.body.message}`
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
          accessToken: accessToken
      },
      tls: {
        rejectUnauthorized: false
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
  transporter.sendMail(mail, (err, res) => {
    if (err){
        res.json({
            status: 'fail',
            error: err
        })
    }
    else{
        res.status(200).json({})
    }

    transporter.close();
  })

  

  res.status(200).json({})
})

app.post('/contact/send/*', (req, res) => {
    res.json({fail: 'Incorrect post attempt'});
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
