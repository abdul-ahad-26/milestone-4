document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    //type assertion
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const contactElement = document.getElementById(
      "contact"
    ) as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;
    const workExperienceElement = document.getElementById(
      "workExperience"
    ) as HTMLInputElement;
    const profilePictureInput = document.getElementById(
      "profilePicture"
    ) as HTMLInputElement;

    if (
      !nameElement.value ||
      !emailElement.value ||
      !contactElement.value ||
      !profilePictureInput ||
      !educationElement.value ||
      !skillsElement.value ||
      !workExperienceElement.value
    ) {
      alert("Please fill out all fields.");
    } else {
      const name = nameElement.value;
      const email = emailElement.value;
      const contact = contactElement.value;
      const education = educationElement.value;
      const skills = skillsElement.value;
      const workExperience = workExperienceElement.value;

      const profilePictureFile = profilePictureInput.files?.[0];
      const profilePictureURL = profilePictureFile
        ? URL.createObjectURL(profilePictureFile)
        : "";

      const resumeOutput = `
        <h2>Resume</h2>
        <hr>

        <h3>Personal Information</h3>
        ${
          profilePictureFile
            ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`
            : ""
        }
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

        const editableFields = document.querySelectorAll("[contenteditable]");
        editableFields.forEach((field) => {
          field.addEventListener("input", (e: Event) => {
            const target = e.target as HTMLElement;
            console.log(`${target.id} updated to:`, target.textContent);
          });
        });
      } else {
        console.error("Element with id 'resumeOutput' not found.");
      }
    }
  });
