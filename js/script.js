const navbar = document.querySelector('.navbar')
const services = document.querySelector('.services')
const pos = services.getBoundingClientRect()
const x = pos.left
const y = pos.top
document.addEventListener('scroll', function(){
  if (window.pageYOffset >= y){
    // add the class scroll to the navbar
    navbar.classList.add('scroll')
  } else {
    navbar.classList.remove('scroll')
  }
})