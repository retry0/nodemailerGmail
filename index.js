const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    "903749275611-l50qis20ojb98tm8ncr7699cn1imbsvs.apps.googleusercontent.com",
    "ecHuNn6qsR1ZfWP5ZD6M7Az8", // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
);


oauth2Client.setCredentials({
    refresh_token: "Your Refresh Token Here"
});
    
const accessToken = oauth2Client.refreshAccessToken()
    .then(res => res.credentials.access_token);



    const smtpTransport = nodemailer.createTransport({
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


   const mailOptions = {
    from: "elife.shams@gmail.com",
    to: "linggaadi4nd@gmail.com",
    subject: "Node.js Email with Secure OAuth",
    generateTextFromHTML: true,
    html: "<b>test</b>"
};


smtpTransport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransport.close();
});