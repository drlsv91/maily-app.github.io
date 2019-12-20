const express = require("express");
const mongoose = require("mongoose");
const { mongoURI, cookieKey } = require("./config/keys");
const passport = require("passport");
const cookieSession = require("cookie-session");

require("./models/User");
require("./services/passport")();
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

mongoose
  .connect(mongoURI)
  .then(() => console.log(`Connected to remote MongoDB...`))
  .catch(err => console.log("error is: ", err.message));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}...`);
});
// connection string: mongodb://victor:12345@cluster0-shard-00-00-ooqtx.mongodb.net:27017,cluster0-shard-00-01-ooqtx.mongodb.net:27017,cluster0-shard-00-02-ooqtx.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority
