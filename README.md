# GitHub Projects Intro

 <img width="100" align="left" alt="image" src="https://user-images.githubusercontent.com/155492/219313640-1328aefb-7695-41d2-bbef-5c5ffe6ab079.png">

This repo contains some issues which you can work as exercises. It will take you through som GitHub projects and -issues gymnastics.

You start by generating at new repo under your own profile (or where ever you wnat it), using this one as a template. 

<a href="https://github.com/kea-dev/planetscale/generate"><img width="198" alt="image" src="https://user-images.githubusercontent.com/155492/228839581-5ca9dddd-a39f-4754-811c-92f092517734.png"></a>

> [**_Code_ >> _Use this template_ >> _Create new repository_**](/../../generate)

There's a workflow that starts when you generate your repository - it copies the template issues over to your own repo - It may take 15-20 seconds to finish - You can monitor it in the __Actions__ tab.

## If you need help. 

1. Join the [discussion on github/kea-dev](https://github.com/orgs/kea-dev/discussions) and then mention me ([@lakruzz](https://github.com/lakruzz)) in your post.


// Define the current step
let currentStep = 1;

// Get references to the "Previous" and "Next" buttons
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
const submitButton = document.getElementById('submitButton');

// Function to update the status bar and switch steps
function updateStatusAndStep(step) {
    // Remove the "active" class from all steps
    const steps = document.querySelectorAll('.step');
    steps.forEach((step) => {
        step.classList.remove('active');
    });

    // Add the "active" class to the current step
    steps[step - 1].classList.add('active');


    // Show or hide the "Previous" and "Next" buttons based on the current step
    if (step === 1) {
        previousButton.style.display = 'none';
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    } else if (step === 2) {
        openstep2()
        previousButton2.style.display = 'inline-block';
        nextButton2.style.display = 'none';
        submitButton.style.display = 'none';
    } else if (step === 4) {
        previousButton.style.display = 'inline-block';
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    } else {
        previousButton.style.display = 'inline-block';
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }

    // Handle the content for each step here
    // You can update the content based on the current step
}

// Function to go to the previous step
function goToPreviousStep() {
    if (currentStep === 2) {
        currentStep = 1;
        updateStatusAndStep(currentStep);
    } else if (currentStep === 3) {
        currentStep = 2;
        updateStatusAndStep(currentStep);
    }
}

// Function to go to the next step
function goToNextStep() {
    if (currentStep < 4) {
        currentStep++;
        updateStatusAndStep(currentStep);
    }
}

// Add event listeners to the "Previous" and "Next" buttons
previousButton.addEventListener('click', goToPreviousStep);
nextButton.addEventListener('click', goToNextStep);

previousButton2.addEventListener('click', goToPreviousStep);
nextButton2.addEventListener('click', goToNextStep);

// Initialize the status bar and content for the first step
updateStatusAndStep(currentStep);