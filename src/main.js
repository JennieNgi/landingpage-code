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
const skillsArrowList = document.querySelectorAll(".skills_arrow");


function onClick(e){
  if (e.target.parentNode.nextSibling.nextSibling.style.display !== "block"){
    e.target.parentNode.nextSibling.nextSibling.style.display = "block";
    e.target.style.transform = "rotate(-180deg)";
  }else{
    e.target.parentNode.nextSibling.nextSibling.style.display = "none";
    e.target.style.transform = "rotate(360deg)";
  }
}

for (let arrow of skillsArrowList){
  arrow.addEventListener('click', onClick);
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
