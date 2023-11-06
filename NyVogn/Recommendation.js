    // Get the data parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const dataParam = urlParams.get('data');

    if (dataParam) {
        // Parse the JSON data
        const data = JSON.parse(dataParam);

        // Update the page content with the data
        const resultsContainer = document.getElementById('filtered-results2');

        // Example: Display data as a list
        data.forEach((car) => {
            const listItem = document.createElement('div');
            listItem.textContent = car['Model'];
            resultsContainer.appendChild(listItem);
        });
    }
