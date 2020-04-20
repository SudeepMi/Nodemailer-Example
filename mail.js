const nodemailer = require('nodemailer');

module.exports = async function sendmail(subject,body) {

    // create reusable transporter object using the default SMTP transport

    let transporter = nodemailer.createTransport({
      host: "",  // enter host name
      port: "", //enter port name
      secure: false, // true for 465, false for other ports
      auth: {
        user: '', // write your smtp account user name
        pass: '' // write your smtp account user password
      },
      tls : { 
            rejectUnauthorized : false  // Important for sendimg mail from localhost
      }
    
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'info@sendermail.com', // sender address
      to: "info@recmail.com", // list of receivers
      subject: subject, // Subject line
      text: "", // plain text body
      html: body // html body
    });
  
    console.log("Message sent: %s", info.messageId);
  }
