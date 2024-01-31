// JavaScript function for the navigation bar
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

window.addEventListener("resize", function() {
  if (window.innerWidth <= 750){
    document.querySelector(".navbar").style.display = "none";
    document.querySelector(".topnav").style.display = "block";
  } else {
    document.querySelector(".navbar").style.display = "block";
    document.querySelector(".topnav").style.display = "none";
  }
});

let mobnavb; 
mobnavb = "👇";
document.getElementById("navburger").innerHTML = mobnavb;

