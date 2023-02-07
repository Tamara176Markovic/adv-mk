const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");


const homeTitle = "";
const aboutTitle = "O nama";
const servicesTitle = "Pravne usluge";
const subtitle = "Korporativno pravo";
const nekretnine = "Nekretnine";
const radno = "Radno pravo";
const spor = "Rešavanje sporova";

const corp = "The industry's standard dummy text ever since the 1500s, when an unknown printer since the 1500s, since the 1500s, when an unknown printer took whenprinter took took a galleywhenprinter an unknown printer took took a galley.";
const realestate = "Lorem Ips is industry's standard dummyindustry's standard dummy.The industry's standard dummy text industry.The industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of";
const sporovi = "Lorem Ipsum is standard dummy text the printing and industry.The industry's standard dummy text industry.The industry's standard dummywhen an unknown printer dummywhen an unknown took a galley of";
const laborLaw = "The industry's standard dummy of the printing and industry.The industry's standard dummy text industry.The industry's standard dummywhen an unknown printer whenprinter took a galley of";
const teamTitle = "Naš tim";
const contactTitle = "Budimo u kontaktu";

const app = express();

const PORT = process.env.PORT || 8080; // u railway app PORT 8080

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



app.listen(PORT, function() {
    console.log("Server started o port 8080...");
});