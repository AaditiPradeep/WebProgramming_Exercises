// a) Using getElementById
function updateTitle() {
    let titleElement = document.getElementById('h1');
    titleElement.textContent = "Updated Title";
}

// b) Using getElementsByName
function handleNameElements() {
    // Set username input value
    let usernameInput = document.getElementsByName('username')[0];
    usernameInput.value = "John Doe";
    
    // Get selected gender radio button value
    let genderRadios = document.getElementsByName('gender');
    for(let radio of genderRadios) {
        if(radio.checked) {
            console.log("Selected gender:", radio.value);
        }
    }
}

// c) Using getElementsByTagName
function handleTagElements() {
    // Count p elements
    let pElements = document.getElementsByTagName('p');
    console.log("Total number of <p> elements:", pElements.length);
    
    // Get li elements within ul and print their text
    let ulElement = document.getElementsByTagName('ul')[0];
    let liElements = ulElement.getElementsByTagName('li');
    for(let li of liElements) {
        console.log("List item text:", li.textContent);
    }
}

// d) Using getElementsByClassName
function updateInputFields() {
    let inputFields = document.getElementsByClassName('input-field');
    for(let input of inputFields) {
        input.style.backgroundColor = 'lightblue';
    }
}

// e) Using querySelector
function updateInfoElements() {
    // Update first info paragraph
    let firstInfo = document.querySelector('p.info');
    firstInfo.textContent = "This is the first info paragraph";
    
    // Check first gender radio programmatically
    let firstGenderRadio = document.querySelector('input[name="gender"]');
    firstGenderRadio.checked = true;
}

// f) Using querySelectorAll
function handleMultipleElements() {
    // Print text of all info paragraphs
    let infoParagraphs = document.querySelectorAll('p.info');
    infoParagraphs.forEach(p => {
        console.log("Info paragraph text:", p.textContent);
    });
    
    // Check all hobby checkboxes and print values
    let hobbyCheckboxes = document.querySelectorAll('.hobby');
    hobbyCheckboxes.forEach(checkbox => {
        checkbox.checked = true;
        console.log("Checked hobby:", checkbox.value);
    });
}

// Function to run all examples
function runAllExamples() {
    updateTitle();
    handleNameElements();
    handleTagElements();
    updateInputFields();
    updateInfoElements();
    handleMultipleElements();
}

// Run all examples when page loads
window.onload = runAllExamples;