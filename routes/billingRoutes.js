const { stripeSecretKey } = require("../config/keys");
const requireLogin = require("../middlewares/requireLogin");
const stripe = require("stripe")(stripeSecretKey);
module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id
    });
    console.log(req);
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
