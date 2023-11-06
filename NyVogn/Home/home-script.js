const supabaseUrl = 'https://wawlipofhliyhfyexijh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indhd2xpcG9maGxpeWhmeWV4aWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcxMDMxMTUsImV4cCI6MjAxMjY3OTExNX0.yxQ1aLlYN7ia6ceBYoFR9jQmMn9rxHJXH9d8lYOzWm4';

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

const form = document.getElementById('filter-form');
const resultsContainer = document.getElementById('filtered-results');
const budgetInput = document.getElementById('budget');
const budgetValue = document.getElementById('budget-value');

// Update the displayed budget value as the slider is adjusted
budgetInput.addEventListener('input', (e) => {
    budgetValue.textContent = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const typeOptions = form.elements['type'];
    const selectedTypes = Array.from(typeOptions).filter(option => option.selected).map(option => option.value);
    const drivlinje = form.elements['drivlinje'].value;
    const budget = parseInt(form.elements['budget'].value);

    const query = supabase.from('NyVogn').select('*');

    if (selectedTypes.length > 0) {
        // Filter by selected types
        query.in('Type', selectedTypes);
    }

    if (drivlinje) {
        query.eq('Drivlinje', drivlinje);
    }

    query.lte('Pris', budget);

    const { data, error } = await query;

    if (error) {
        console.error('Error fetching data:', error);
    } else {
        // Clear previous results
        resultsContainer.innerHTML = '';

        // Display filtered data in a structured format
        data.forEach((item) => {
            const card = document.createElement('div');
            card.className = 'card';

            const modelName = document.createElement('div');
            modelName.className = 'model-name';
            modelName.textContent = item['Model name'];

            const carImage = document.createElement('img');
            carImage.className = 'car-image';
            carImage.src = item['Image URL'];

            card.appendChild(modelName);
            card.appendChild(carImage);
            resultsContainer.appendChild(card);
        });
    }
});