var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  // Hide and show navbar
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;

  // Change navbar shadow on scroll
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.boxShadow = "0 1px 10px rgba(130,130,134,0.1)";
    document.getElementById("navbar").style.backgroundColor = "white";
  } else {
    document.getElementById("navbar").style.boxShadow = "none";
    document.getElementById("navbar").style.backgroundColor = "";
  }

  // Show "Go to top" button.
  var mybutton = document.getElementById("go-to-top-button");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Callback function for  "Go to top" button.
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}