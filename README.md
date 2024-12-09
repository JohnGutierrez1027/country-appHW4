COUNTRY DATA MANAGER

Description:
The Country Data Manager is a web application built with TypeScript, HTML, and CSS to manage and display country data based on climate conditions. The app allows users to filter countries by specific climate types (Rainy, Snowy, or Island) and displays relevant statistics, such as rain levels, snow levels, or land sizes. The data is dynamically updated based on user input from a dropdown filter.

Features:
* Filter countries by climate types (Rainy, Snowy, Island, or All countries).
* Display detailed information for each country, such as rain levels, snow levels, or land sizes.
* Totals are calculated and displayed for each filter type, except when "All Countries" is selected.
* Responsive design that adapts the layout for different screen sizes (desktop, tablet, mobile).

Technologies Used:
* TypeScript: For object-oriented programming and type safety.
* HTML: For structuring the content.
* CSS: For styling and layout, including a responsive design.
* JavaScript (compiled from TypeScript): For the interactivity and filtering logic.

File Structure:
/Country-app
├── app.ts               # TypeScript logic for filtering countries and displaying data
├── index.html           # Main HTML structure
├── css/
│   └── styles.css       # CSS styles for layout and responsiveness
└── dist/
    └── app.js           # Compiled JavaScript (from TypeScript)

How It Works:
* Interface (ICountry): The app defines a common interface ICountry that ensures each country class implements the getInfo method to return data about the country.

Country Classes:
* RainyCountry: Represents a country with a certain rain level.
* SnowyCountry: Represents a country with a certain snow level.
* IslandCountry: Represents an island country with a certain land size.

Dynamic Filtering:
* When a user selects a climate type from the dropdown, the list of countries is filtered accordingly.
* Totals are dynamically updated based on the selected filter (Rainy, Snowy, or Island).
* If "All Countries" is selected, no totals are displayed.

Display Logic:
* When the page loads, the calculateTotalData function is called, which fetches the filtered countries, calculates the totals, and displays them.
* It also hides or shows the total information depending on the selected filter.

Responsive Layout:
The application layout adjusts for different screen sizes to ensure usability across devices.
Example
* All Countries: Displays information for all countries without showing totals.
* Rainy Countries: Shows countries with a rain level and the total rain level for those countries.
* Snowy Countries: Shows countries with snow levels and the total snow level for those countries.
* Land Countries: Shows countries with land sizes and the total land size for those countries.