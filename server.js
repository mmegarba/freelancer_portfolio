const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors")
app.use(cors())
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));


app.get('/', function (req, res) {
  res.redirect('index.html')
})



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
