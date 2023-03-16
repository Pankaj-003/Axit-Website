  // sticky navigation bar
  window.addEventListener('scroll',function(){
    let navbar = document.getElementById('navlist');
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
});
// sticky navigation bar
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]
toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
})