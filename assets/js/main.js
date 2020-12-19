var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";

  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;

  // Change navbar shadow on scroll
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.boxShadow = "0 1px 2px 0 rgba(0,0,0,0.16),0 2px 5px 0 rgba(0,0,0,0.12)";
  } else {
    document.getElementById("navbar").style.boxShadow = "none";
  }
}