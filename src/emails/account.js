const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "sanjaybarman870@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}, let me know how you get along with the app`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "sanjaybarman870@gmail.com",
    subject: `Goodby ${name}`,
    text: `Please send us feedback of your user experience, and Hope to see you again`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
