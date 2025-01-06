const heading = "I turn Coffee into Code.";

const headingPara = document.querySelector("#heading-para");

function pause(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typeHeading() {
  for (let i = 0; i < heading.length; i++) {
    headingPara.textContent += heading[i];
    await pause(100);
  }
}
typeHeading();
