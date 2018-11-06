var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
            auth: {
         type: "OAuth2",
         user: "elife.shams@gmail.com",         
         clientId: "903749275611-l50qis20ojb98tm8ncr7699cn1imbsvs.apps.googleusercontent.com",
         clientSecret: "ecHuNn6qsR1ZfWP5ZD6M7Az8",
         refreshToken: "1/KP03SolKr91juQ_AHwHQuMBG88-oHRjrBOFLQb4NAn4",
         accessToken: "ya29.GltMBr0-kMmzT5lW-UuF5QFbsomNPvXd6nsjy5bzN3wZ5AEHiQE9pLkOWePqJehO0IuQC9to8vtTiVXCvuUn_pFKEta9-Uj6n1YGSUey_xLQwXCQd5pWi7bLBs9d"
    }
});



var mailOptions = {
  from: 'elife.shams@gmail.com',
  to: 'linggaadi4nd@gmail.com',
  subject: 'Testmail',
  text: 'Hi, mail sent.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});