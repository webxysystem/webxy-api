import  nodemailer from "nodemailer";
import nodemailerSendgrid from "nodemailer-sendgrid"

const EMAIL_USER = 'webxy@lust-list.com'
const API_KEY = "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"

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
