const heading = "Software Developer";

const headingPara = document.querySelector("#heading-para");
const animatedElements = document.querySelectorAll(".animate");


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


function pause(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typeHeading() {
  await pause(700);
  for (let i = 0; i < heading.length; i++) {
    if(i==0) headingPara.textContent ="";
    headingPara.textContent += heading[i];
    await pause(100);
  }
}
typeHeading();

document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target); 
          }
      });
  }, { threshold: 0.1 }); 

  animateElements.forEach(element => observer.observe(element));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}, {
  threshold: 0.1,
});

animatedElements.forEach((el) => observer.observe(el));

