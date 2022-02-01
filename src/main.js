import "./../sass/styles.scss";


/*==================== MENU SHOW HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');


if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


/*==================== SKILLS ====================*/
const skillsFrontend = document.getElementById('skills_frontend');
const skillsBackend = document.getElementById('skills_backend');
const skillsOther = document.getElementById('skills_other');
const frontendArrow = document.getElementById('frontend_arrow');
const backendArrow = document.getElementById('backend_arrow');
const otherArrow = document.getElementById('other_arrow');

if(frontendArrow){
  frontendArrow.addEventListener('click', () => {
      skillsFrontend.classList.add('skills_open');
      skillsBackend.classList.remove('skills_open'); 
      skillsOther.classList.remove('skills_open'); 
  });
}


if(backendArrow){
  backendArrow.addEventListener('click', () => {
    skillsBackend.classList.add('skills_open');
    skillsFrontend.classList.remove('skills_open');
    skillsOther.classList.remove('skills_open');
  });
}

if(otherArrow){
  otherArrow.addEventListener('click', () => {
    skillsOther.classList.add('skills_open');
    skillsBackend.classList.remove('skills_open');
    skillsFrontend.classList.remove('skills_open');
  });
}
      
      
/*==================== QUALIFICATION ====================*/
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll ('[data-content]');

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active');
        });
        target.classList.add('qualification_active');

        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active');
        });
        tab.classList.add('qualification_active');
    });

});



//active nav link
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav_menu ul li a");
window.onscroll = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

let cards = document.querySelectorAll('.card');
for(let i = 0; i < cards.length; i++){
  cards[i].addEventListener( 'click', function() {
  cards[i].classList.toggle('is-flipped');
});
}
