new TypeIt(".profile-intro", {
    strings: ["Hi, I am ","Aman Shukla","A Web Developer."],
    speed: 100,
    waitUntilVisible: true,
    lifeLike:true,
    cursor:false,
    loop:false
  }).go();

  var year = document.getElementById("year");
  var currentYear = new Date().getFullYear();
  year.innerHTML=currentYear;



  