// Prevent form submission if required fields are not filled
function validateForm() {
    const name = document.getElementById('name').value;
    const mascot = document.getElementById('mascot').value;
    const image = document.getElementById('image').files.length;
    const imageCaption = document.getElementById('imageCaption').value;
    const personalBackground = document.getElementById('personalBackground').value;
    const professionalBackground = document.getElementById('professionalBackground').value;
    const academicBackground = document.getElementById('academicBackground').value;
    const webDevelopment = document.getElementById('webDevelopment').value;
    const platform = document.getElementById('platform').value;

    if (!name || !mascot || !image || !imageCaption || !personalBackground || !professionalBackground || !academicBackground || !webDevelopment || !platform) {
        alert("Please fill out all required fields.");
        return false;
    }
    return true;
}

// Reset the form to its initial state
function resetForm() {
    document.getElementById('introForm').reset();
    document.getElementById('formResults').style.display = 'none';
}

// Add a new course text field
function addCourse() {
    const coursesContainer = document.getElementById('coursesContainer');
    const newCourse = document.createElement('div');
    newCourse.innerHTML = `<input type="text" name="courses[]"><button type="button" onclick="removeCourse(this)">Delete</button><br><br>`;
    coursesContainer.appendChild(newCourse);
}

// Remove a course text field
function removeCourse(button) {
    button.parentElement.remove();
}

// Display the submitted form data in the same format as the intro
function displayResults(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const mascot = document.getElementById('mascot').value;
    const imageCaption = document.getElementById('imageCaption').value;
    const personalBackground = document.getElementById('personalBackground').value;
    const professionalBackground = document.getElementById('professionalBackground').value;
    const academicBackground = document.getElementById('academicBackground').value;
    const webDevelopment = document.getElementById('webDevelopment').value;
    const platform = document.getElementById('platform').value;
    const courses = document.querySelectorAll('input[name="courses[]"]');
    const funnyThing = document.getElementById('funnyThing').value;
    const anythingElse = document.getElementById('anythingElse').value;

    const courseList = [];
    courses.forEach(course => {
        if (course.value.trim() !== '') {
            courseList.push(course.value);
        }
    });

    // Show results in place of the form
    document.getElementById('resultName').textContent = name;
    document.getElementById('resultMascot').textContent = mascot;
    document.getElementById('resultImageCaption').textContent = imageCaption;
    document.getElementById('resultPersonalBackground').textContent = personalBackground;
    document.getElementById('resultProfessionalBackground').textContent = professionalBackground;
    document.getElementById('resultAcademicBackground').textContent = academicBackground;
    document.getElementById('resultWebDevelopment').textContent = webDevelopment;
    document.getElementById('resultPlatform').textContent = platform;
    document.getElementById('resultCourses').textContent = courseList.join(', ');
    document.getElementById('resultFunnyThing').textContent = funnyThing;
    document.getElementById('resultAnythingElse').textContent = anythingElse;

    document.getElementById('introForm').style.display = 'none';
    document.getElementById('formResults').style.display = 'block';
}
