require('dotenv').config();
const express = require('express')
const app = express()
// const port = 3000


// importing routes
const Mail = require('./routes/mail');

const PORT = process.env.PORT;

app.use("/api",Mail);




// const express = require('express');
// const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');
// const path = require('path');
// const nodemailer = require('nodemailer');

// const app = express();

// View engine setup
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// Static folder
// app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.render('contact');
// });

// app.post('/send', (req, res) => {
  

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: process.env.EMAIL,
//     port: 465,
//     secure: true, // true for 465, false for other ports
//     auth: {
//         user: process.env.EMAIL, // generated ethereal user
//         pass: process.env.PASSWORD  // generated ethereal password
//     },
//     tls:{
//       rejectUnauthorized:false
//     }
//   });

//   // setup email data with unicode symbols
//   let mailOptions = {
//       from: process.env.EMAIL, // sender address
//       to: 'jrkbond@gmail.com', // list of receivers
//       subject: 'Node Contact Request', // Subject line
//       text: 'Hello world?', // plain text body
//       // html: output // html body
//   };

//   // send mail with defined transport object
//   transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//           return console.log(error);
//       }
//       console.log('Message sent: %s', info.messageId);   
//       console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//       res.render('contact', {msg:'Email has been sent'});
//   });
//   });
  
// app.listen(3000, () => console.log('Server started...'));
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })