/*
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

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
*/