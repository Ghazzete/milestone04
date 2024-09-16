var _a;
// listing element
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    //type assertion
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //create resume output
        var resumeOutput = "\n    <h2> Editable Resume</h2>\n    <p><strong>Name:</strong> <span contenteditable =\"true\"> ".concat(name_1, " </span></p>\n    <p><strong>Email:</strong> <span contenteditable =\"true\"> ").concat(email, "</span></p>\n    <p><strong>Phone Number:</strong> <span contenteditable =\"true\"> ").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable =\"true\">").concat(education, "</P>\n\n    <h3>Experience</h3>\n    <p contenteditable =\"true\">").concat(experience, "</P>\n\n    <h3>Skills</h3>\n    <p contenteditable =\"true\">").concat(skills, "</P>\n     ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("the resume output elements are missing");
        }
    }
    else {
        console.error("one or more output elements are missing");
    }
});
