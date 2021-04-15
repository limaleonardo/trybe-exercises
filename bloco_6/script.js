const regionSelector = document.getElementById("region");
const regions = [
    "AC",
    "AL",
    "AM",
    "AP",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RO",
    "RS",
    "RR",
    "SC",
    "SE",
    "SP",
    "TO"
  ];
function createRegions() {
   for (let index = 0; index < regions.length; index += 1) {
    const region = document.createElement('option');
    region.innerText = regions[index];
    regionSelector.appendChild(region); 
  }
}

createRegions();