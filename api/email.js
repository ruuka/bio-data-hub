const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const config = require('../nuxt.config');
const app = require('express')();

app.use(bodyParser.json());
app.post('/sendmail', (req, res) => {
   
    const { name, email, message, subject } = req.body;
    const transporter = nodemailer.createTransport({
        host: config.default.smtp.host,
        port: config.default.smtp.port,
        auth: config.default.smtp.auth,
    });
    const mailOptions = {
        from: `${name}<${config.default.smtp.from}>`,
        to: email,
        subject: subject,
        html: `<p>${message}</p>`,
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
        res.status(500).send(err);
        } else {
        res.status(200).send(info);
        }
    });
})

module.exports = app;