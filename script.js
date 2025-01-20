const heading = "Software Developer";

const headingPara = document.querySelector("#heading-para");
const projectTechStacks = document.querySelector(".project-techstacks");

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
  }, { threshold: 0.2 }); 

  animateElements.forEach(element => observer.observe(element));
});

const tech = "Kotlin, Jetpack Compose, MongoDB"
const techstacksArray = tech.split(", ");
techstacksArray.forEach( (skill) => {
    let skillDiv = document.createElement("div");
    skillDiv.classList.add("techstacks");
    skillDiv.textContent = skill; 
    projectTechStacks.appendChild(skillDiv);
});


