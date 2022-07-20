const EMAIL_HOST = 'smtp.dreamhost.com'
const EMAIL_PORT = 587
const EMAIL_USER = 'noreply@eroomsuite.com'
const EMAIL_PASS = 'Enviocorreo!Jacidi20'

import  nodemailer from "nodemailer";

// Create reusable transporter object using SMTP transport.
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || EMAIL_HOST,
  port: process.env.EMAIL_PORT || EMAIL_PORT,
  secure: process.env.SMTP_SECURE || false,
  auth: {
    user: process.env.EMAIL_USER || EMAIL_USER,
    pass: process.env.EMAIL_PASS || EMAIL_PASS,
  }
});

const sendEmail = async (from, to, subject, html) => {
      const options = {
      from,
      to,
      subject,
      html,
    };
    return await transporter.sendMail(options, function (error, info) {
      if (error) {
        console.log('hubo un error',error);
      } else {
        console.log('funciono', info);
      }
    });
} 

module.exports = {sendEmail};
