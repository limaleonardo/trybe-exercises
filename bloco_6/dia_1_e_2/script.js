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
  "TO",
];
function createRegions() {
  for (let index = 0; index < regions.length; index += 1) {
    const region = document.createElement("option");
    region.innerText = regions[index];
    regionSelector.appendChild(region);
  }
}

function dateChecker() {
  let inputDate = document.getElementById("start-date").value;
  let date = inputDate.split("/");
  let day = parseInt(date[0]);
  let month = parseInt(date[1]);
  let year = parseInt(date[2]);

  if (day < 0 || day > 31) {
    window.alert("Dia Inválido!");
    return;
  }

  if (month < 0 || month > 12) {
    window.alert("Mês Inválido!");
    return;
  }

  if (year < 0) {
    window.alert("Ano Inválido!");
    return;
  }

  return true;
}

function createResume() {
  const resumeForm = document.getElementById("resume-form");
  const inputData = new FormData(resumeForm);
  const resume = document.createElement("div");
  resume.id = "resume";
  for (const [key, value] of inputData) {
    const singleField = document.createElement("p");
    singleField.innerText = `${key}: ${value}`;
    resume.appendChild(singleField);
  }
  return resume;
}

function resetAll() {
  const resume = document.getElementById("resume");
  console.log(resume);
  if (resume.innerHTML != "") {
    resume.innerHTML = "";
  }
}

function formHandler(event) {
  event.preventDefault();
  if (dateChecker() === true) {
    document.body.appendChild(createResume());
  }
}

createRegions();

document.getElementById("submit").addEventListener("click", formHandler);
document.getElementById("reset").addEventListener("click", resetAll);
