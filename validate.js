function validate(event) {
  const latitude = document.querySelector("#latitude");
  const longitude = document.querySelector("#longitude");

  if (!(latitude.value >= -90 && latitude.value <= 90)) {
    errCode(latitude, "must be a valid Latitude(-90 to 90)");
    event.preventDefault();
  } else {
    const small = outputForm.querySelector("small");
    small.innerText = "";
  }
  if (!(longitude.value >= -180 && longitude.value <= 180)) {
    errCode(longitude, "must be a valid Longitude(-180 to 180)");
    event.preventDefault();
  } else {
    const small = outputForm.querySelector("small");
    small.innerText = "";
  }
}
function errCode(input, message) {
  const outputForm = input.parentElement;
  outputForm.className = "outputForm error";
  const small = outputForm.querySelector("small");
  small.innerText = message;
}
// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
