const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const resultDiv = document.getElementById("result");
const convertButton = document.getElementById("convertButton");

function convertTemperature() {
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    if (isNaN(temperature)) {
        resultDiv.textContent = "Please enter a valid temperature.";
        return;
    }

    if (unit === "celsius") {
        const fahrenheit = (temperature * 9/5) + 32;
        resultDiv.textContent = `${temperature} Celsius is ${fahrenheit.toFixed(2)} Fahrenheit.`;
    } else {
        const celsius = (temperature - 32) * 5/9;
        resultDiv.textContent = `${temperature} Fahrenheit is ${celsius.toFixed(2)} Celsius.`;
    }
}

function clearResult() {
    resultDiv.textContent = "";
}

function handleEnterKey(event) {
    if (event.key === "Enter") {
        convertTemperature();
    }
}

// Add event listeners
convertButton.addEventListener("click", convertTemperature);
temperatureInput.addEventListener("input", clearResult);
unitSelect.addEventListener("change", clearResult);
temperatureInput.addEventListener("keyup", handleEnterKey);

// Initialize with a default conversion
convertTemperature();
