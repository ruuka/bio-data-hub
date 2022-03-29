const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const config = require('../nuxt.config');
const app = require('express')();

app.use(bodyParser.json());
app.post('/sendmail', (req, res) => {
   
    const { name, email, message, subject } = req.body;
    //transporter mailtrap.io
    // const transporter = nodemailer.createTransport({
    //     host: config.default.smtp.host,
    //     port: config.default.smtp.port,
    //     auth: config.default.smtp.auth,
    // });

    //outlook transporter 
    var transporteroutlook = nodemailer.createTransport({
        host:  config.default.smtp.host, // hostname
        secureConnection: false, // TLS requires secureConnection to be false
        port: config.default.smtp.port, // port for secure SMTP
        tls: {
           ciphers:'SSLv3'
        },
        auth: config.default.smtp.auth,
    });

    //gmail transporter 
    // Create the transporter with the required configuration for Gmail
// change the user and pass !
// var transporterGmail = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true, // use SSL
//     auth: {
//         user: '',
//         pass: ''
//     }
// });

    const mailOptions = {
        from: `${name}<${config.default.smtp.from}>`,
        to: email,
        subject: subject,
        html: `<p>${message}</p>`,
    };
    transporteroutlook.sendMail(mailOptions, (err, info) => {
        if (err) {
        res.status(500).send(err);
        } else {
        res.status(200).send(info);
        }
    });
})

module.exports = app;