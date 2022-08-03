import  nodemailer from "nodemailer";
import nodemailerSendgrid from "nodemailer-sendgrid"

const EMAIL_USER = process.env.EMAIL_USER
const API_KEY = process.env.API_KEY

const transporter = nodemailer.createTransport(
    nodemailerSendgrid({
        apiKey: API_KEY
    })
);

const sendEmail = async (to, subject, html) => {
  const options = {
    from:EMAIL_USER,
    to,
    subject,
    html,
  };
  return await transporter.sendMail(options, function (error, info) {
    if (error) {
      console.log('hubo un error',error);
    }
  });
} 

module.exports = {sendEmail};
