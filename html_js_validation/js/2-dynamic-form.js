
// deining a function to in-take the value of num 
function generateInputFields(num) {
    const inputContainer = document.getElementById('inputContainer');
    // clearing existing content
    inputContainer.innerHTML = '';

    //creating an element and appending in the parent inheritor
    for (let i =1; i <= num; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'field' + i;
        inputContainer.appendChild(input);
    }
}

// defining a function to validate the form
function validateForm(e) {
    const inputs = document.querySelectorAll('#inputContainer input');
    let isValid = true;

    inputs.forEach(input => {
        if (input.ariaValueMax.trim() === '') {
            isValid = false;
        }
    });

    // preventing the form submission
    if (!isValid) {
        e.preventDefault();
        alert('Please fill in all fields');
    }

}

// attaching an event listener for the new dropdown after embedding new elements
document.getElementById('numFields').addEventListener('change', function() {
    const selectedValue = parseInt(this.value);
    generateInputFields(selectedValue);
});

// submitting the form on click 
document.getElementById('dynamicForm').addEventListener('submit', validateForm);