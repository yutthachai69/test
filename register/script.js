function showFields() {
    const memberType = document.getElementById('memberType').value;
    const generalFields = document.getElementById('generalFields');
    const studentFields = document.getElementById('studentFields');
    const storeFields = document.getElementById('storeFields');

    generalFields.style.display = 'none';
    studentFields.style.display = 'none';
    storeFields.style.display = 'none';

    const citizenID = document.getElementById('citizenID');
    const birthDate = document.getElementById('birthDate');
    const schoolName = document.getElementById('schoolName');
    const studentID = document.getElementById('studentID');
    const studentCardImage = document.getElementById('studentCardImage');
    const cardExpiryDate = document.getElementById('cardExpiryDate');
    const birthDateStudent = document.getElementById('birthDateStudent');
    const ownerName = document.getElementById('ownerName');
    const storeName = document.getElementById('storeName');
    const businessRegNumber = document.getElementById('businessRegNumber');
    const businessDoc = document.getElementById('businessDoc');

    citizenID.removeAttribute('required');
    birthDate.removeAttribute('required');
    schoolName.removeAttribute('required');
    studentID.removeAttribute('required');
    studentCardImage.removeAttribute('required');
    cardExpiryDate.removeAttribute('required');
    birthDateStudent.removeAttribute('required');
    ownerName.removeAttribute('required');
    storeName.removeAttribute('required');
    businessRegNumber.removeAttribute('required');
    businessDoc.removeAttribute('required');

    if (memberType === 'general') {
        generalFields.style.display = 'block';
        citizenID.setAttribute('required', true);
        birthDate.setAttribute('required', true);
    } else if (memberType === 'student') {
        studentFields.style.display = 'block';
        schoolName.setAttribute('required', true);
        studentID.setAttribute('required', true);
        studentCardImage.setAttribute('required', true);
        cardExpiryDate.setAttribute('required', true);
        birthDateStudent.setAttribute('required', true);
    } else if (memberType === 'store') {
        storeFields.style.display = 'block';
        ownerName.setAttribute('required', true);
        storeName.setAttribute('required', true);
        businessRegNumber.setAttribute('required', true);
        businessDoc.setAttribute('required', true);
    }
}