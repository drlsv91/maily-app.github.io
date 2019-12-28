const helper = require("sendgrid").mail;
const { sendGridKey } = require("../config/keys");

class Mail extends helper.Mail {}
