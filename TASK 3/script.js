function convertTemp() {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  const result = document.getElementById("result");

  if (isNaN(temp)) {
    result.innerText = "❌ Enter a number";
    return;
  }

  let converted;

  // Convert input to Celsius first
  if (from === "c") converted = temp;
  else if (from === "f") converted = (temp - 32) * 5/9;
  else if (from === "k") converted = temp - 273.15;

  // Convert Celsius to target
  if (to === "c") converted = converted;
  else if (to === "f") converted = (converted * 9/5) + 32;
  else if (to === "k") converted = converted + 273.15;

  result.innerText = converted.toFixed(2) + " °" + to.toUpperCase();
}
