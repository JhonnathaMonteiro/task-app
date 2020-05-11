const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "jhonnatha.am@gmail.com",
    subject: "Thanks to join!",
    text: `Welcome to task app, ${name}!`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "jhonnatha.am@gmail.com",
    subject: "Bye!",
    text: `How can we improve our app? ${name}!`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
