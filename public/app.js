"use strict";
// Implement the RainCountry class
class RainyCountry {
    constructor(name, rainLevel) {
        this.name = name;
        this.rainLevel = rainLevel;
    }
    getInfo(element) {
        const header = document.createElement('h2');
        header.textContent = `${this.name}`;
        element.appendChild(header);
        element.innerHTML += `${this.name} has a rain level of ${this.rainLevel.toLocaleString()} inches.`;
        return element;
    }
}
// Implement the SnowyCountry class
class SnowyCountry {
    constructor(name, snowLevel) {
        this.name = name;
        this.snowLevel = snowLevel;
    }
    getInfo(element) {
        const header = document.createElement('h2');
        header.textContent = `${this.name}`;
        element.appendChild(header);
        element.innerHTML += `${this.name} has a snow level of ${this.snowLevel.toLocaleString()} inches.`;
        return element;
    }
}
// Implement the IslandCountry class
class IslandCountry {
    constructor(name, landSize) {
        this.name = name;
        this.landSize = landSize;
    }
    getInfo(element) {
        const header = document.createElement('h2');
        header.textContent = `${this.name}`;
        element.appendChild(header);
        element.innerHTML += `${this.name} has a land size of ${this.landSize.toLocaleString()} square miles.`;
        return element;
    }
}
// Sample data
const countries = [
    new RainyCountry("United States", 28),
    new SnowyCountry("Norway", 20),
    new RainyCountry("Brazil", 40),
    new IslandCountry("Japan", 145937),
    new SnowyCountry("Sweden", 30),
    new IslandCountry("Australia", 2968464)
];
// Filter and display logic
window.onload = () => {
    const outputElement = document.getElementById('output');
    const totalInfoElement = document.getElementById('totalInfo');
    const climateFilter = document.getElementById('climateFilter');
    // Function to calculate totals for each climate type
    function calculateTotalData() {
        let totalRainLevel = 0;
        let totalSnowLevel = 0;
        let totalLandSize = 0;
        // Filter countries based on selected climate type
        const selectedClimate = climateFilter ? climateFilter.value : '';
        let filteredCountries = [];
        // Filter countries and calculate totals based on selected climate
        if (selectedClimate === "rainy") {
            filteredCountries = countries.filter(country => country instanceof RainyCountry);
            totalRainLevel = filteredCountries.reduce((total, country) => total + country.rainLevel, 0);
            totalInfoElement.innerHTML = `Total rain level: ${totalRainLevel.toLocaleString()} inches.`;
        }
        else if (selectedClimate === "snowy") {
            filteredCountries = countries.filter(country => country instanceof SnowyCountry);
            totalSnowLevel = filteredCountries.reduce((total, country) => total + country.snowLevel, 0);
            totalInfoElement.innerHTML = `Total snow level: ${totalSnowLevel.toLocaleString()} inches.`;
        }
        else if (selectedClimate === "land") {
            filteredCountries = countries.filter(country => country instanceof IslandCountry);
            totalLandSize = filteredCountries.reduce((total, country) => total + country.landSize, 0);
            totalInfoElement.innerHTML = `Total land size: ${totalLandSize.toLocaleString()} square miles.`;
        }
        else {
            filteredCountries = countries; // For "all" countries
            totalInfoElement.innerHTML = ""; // Reset the total info when "All Countries" is selected
        }
        // Hide totalInfo when "All Countries" is selected
        if (selectedClimate === 'all') {
            totalInfoElement.style.display = 'none'; // Hide the total info box
        }
        else {
            totalInfoElement.style.display = 'block'; // Show the total info box
        }
        // Clear previous output and populate with filtered countries
        if (outputElement) {
            outputElement.innerHTML = ""; // Clear previous content
            filteredCountries.forEach(country => {
                const infoElement = document.createElement('div');
                outputElement.appendChild(country.getInfo(infoElement));
            });
        }
    }
    // Event listener for the climate filter dropdown
    climateFilter === null || climateFilter === void 0 ? void 0 : climateFilter.addEventListener('change', calculateTotalData);
    // Initial calculation when page loads
    calculateTotalData();
};
