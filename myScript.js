function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

window.addEventListener("resize", function() {
  if (window.innerWidth <= 750) {
    document.querySelector(".navlogo").style.display = "none";
    document.querySelector(".navlinks").style.display = "none";
    document.querySelector(".topnav").style.display = "block";
  } else {
    document.querySelector(".navlogo").style.display = "block";
    document.querySelector(".navlinks").style.display = "block";
    document.querySelector(".topnav").style.display = "none";
  }
});

if (window.innerWidth <= 750) {
  document.querySelector(".topnav").style.display = "block";
}