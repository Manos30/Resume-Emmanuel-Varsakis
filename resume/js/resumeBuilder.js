//Objects
var bio = {
	"name": "Emmanuel Varsakis",
	"role": "Full-Stack Developer",
	"welcome":"Hi! I am Emmanuel and I'm AWESOME",	
	"contacts":{
		"location":"Faiakon 2, Marousi 15124,Greece",	
		"Email":"Varsakise@gmail.com",
		"mobile":"(6938) 510 555"
		},
	"skills": ["Awesomeness ","Programming ","Gamming ","JS ","Saving The Universe "],
	"pic":"images/fry.jpg" };
	var work={
	"jobs":[
	{
	 	"title":"Softwear Engingeer ",
	 	"employer":"Nuerocom.SA",
	 	"date": "2012 - Current",
	 	"location":"1 Vas. Pyrrou & M. Assias ,Chalandri 152 33, Greece",
	 	"description":"Programming in C !, Java Script, Website Development"
 		 }
 		 ,
 		 {
 		"title":"Administrative Work ",
	 	"employer":"Wind Hellas Telecommunications S.A. ",
	 	"date": "2011 - 2012",
	 	"location":"Leof.Kifisias 66 ,Marousi, Greece",
	 	"description":"Setting Administrative premission to users and Softwear troubleshouting"
 		 }
	]}; 
	var projects = {
	"projects":[
	{
	"title":"Monitoring System",
	"dates" : "2014",
	"description":"A monitoring system that checks pending requests to servers and the set up settings of the this system"
	}
	,
	{
	 "title" : "Web Design",
	 "dates" : "2012-current",
	 "description" : "Desinging and redesign of web sites"
	}
	]};					 
var education={
	"schools":[
				{
				"name": "La Vern",
				"degree": "Bachelor of Business",
				"gradutated": 2004,
				"major": " Computer Information Systems",
				"location": "Theodorou Diligianni 67 ,Kifisia 145 62, Greece"}
				,
			  	{
				"name": "American College of Greece ",
				"degree":"Bachelor of Science",
				"gradutated": 2012,
				"major":" Programming",
				"location":"American College of Greece ,Agia Paraskevi, Greece"
				}
			]	
		,
			"onlinecorses":[
				{
					"title":"Java Script",
					"schools":"Udacity",
					"date":2015
				}
				]};


// if statements
if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkills);}; 
// for loops and functions
//Variables 
function PersonalInfo(){
//name and role
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role );
$("#header").prepend(formattedRole);
// welcome message
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
$("#header").append(formattedWelcome);
//contacts 
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location); 
$("#topContacts").append(formattedLocation);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.Email);
$("#topContacts").append(formattedEmail);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
//Picture
$("#header").prepend(formattedPic);
};
PersonalInfo();

function displayWork(){
	for(job in work.jobs)
	{
		$("#workExperience").append(HTMLworkStart);
		var emp = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var title = HTMLworkTitle.replace("%data%",work.jobs[job].title);	
		var formattedEmployerTitle = emp + title ;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedWorklocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedWorklocation);
		var formattedWorkdates = HTMLworkDates.replace("%data%",work.jobs[job].date);
		$(".work-entry:last").append(formattedWorkdates);
		var formattedWorkdesc = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkdesc);
	}		};	
displayWork();	

projects.display = function (){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		//For project image	
		/*if(projects.projects[projects].images.length > 0){
			for(image in projects.projects[project].images)
			{
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$("#.project- entry:last").append(formattedImage);
			}
		}*/
	}};
projects.display();

function displayEducation(){
	for(edu in education.schools)
	{
		$("#education").append(HTMLschoolStart);
		var SchoolName = HTMLschoolName.replace("%data%",education.schools[edu].name);
		var SchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[edu].degree);
		var formattedNameDegree = SchoolName + SchoolDegree;
		$(".education-entry:last").append(formattedNameDegree);			
		//$(".education-entry:last").append(formattedSchoolDegree);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[edu].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[edu].gradutated);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[edu].major);
		$(".education-entry:last").append(formattedSchoolMajor);
	}		};	
	displayEducation();
function inName(name){
	name = bio.name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] +" " + name[1];
	}
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

