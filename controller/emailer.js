var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'breazehomeonboarding@gmail.com',
    pass: 'Breaze123'
  }
});

var mailOptions = {
  from: 'breazehomeonboarding@gmail.com',
  to: 'breazehomeonboarding@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});