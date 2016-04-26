// Header
var name = "George Keith";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var skills = ["Javascript", "jQuery", "HTML", "CSS", "Node", "Angular"];
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



// Bio
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
work.description = "Manage Account Management & Support teams. Streamline account processes to make more efficient. Manage different personalities, while maintaining maximum efficiency.";
var formattedEmployer = HTMLworkEmployer.replace("#", "http://www.autorevo.com").replace("%data%", work["employer"]);
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
};
var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[0].name);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[0].years);
var formattedSchoolLoc = HTMLschoolLocation.replace("%data%", education.schools[0].location);
var formattedSchoolName2 = HTMLschoolName.replace("%data%", education.schools[1].name);
var formattedSchoolDegree2 = HTMLschoolDegree.replace("%data%", education.schools[1].degree);
var formattedSchoolDates2 = HTMLschoolDates.replace("%data%", education.schools[1].years);
var formattedSchoolLoc2 = HTMLschoolLocation.replace("%data%", education.schools[1].location);
$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedSchoolName);
$(".education-entry").append(formattedSchoolDegree);
$(".education-entry").append(formattedSchoolDates);
$(".education-entry").append(formattedSchoolLoc);
$(".education-entry").append(formattedSchoolName2);
$(".education-entry").append(formattedSchoolDegree2);
$(".education-entry").append(formattedSchoolDates2);
$(".education-entry").append(formattedSchoolLoc2);



// Projects
var projects = {
    "projects": [
    {
      "title": "Portfolio",
      "dates": "2015",
      "description": "This was my first attempt at making a webpage. I'm leaving it the way it is as a reminder to myself of how far I have come. I found images of my favorite things and put them in. I am proud of this site."
    },
    {
      "title": "Halloween Random Quote Generator",
      "dates": "October 2015",
      "description": "I am very proud of this project. I was able to use Angular for the first time and thought it turned out fine. It was around Halloween, so I thought I would run with a Halloween movie theme. I was unable to find any sites with an API for Halloween quotes, so I decided to hard code the quotes and pull them using Angular. I thought this turned out nice for my second attempt at making a website."
    }
  ]
}


var HTMLprojectStart = '<div class="project-entry"></div>';
var formattedProjectTitle = HTMLprojectTitle.replace("#", "http://www.george-keith.com").replace("%data%", projects.projects[0].title);
var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[0].dates);
var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[0].description);

$("#projects").append(HTMLprojectStart);
$(".project-entry").append(formattedProjectTitle);
$(".project-entry").append(formattedProjectDates);
$(".project-entry").append(formattedProjectDescription);

var formattedProjectTitle2 = HTMLprojectTitle.replace("#", "http://quote.george-keith.com").replace("%data%", projects.projects[1].title);
var formattedProjectDates2 = HTMLprojectDates.replace("%data%", projects.projects[1].dates);
var formattedProjectDescription2 = HTMLprojectDescription.replace("%data%", projects.projects[1].description);

$(".project-entry").append(formattedProjectTitle2);
$(".project-entry").append(formattedProjectDates2);
$(".project-entry").append(formattedProjectDescription2);
