// Header
var name = "George Keith";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// Bio
var skills = ["Javascript", "jQuery", "HTML", "CSS", "Node", "Angular"];
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

// Contact
var formattedPhone = HTMLmobile.replace("%data%", bio.contact.phone);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
$("#topContacts").prepend(formattedPic);
$(".flex-box").append(formattedPhone);
$(".flex-box").append(formattedEmail);
$(".flex-box").append(formattedLocation);
$(".flex-box").append(formattedGithub);
$(".flex-box").append(formattedTwitter);


// Work
var work = {};
work.position = "Director of Client Services";
work.employer = "AutoRevo";
work.years = "2014-present";
work.city = "Plano, TX";
work.description = "Manage Account Management & Support teams. Streamline account processes to make more efficient.";
var formattedEmployer = HTMLworkEmployer.replace("%data%", work["employer"]);
var formattedTitle = HTMLworkTitle.replace("%data%", work["position"]);
var formattedDates = HTMLworkDates.replace("%data%", work["years"]);
var formattedLocation = HTMLworkLocation.replace("%data%", work["city"]);
var formattedDescription = HTMLworkDescription.replace("%data%", work["description"]);
$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(formattedEmployer);
$(".work-entry").append(formattedTitle);
$(".work-entry").append(formattedDates);
$(".work-entry").append(formattedLocation);
$(".work-entry").append(formattedDescription);


// Education
var education = {
  "schools": [
    {
      "name": "freeCodeCamp",
      "years": "2015-2017",
      "location": "Dallas, TX",
      "degree": "Full Stack Development"
    },
    {
      "name": "Plymouth State University",
      "years": "1995",
      "location": "Plymouth, NH",
      "degree": "Psychology"
    }
  ]
}
var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools.name);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools.degree);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools.years);
var formattedSchoolLoc = HTMLschoolLocation.replace("%data%", education.schools.location);
$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedSchoolName);
$(".education-entry").append(formattedSchoolDegree);
$(".education-entry").append(formattedSchoolDates);
$(".education-entry").append(formattedSchoolLoc);

// Projects
var project = {
  [
    {

    },
    {

    }
  ]
}
