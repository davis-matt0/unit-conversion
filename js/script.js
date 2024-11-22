const convertBtn = document.querySelector(".convert-btn");
const conversionBox = document.querySelector(".conversion-box");
let lengthResult = document.getElementById("length-result");
let volumeResult = document.getElementById("volume-result");
let massResult = document.getElementById("mass-result");

convertBtn.addEventListener("click", function () {
  let input = document.getElementById("input-field").value;
  input = Number(input);

  lengthResult.textContent = `${input} meters = ${(input * 3.281).toFixed(
    3
  )} feet | ${input} feet = ${(input / 3.281).toFixed(3)} meters`;

  volumeResult.textContent = `${input} liters = ${(input * 0.264).toFixed(
    3
  )} gallons | ${input} gallons = ${(input / 0.264).toFixed(3)} liters`;

  massResult.textContent = `${input} kilograms = ${(input * 2.204).toFixed(
    3
  )} pounds | ${input} pounds = ${(input / 2.204).toFixed(3)} kilograms`;
});
