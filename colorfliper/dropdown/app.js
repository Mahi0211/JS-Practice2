// // Array of values for the dropdown
const values = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

// // Get the dropdown element
// const dropdown = document.getElementById('dropdown');

// // Function to populate the dropdown with values
// function populateDropdown(array) {
//     // Clear existing options
//     dropdown.innerHTML = '';

//     // Create and add options to the dropdown
//     array.forEach(value => {
//         let option = document.createElement('option');
//         option.text = value;
//         dropdown.add(option);
//     });
// }

// // Call the function to populate the dropdown with values from the array
// populateDropdown(values);


values.forEach( value => {
    const option = document.createElement('option')
    option.textContent = value
    option.value = value
    document.querySelector('#dropdown').appendChild(option)
})