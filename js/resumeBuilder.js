// $("#main").append("George Keith");

/*var awesomeThoughts = "I am George and I am AWESOME!";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts);
*/
var name = "George Keith";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["Javascript", "jQuery", "HTML", "CSS", "NodeJS", "AngularJS"];
var bio = {
  "name": "George Keith",
  "role": "Web Developer",
  "contact": {
    "phone": "(214)205-7336",
    "email": "george@awkwardlybrilliant.com",
    "github": "ggkeith",
    "twitter": "@ggkeith",
    "location": "Dallas, TX"
  },
  "message": "I am currently studying to be a full-stack web developer.",
  "skills": skills,
  "bioPic": "images/fry.jpg"
};

// variables for formatted contacts
var formattedPhone = HTMLmobile.replace("%data%", bio.contact.phone);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

//append contact info to site
$(".flex-box").append(formattedPhone);
$(".flex-box").append(formattedEmail);
$(".flex-box").append(formattedLocation);
$(".flex-box").append(formattedGithub);
$(".flex-box").append(formattedTwitter);
$("#topContacts").prepend(formattedPic);


var work = {};
var education = {};

work.position = "Director of Client Services";
work.employer = "AutoRevo";
work.years = "2014-present";
work.city = "Plano, TX";

education["school"] = "freeCodeCamp";
education["years"] = "2015-2016";
education["city"] = "Dallas, TX";

var formattedEmployer = HTMLworkEmployer.replace("%data%", work["employer"]);
var formattedTitle = HTMLworkTitle.replace("%data%", work["position"]);
var formattedDates = HTMLworkDates.replace("%data%", work["years"]);

$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(formattedEmployer);
$(".work-entry").append(formattedTitle);
$(".work-entry").append(formattedDates);
//$("").append();
