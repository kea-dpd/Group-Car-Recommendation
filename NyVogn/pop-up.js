
// Get references to the modal and close button
const modal = document.getElementById('initialModal');
const closeModal = document.getElementById('closeModal');

// Function to open the modal
function openModal() {
modal.style.display = 'block';
}

// Function to close the modal
function closeTheModal() {
modal.style.display = 'none';
}

// Event listener to close the modal when the close button is clicked
closeModal.addEventListener('click', closeTheModal);

// Open the modal automatically when the page loads
window.addEventListener('load', openModal);

document.querySelector(".close-button").addEventListener('click', closeTheModal);

// Add an event listener to the "Answer Now" button to open the new page pop-up
const answerNowButton = document.getElementById('answerNowButton');
answerNowButton.addEventListener('click', openstep1);


const step1Modal = document.getElementById('step1');
const step2Modal = document.getElementById('step2');
const step3Modal = document.getElementById('step3');
const step4Modal = document.getElementById('step4');

// Function to open the new page pop-up
function openstep1() {
    modal.style.display = 'none';

    const closeStep1 = document.getElementById('closeStep1');
    const nextButton1 = document.getElementById('nextButton1');

    function nextStep1(e) {
        e.preventDefault();
        openstep2()
        step1Modal.style.display = 'none'
    }

    function closePopUp() {
        step1Modal.style.display = 'none';
    }

    closeStep1.addEventListener('click', closePopUp);

    nextButton1.addEventListener('click', nextStep1);

    // Open the new page modal
    step1Modal.style.display = 'block';
}


// Function to open the new page pop-up
function openstep2() {
    step1Modal.style.display = 'none';
    // Get references to the new page modal and close button
    const closeStep2 = document.getElementById('closeStep2');
    const previousButton2 = document.getElementById('previousButton2');
    const nextButton2 = document.getElementById('nextButton2');

    function nextStep2(e) {
        e.preventDefault();
        openstep3()
        step1Modal.style.display = 'none'
    }

    // Function to close the new page modal
    function closeNewPageModal() {
        step2Modal.style.display = 'none';
    }

    // Function to close the new page modal
    function PreviousStep2(e) {
        e.preventDefault();
        openstep1()
        step2Modal.style.display = 'none'
    }

    // Event listener to close the new page modal when the close button is clicked
    closeStep2.addEventListener('click', closeNewPageModal);

    previousButton2.addEventListener('click', PreviousStep2);
    nextButton2.addEventListener('click', nextStep2);

    // Open the new page modal
    step2Modal.style.display = 'block';
}


// Function to open the new page pop-up
function openstep3() {
    step2Modal.style.display = 'none';
    // Get references to the new page modal and close button
    const closeStep3 = document.getElementById('closeStep3');
    const previousButton3 = document.getElementById('previousButton3');
    const nextButton3 = document.getElementById('nextButton3');

    function nextStep3(e) {
        e.preventDefault();
        openstep4()
        step1Modal.style.display = 'none'
    }

    // Function to close the new page modal
    function closeNewPageModal() {
        step3Modal.style.display = 'none';
    }

    // Function to close the new page modal
    function PreviousStep3(e) {
        e.preventDefault();
        openstep2()
        step3Modal.style.display = 'none'
    }

    // Event listener to close the new page modal when the close button is clicked
    closeStep3.addEventListener('click', closeNewPageModal);

    previousButton3.addEventListener('click', PreviousStep3);
    nextButton3.addEventListener('click', nextStep3);

    // Open the new page modal
    step3Modal.style.display = 'block';
}


// Function to open the new page pop-up
function openstep4() {
    step3Modal.style.display = 'none';
    // Get references to the new page modal and close button
    const closeStep4 = document.getElementById('closeStep4');
    const previousButton4 = document.getElementById('previousButton4');

    // Function to close the new page modal
    function closeNewPageModal() {
        step4Modal.style.display = 'none';
    }

    // Function to close the new page modal
    function PreviousStep4(e) {
        e.preventDefault();
        openstep3()
        step4Modal.style.display = 'none'
    }

    // Event listener to close the new page modal when the close button is clicked
    closeStep4.addEventListener('click', closeNewPageModal);

    previousButton4.addEventListener('click', PreviousStep4);

    // Open the new page modal
    step4Modal.style.display = 'block';
}

$( ".grayed" ).click(function() {
    $(this).toggleClass('active');
});

const form = document.getElementById('multiStepForm');
const resultsContainer2 = document.getElementById('filtered-results2');

form.addEventListener('submit', async (e) => {
    closeNewPageModal()
    e.preventDefault();

    const type = form.type.value;
    const drivlinje = form.drivlinje.value;
    //const budget = parseInt(form.budget.value);

    const query = supabase.from('NyVogn').select('*');

    if (type) {
        query.eq('Type', type);
    }

    if (drivlinje) {
        query.eq('Drivlinje', drivlinje);
    }

    //query.lte('Pris', budget); // Use 'lte' to filter items with prices less than or equal to the budget.

    const { data, error } = await query;

    if (error) {
        console.error('Error fetching data:', error);
    } else {
        // Clear previous results
        resultsContainer2.innerHTML = '';

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
            resultsContainer2.appendChild(card);
        });
    }
});






