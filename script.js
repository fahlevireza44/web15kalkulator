// Functions for conversions
function kmToMiles(km) {
    return (km * 0.621371).toFixed(2);
}

function cToF(celsius) {
    return ((celsius * 9 / 5) + 32).toFixed(2);
}

function kgToLb(kg) {
    return (kg * 2.20462).toFixed(2);
}

function lToGal(liters) {
    return (liters * 0.264172).toFixed(2);
}

// Function to update the placeholder dynamically
function updatePlaceholder() {
    const unitType = document.getElementById("unit-type").value;
    const input = document.getElementById("input-value");

    switch (unitType) {
        case "kmToMiles":
            input.placeholder = "Enter kilometers";
            break;
        case "cToF":
            input.placeholder = "Enter Celsius";
            break;
        case "kgToLb":
            input.placeholder = "Enter kilograms";
            break;
        case "lToGal":
            input.placeholder = "Enter liters";
            break;
    }
}

// Function to perform the conversion
function convert() {
    const unitType = document.getElementById("unit-type").value;
    const inputValue = parseFloat(document.getElementById("input-value").value);
    const resultDiv = document.getElementById("result");

    if (isNaN(inputValue)) {
        resultDiv.textContent = "Please enter a valid number!";
        return;
    }

    let result;
    switch (unitType) {
        case "kmToMiles":
            result = `${inputValue} km = ${kmToMiles(inputValue)} miles`;
            break;
        case "cToF":
            result = `${inputValue} °C = ${cToF(inputValue)} °F`;
            break;
        case "kgToLb":
            result = `${inputValue} kg = ${kgToLb(inputValue)} lbs`;
            break;
        case "lToGal":
            result = `${inputValue} liters = ${lToGal(inputValue)} gallons`;
            break;
    }

    resultDiv.textContent = result;
}