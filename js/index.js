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

  var nav = document.getElementById("nav");
var btns = nav.getElementsByClassName("");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}



  