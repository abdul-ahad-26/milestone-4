"use strict";
var _a;
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    const contactElement = document.getElementById("contact");
    const educationElement = document.getElementById("education");
    const skillsElement = document.getElementById("skills");
    const workExperienceElement = document.getElementById("workExperience");
    const profilePictureInput = document.getElementById("profilePicture");
    if (!nameElement.value ||
        !emailElement.value ||
        !contactElement.value ||
        !profilePictureInput ||
        !educationElement.value ||
        !skillsElement.value ||
        !workExperienceElement.value) {
        alert("Please fill out all fields.");
    }
    else {
        const name = nameElement.value;
        const email = emailElement.value;
        const contact = contactElement.value;
        const education = educationElement.value;
        const skills = skillsElement.value;
        const workExperience = workExperienceElement.value;
        const profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        const profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : "";
        // Dynamic resume output with contenteditable attributes for editing
        const resumeOutput = `
        <h2>Resume</h2>
        <hr>

        <h3>Personal Information</h3>
        ${profilePictureFile
            ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`
            : ""}
        <p contenteditable="true" id="editable-name"><strong>Name:</strong> ${name}</p>
        <p contenteditable="true" id="editable-email"><strong>Email:</strong> ${email}</p>
        <p contenteditable="true" id="editable-contact"><strong>Contact:</strong> ${contact}</p>

        <hr>
        <h3>Education</h3>
        <p contenteditable="true" id="editable-education">${education}</p>

        <hr>
        <h3>Skills</h3>
        <p contenteditable="true" id="editable-skills">${skills}</p>

        <hr>
        <h3>Work Experience</h3>
        <p contenteditable="true" id="editable-work-experience">${workExperience}</p>

        <hr>
      `;
        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            // Add event listeners to editable fields to detect changes
            const editableFields = document.querySelectorAll("[contenteditable]");
            editableFields.forEach((field) => {
                field.addEventListener("input", (e) => {
                    const target = e.target;
                    console.log(`${target.id} updated to:`, target.textContent);
                });
            });
        }
        else {
            console.error("Element with id 'resumeOutput' not found.");
        }
    }
});
