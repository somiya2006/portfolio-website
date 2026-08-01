// Smooth Scroll Effect

document.querySelectorAll('nav a').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute('href'));

target.scrollIntoView({

behavior:'smooth'

});

});

});


// Fade Animation on Scroll

const cards=document.querySelectorAll('.card, .project');

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="0.8s";

observer.observe(card);

});