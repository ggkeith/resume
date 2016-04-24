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
  "contact-info": {
    "phone": "(214)205-7336",
    "email": "george@awkwardlybrilliant.com",
    "github": "ggkeith",
    "website": "www.awkwardlybrilliant.com"
  },
  "message": "I am currently studying to be a full-stack web developer.",
  "skills": skills
};
