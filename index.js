/*** You will not need this file until Unit 5 ***/
/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleLightMode = () => {
    document.body.classList.toggle("light-mode");
    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleLightMode);

/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
const submitButton = document.getElementById('rsvp-button');

const addParticipant = (person) => {
  let newEntry = document.createElement('p');
  newEntry.textContent = person.name + " the " + person.characterClass + " has RSVP'd.";
  let container = document.querySelector('.rsvp-participants');
  container.appendChild(newEntry);
}

// OLD before 1-B code step 9
/* const addParticipant = (event) => {
    // Step 2: Write your code to manipulate the DOM here
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let characterClass = document.getElementById('characterClass').value;
    //console.log(name + " the " + characterClass + " has RSVP'd.");
    let newEntry = document.createElement('p');
    newEntry.textContent = name + " the " + characterClass + " has RSVP'd.";
    let container = document.querySelector('.rsvp-participants');
    container.appendChild(newEntry);
    event.preventDefault();
} */

// Step 3: Add a click event listener to the submit RSVP button here
// unit 7 removes submitButton.addEventListener('click', addParticipant);
//form.addEventListener('submit', addParticipant);


/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = () => {
  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;

  // Create the person object from the form inputs
  let person = {
    name: rsvpInputs[0].value,
    email: rsvpInputs[1].value,
    characterClass: rsvpInputs[2].value
  };

  // Loop through all inputs and check length
  for (let i = 0; i < rsvpInputs.length; i++) {
    if (rsvpInputs[i].value.length < 2) {
      containsErrors = true;
      rsvpInputs[i].classList.add('error');
    } else {
      rsvpInputs[i].classList.remove('error');
    }
  }

  // TODO: Inside loop, validate the value of each input
  // Email check now uses the object
  let email = document.getElementById('email');
  if (!person.email.includes('@')) {
    containsErrors = true;
    email.classList.add('error');
  } else {
    email.classList.remove('error');
  }
    
  // TODO: If no errors, call addParticipant() and clear fields
  // If no errors: add participant, show modal, clear fields
  if (containsErrors == false) {
    addParticipant(person);
    toggleModal(person);
    for (let i = 0; i < rsvpInputs.length; i++) {
      rsvpInputs[i].value = "";
    }
  }
}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
submitButton.addEventListener('click', validateForm);


/*** Scroll Animations ***
  
  Purpose:
  - Use this starter code to add scroll animations to your website.

  When To Modify:
  - [x] Project 8 (REQUIRED FEATURE)
  - [ ] Any time after
***/

// Step 1: Select all elements with the class 'revealable'.
let revealableContainers = document.querySelectorAll('.revealable');

// Step 2: Write function to reveal elements when they are in view.
const reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
        let current = revealableContainers[i];

        // Get current height of container and window
        let windowHeight = window.innerHeight;
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
        let revealDistance = parseInt(getComputedStyle(current).getPropertyValue('--reveal-distance'), 10);

        // If the container is within range, add the 'active' class to reveal
        if (topOfRevealableContainer < windowHeight - revealDistance) {
            current.classList.add('active');
        }
        // If the container is not within range, hide it by removing the 'active' class
        else { 
            current.classList.remove('active');
        }
    }
}

// Step 3: Whenever the user scrolls, check if any containers should be revealed
window.addEventListener('scroll', reveal);

// Stretch: Reduce Motion toggle
let reduceMotionButton = document.getElementById("reduce-motion-button");

const reduceMotion = () => {
    document.body.classList.toggle("reduce-motion");

    if (document.body.classList.contains("reduce-motion")) {
        reduceMotionButton.textContent = "Reduce Motion ON";
    } else {
        reduceMotionButton.textContent = "Reduce Motion OFF";
    }
}

reduceMotionButton.addEventListener("click", reduceMotion);


/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [x] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

// animation variables and animateImage() function
let rotateFactor = 0;
let modalImage = document.getElementById('modal-image');
let intervalId;
let timeoutId;

const animateImage = () => {
  if (rotateFactor === 0) {
    rotateFactor = -10;
  } else {
    rotateFactor = 0;
  }
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}

const closeModal = () => {
  document.getElementById('success-modal').style.display = 'none';
  clearInterval(intervalId);
  clearTimeout(timeoutId);
}


const toggleModal = (person) => {
  //let modal = 0; // TODO
  let modal = document.getElementById('success-modal');
  let modalContent = document.getElementById('modal-text');
    
  // TODO: Update modal display to flex 
  modal.style.display = 'flex';
  // Update modal text to personalized message
  modalContent.textContent = `Thanks for RSVPing, ${person.name} the ${person.characterClass}! Your seat in the party is reserved!`;

  // Wave the image every half second
  //let intervalId = setInterval(animateImage, 500);

  // Only animate if Reduce Motion is OFF
  if (!document.body.classList.contains('reduce-motion')) {
    intervalId = setInterval(animateImage, 500);
  }

  // Set modal timeout to 5 seconds
/*   setTimeout(() => {
    modal.style.display = 'none';
    clearInterval(intervalId);
  }, 5000);
} */
  timeoutId = setTimeout(closeModal, 5000);
}

// Stretch: close button
let closeModalButton = document.getElementById('close-modal-button');
closeModalButton.addEventListener('click', closeModal);

// TODO: animation variables and animateImage() function



