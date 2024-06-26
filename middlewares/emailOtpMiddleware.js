const nodemailer = require("nodemailer");

//Nodemailer
//transporter configuration
const transporter = nodemailer.createTransport({
  host: "smtp.rediffmail.com",
  port:  25,
  secure: true,
  auth: {
    user: 'anirudhchauhan313@rediffmail.com',
    pass: 'jlticphji1c8woc0ck0g' //use application specific password from zoho
  },
});

//Send OTP via Email
exports.sendOTPByEmail = (email, otp) => {
  const mailOptions = {
    from: '"Node Project" <' + process.env.email + '>',
    to: email,
    subject: "OTP Verification",
    text: `Your OTP: ${otp}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
};

//reference
//https://stackoverflow.com/questions/65983495/nodemailer-invalid-login-535-authentication-failed

