const template = document.querySelector("#pet-card-template");
const wrapper = document.createDocumentFragment();

async function start() {
  const weatherPromise = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&models=jma_seamless");
  const weatherData = await weatherPromise.json();
  const ourTemperature = weatherData.hourly.temperature_2m[0];

  document.querySelector("#temperature-output").textContent = ourTemperature;
}

start();

async function petsArea() {
  const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json");
  const petsData = await petsPromise.json();
  petsData.forEach(pet => {
    const clone = template.content.cloneNode(true);

    clone.querySelector("h3").textContent = pet.name;

    wrapper.appendChild(clone);
  })
  document.querySelector(".list-of-pets").appendChild(wrapper);
}

petsArea();