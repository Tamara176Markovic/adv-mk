const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");

// Import http library
const http = require("http");
// use env variable to define tcp/ip port with a default
const PORT = process.env.PORT || 8080;
//create our server object
const server = http.createServer();
// We define a function that runs in response a request event
server.on("request", (request, response) => {
  // handle request based on method then URL
  response.statusCode = 200;
  response.write("<h1>Hello World</h1>");
  response.end();
});
// get the server to start listening








const homeTitle = "";
const aboutTitle = "O nama";
const servicesTitle = "Pravne usluge";
const subtitle = "Korporativno pravo";
const nekretnine = "Nekretnine";
const radno = "Radno pravo";
const spor = "Rešavanje sporova";

const corp = "The industry's standard dummy text ever since the 1500s, when an unknown printer since the 1500s, since the 1500s, when an unknown printer took when an unknown printer took took a galley.";
const realestate = "Lorem Ipsum is simply dummy text of the printing and industry.The industry's standard dummy text industry.The industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of";
const sporovi = "Lorem Ipsum is simply dummy text of the printing and industry.The industry's standard dummy text industry.The industry's standard dummywhen an unknown printer took a galley of";
const laborLaw = "Lorem Ipsum is simply dummy text of the printing and industry.The industry's standard dummy text industry.The industry's standard dummywhen an unknown printer took a galley of";
const teamTitle = "Naš tim";
const contactTitle = "Budimo u kontaktu";

const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home", {pageTitle: homeTitle});
});

app.get("/about", function(req, res) {
    res.render("about", {pageTitle: aboutTitle});
});

app.get("/services", function(req, res) {
    res.render("services", {pageTitle: servicesTitle,textCorp:corp, textRealEstate: realestate, textSporovi: sporovi, textLabor:laborLaw});
});

app.get("/korporativno", function(req, res) {
     res.render("korporativno", {subTitle: subtitle, textCorp:corp});
});

app.get("/nekretnine", function(req, res) {
    res.render("nekretnine", {subTitle: nekretnine, textCorp:corp});
});

app.get("/radno", function(req, res) {
    res.render("radno", {subTitle: radno, textCorp:corp});
});

app.get("/sporovi", function(req, res) {
    res.render("sporovi", {subTitle: spor, textCorp:corp});
});

app.get("/team", function(req, res) {
    res.render("team", {pageTitle: teamTitle});
});

app.get("/contact", function(req, res) {
    res.render("contact", {pageTitle: contactTitle});
});



// app.listen(3000, function() {
//     console.log("Server started o port 3000...");
// });

app.listen(PORT, err => {
    // error checking
    err ? console.error(err) : console.log(`listening on port ${PORT}`);
  });