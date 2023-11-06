
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







// Get references to the checkboxes and containers
const gasCheckbox = document.getElementById('gasCheckbox');
const dieselCheckbox = document.getElementById('dieselCheckbox');
const hybridCheckbox = document.getElementById('hybridCheckbox');
const electricCheckbox = document.getElementById('electricCheckbox');
const rangeContainer = document.querySelector('.range-container');
const consumptionContainer = document.querySelector('.consumption-container');

// Add event listeners to the checkboxes
gasCheckbox.addEventListener('change', toggleContainers);
dieselCheckbox.addEventListener('change', toggleContainers);
hybridCheckbox.addEventListener('change', toggleContainers);
electricCheckbox.addEventListener('change', toggleContainers);

function toggleContainers() {
    // Check the state of the checkboxes and toggle container visibility
    if (electricCheckbox.checked) {
        rangeContainer.style.display = 'block';
    } else {
        rangeContainer.style.display = 'none';
    }

    if (gasCheckbox.checked || dieselCheckbox.checked || hybridCheckbox.checked) {
        consumptionContainer.style.display = 'block';
    } else {
        consumptionContainer.style.display = 'none';
    }
}

// Initial call to set initial visibility
toggleContainers();



const rangeInput = document.getElementById('range');
const rangeValue = document.getElementById('range-value');
const rangeInputField = document.getElementById('range-input');

// Update the displayed budget value as the slider is adjusted
rangeInput.addEventListener('input', (e) => {
    const value = e.target.value;
    rangeValue.textContent = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    rangeInputField.value = value;
});

rangeInputField.addEventListener('input', (e) => {
    const value = e.target.value;
    rangeValue.textContent = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    rangeInput.value = value;
});

const consumptionRangeInput = document.getElementById('consumption-range');
const consumptionRangeValue = document.getElementById('consumption-range-value');
const consumptionInputField = document.getElementById('consumption-input');

// Update the displayed budget value as the slider is adjusted
consumptionRangeInput.addEventListener('input', (e) => {
    const value = e.target.value;
    consumptionRangeValue.textContent = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    consumptionInputField.value = value;
});

consumptionInputField.addEventListener('input', (e) => {
    const value = e.target.value;
    consumptionRangeValue.textContent = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    consumptionRangeInput.value = value;
});


const budgetRangeInput = document.getElementById('budget-range');
const budgetRangeValue = document.getElementById('budget-range-value');
const budgetInputField = document.getElementById('budget-input');

// Update the displayed budget value as the slider is adjusted
budgetRangeInput.addEventListener('input', (e) => {
    const value = e.target.value;
    budgetRangeValue.textContent = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    budgetInputField.value = value;
});

budgetInputField.addEventListener('input', (e) => {
    const value = e.target.value;
    budgetRangeValue.textContent = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    budgetRangeInput.value = value;
});



$( ".grayed" ).click(function() {
    $(this).toggleClass('active');
});


const form = document.getElementById('multiStepForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const selectedTypes = Array.from(document.querySelectorAll('input[name="Type"]:checked')).map((checkbox) => checkbox.value);
    const selectedPropellants = Array.from(document.querySelectorAll('input[name="propellant"]:checked')).map((checkbox) => checkbox.value);
    const rangeValue = document.getElementById('range-input').value; // Get range value
    const consumptionValue = document.getElementById('consumption-input').value; // Get consumption value
    const budgetValue = document.getElementById('budget-input').value;

    // Check if either selectedTypes, selectedPropellants, rangeValue, or consumptionValue have values
    if (selectedTypes.length > 0 || selectedPropellants.length > 0 || rangeValue || consumptionValue || budgetValue) {
        const queryParams = [];

        if (selectedTypes.length > 0) {
            queryParams.push(`type=${selectedTypes.join(',')}`);
        }

        if (selectedPropellants.length > 0) {
            queryParams.push(`propellant=${selectedPropellants.join(',')}`);
        }

        if (rangeValue) {
            queryParams.push(`range=${rangeValue}`);
        }

        if (consumptionValue) {
            queryParams.push(`consumption=${consumptionValue}`);
        }

        if (budgetValue) {
            queryParams.push(`budget=${budgetValue}`);
        }

        const queryString = queryParams.join('&');
        const destinationURL = `Recommendation.html?${queryString}`;

        window.location.href = destinationURL;
    }
});






