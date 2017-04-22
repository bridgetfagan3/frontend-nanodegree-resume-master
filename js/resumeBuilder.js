var accento ="\u00F3";
var apostrophe="\u0027";

var bio = {

        name: "Bridget Fagan",
        role: "Web Developer",
        contacts: {
              email: "bridgetfagan3@gmail.com",
              github: "bridgetfagan3",
              twitter: "@Bri_Fagan",
              mobile: "847-867-0161",
              location: "Chicago, Illinois, USA",
        },
        biopic: "images/profilephoto.png",
        welcomeMessage: "Thanks for visiting my site, I look forward to collaborating with you on your next project!",
        skills: ["HTML", " CSS", " JavaScript", " Photoshop"],

        display: function() {

          var formattedName = HTMLheaderName.replace("%data%", bio.name);
          var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
          var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
          var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

          var formattedContactInfo = [];
            formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
            formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
            formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
            formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
            formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

          $("#topContacts, #footerContacts").prepend(formattedContactInfo);
          $("#header").prepend(formattedBioPic);
          $("#header").append(formattedWelcome);
          $("#header").prepend(formattedRole);
          $("#header").prepend(formattedName);
          $("#header").append(HTMLskillsStart);

            $.each(bio.skills, function(i) {

              $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
            });


        }

      };





var work = {

  jobs: [
      {
          employer: "Heart for Change/Colombian Ministry of Education",
          title: "English Teaching Fellow",
          location: "Riseralda, Colombia, South America",
          dates: "July 2015 - December 2016",
          description:  "Collaborating with the teachers of a Colombian public school, I developed lesson plans, implemented communicative" +
          " classroom activities with students,  and practice real-world English language conversations with the teachers.  In addition, I hosted a 2 hour" +
          " English conversation club once a week for students who had a greater interest in the language."
      },
      {
          employer: "Nukanti Foundation",
          title: "English Teacher/Volunteer",
          location: "Mistrat" + accento +", Colombia, South America",
          dates: "July 2014 - December 2014",
          description:  "I volunteered in a rural Colombian public school.  During this time, I participated in conversational activities within "+
          "the classroom, attended cultural events, hosted cultural exchange events, and collaborated in updating the English language curriculum."
      },

  ],

  display: function() {

    $.each(work.jobs, function(i) {

       $("#workExperience").append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
                var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
                var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
                var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
                var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

                var formattedEmployerWorkTitle = formattedEmployer + formattedworkTitle;

                $(".work-entry:last").append(formattedEmployerWorkTitle);
                $(".work-entry:last").append(formattedWorkLocation);
                $(".work-entry:last").append(formattedDatesWorked);
                $(".work-entry:last").append(formattedWorkDescription);


        });
    }

};




var education = {

    schools: [
        {
          name: "Northern Illinois University",
          dates: "2005-2010",
          degree: "B.A. Liberal Arts",
          majors: ["English Literature with Spanish minor"],
          location: "DeKalb, Illinois",
       },
       {
         name: "Teaching House CELTA: Cambridge University",
         dates: "July 2013",
         degree: "CELTA Teaching Certification",
         majors: ["English Language Teaching for Adults"],
         location: "Los Angeles, California",
       }
     ],

    onlineClasses: [
       {
         school: "Udacity",
         title: "Object-Oriented Javascript",
         dates: "March 2017",
         url: "http://www.udacity.com",
       },
       {
         school: "Udacity",
         title: "HTML5 Canvas",
         dates: "March 2017",
         url: "http://www.udacity.com",
       },
       {
         school: "Udacity",
         title: "JavaScript Basics",
         dates: "March 2017",
         url: "http://www.udacity.com",
       }
 ],

 display: function() {

   $.each(education.schools, function(i) {

        $("#education").append(HTMLschoolStart);


              var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
              var formattedDatesAttended = HTMLschoolDates.replace("%data%", education.schools[i].dates);
              var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
              var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);


              var educationnew = education.schools[i];


              $(".education-entry:last").append(formattedSchoolName + formattedDegree);
              $(".education-entry:last").append(formattedDatesAttended);
              $(".education-entry:last").append(formattedDegree);
              $(".education-entry:last").append(formattedLocation);

              $.each(educationnew.majors, function(maj) {

                $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors[maj]));
              });

      });

    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);

    $.each(education.onlineClasses, function(i) {


             var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[i].title);
             var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[i].school);
             var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[i].dates);
             var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineClasses[i].url);
             $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
             $(".education-entry:last").append(formattedOnlineDates);
             $(".education-entry:last").append(formattedUrl);
      });

    },
};




var projects = {

    projects: [
      {
        title: "Online Portfolio",
        dates: "February 2017",
        description: "Created an online portfolio of work as part of Udacity" + apostrophe + "s Front-End Web Developer Nanodegree.",
        images: ["images/portfolio.png"],
      },

      {
        title: "HTML5 Canvas Game",
        dates: "March 2014 - April 2014",
        description: "Created an online game using HTML5 as part of Udacity´s Front-End Web Developer Nanodegree.",
        images: ["images/frogger1.png"],
      }
  ],

  display: function() {
      $.each(projects.projects, function(i) {
              $("#projects").append(HTMLprojectStart);

               var projectsss = projects.projects[i];

                var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
                var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
                var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);


                $(".project-entry:last").append(formattedProjectTitle);
                $(".project-entry:last").append(formattedProjectDates);
                $(".project-entry:last").append(formattedProjectDescription);

         $.each(projectsss.images, function(img) {
              var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
              $(".project-entry:last").append(formattedImage);
           });
         });
    }


};

bio.display();
work.display();
education.display();
projects.display();


$("#mapDiv").append(googleMap);
