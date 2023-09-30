
// named function to prevent the form from submitting
function handleFormSubmit(e) {
    e.preventdefault();

    // getting the values inputs in the html web layout
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;


    // testing the values and also testing for errors
    if (name.trim() === '' || email.trim() === '') {
        document.getElementById('error').textContent = 'Please fill in all nrequired fields';
        return;
    }

    //  clearing any previous error messages
    document.getElementById('error').textContent = '';

    // displaying this mesage on success
    document.getElementById('success').textContent = 'Form submitted successfully';

}
// submitting the form 
document.getElementById('submitForm').addEventListener('submit', handleFormSubmit);