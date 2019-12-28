const helper = require("sendgrid").mail;
const { sendGridKey } = require("../config/keys");

class Mailer extends helper.Mail {}
module.exports = Mailer;
