const localtunnel = require("localtunnel");

localtunnel(5000, { subdomain: "thisbakdadomain" }, function(err, tunnel) {
  console.log("LT running");
});
