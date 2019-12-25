// prod.js - production keys here
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleSecretKey: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY
};

// mongodb://victor-prod:12345@cluster0-shard-00-00-g6yqf.mongodb.net:27017,cluster0-shard-00-01-g6yqf.mongodb.net:27017,cluster0-shard-00-02-g6yqf.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority
