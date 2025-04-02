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
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

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
    const imageFile = document.getElementById('image').files[0];  // Get the image file

    // Create an array for the courses
    const courseList = [];
    courses.forEach(course => {
        if (course.value.trim() !== '') {
            courseList.push(course.value);
        }
    });

    // Display the results in the correct format
    document.getElementById('resultName').textContent = name;
    document.getElementById('resultMascot').textContent = mascot;
    document.getElementById('resultImageCaption').textContent = imageCaption;
    document.getElementById('resultPersonalBackground').textContent = personalBackground;
    document.getElementById('resultProfessionalBackground').textContent = professionalBackground;
    document.getElementById('resultAcademicBackground').textContent = academicBackground;
    document.getElementById('resultWebDevelopment').textContent = webDevelopment;
    document.getElementById('resultPlatform').textContent = platform;
    
    // Handle the image display if there is an uploaded image
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageElement = document.getElementById('resultImage');
            imageElement.src = e.target.result;  // Set the image source to the uploaded file
            imageElement.style.display = 'block';  // Ensure image is displayed
        };
        reader.readAsDataURL(imageFile);
    } else {
        // If no image is uploaded, hide the image element
        document.getElementById('resultImage').style.display = 'none';
    }

    // Display courses as a list
    const resultCourses = document.getElementById('resultCourses');
    resultCourses.innerHTML = '';  // Clear the existing list
    courseList.forEach(course => {
        const listItem = document.createElement('li');
        listItem.textContent = course;
        resultCourses.appendChild(listItem);
    });

    // Display other fields
    document.getElementById('resultFunnyThing').textContent = funnyThing;
    document.getElementById('resultAnythingElse').textContent = anythingElse;

    // Hide the form and show the results
    document.getElementById('introForm').style.display = 'none';
    document.getElementById('formResults').style.display = 'block';
}
