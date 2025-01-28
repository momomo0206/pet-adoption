async function start() {
  const weatherPromise = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&models=jma_seamless");
  const weatherData = await weatherPromise.json();
  const ourTemperature = weatherData.hourly.temperature_2m[0];

  document.querySelector("#temperature-output").textContent = ourTemperature;
}

start();