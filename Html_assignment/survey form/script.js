const form = document.getElementById('survey-form');
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popup-content');
const resetButton = document.getElementById('reset-btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    const genderElements = document.querySelectorAll('input[name="gender"]:checked');
    const gender = Array.from(genderElements).map(el => el.value).join(', ');

    if (!gender) {
        alert('Please select a gender.');
        return;
    }

    const content = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

    popupContent.innerHTML = content;
    popup.style.display = 'flex';
});

function closePopup() {
    popup.style.display = 'none';
    form.reset();
}

resetButton.addEventListener('click', () => {
    form.reset();
});