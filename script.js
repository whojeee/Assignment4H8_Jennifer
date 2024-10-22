const editButton = document.getElementById("edit-profile");
const formSection = document.getElementById("form-section");
const profileSection = document.querySelector(".card");
const form = document.getElementById("profile-form");

const profileName = document.getElementById("profile-name");
const profileRole = document.getElementById("profile-role");
const profileAvailability = document.getElementById("profile-availability");
const profileAge = document.getElementById("profile-age");
const profileLocation = document.getElementById("profile-location");
const profileExperience = document.getElementById("profile-experience");
const profileEmail = document.getElementById("profile-email");

function loadProfile() {
    const savedProfile = JSON.parse(localStorage.getItem('profile'));
    if (savedProfile) {
        profileName.textContent = savedProfile.name || "Nama Anda";
        profileRole.textContent = savedProfile.role || "Front End Designer";
        profileAvailability.textContent = savedProfile.availability || "Full Time";
        profileAge.textContent = savedProfile.age || "19";
        profileLocation.textContent = savedProfile.location || "Jakarta";
        profileExperience.textContent = savedProfile.experience || "2";
        profileEmail.textContent = savedProfile.email || "email@gmail.com";
    }
}

function saveProfile() {
    const profileData = {
        name: document.getElementById("name").value,
        role: document.getElementById("role").value,
        availability: document.getElementById("availability").value,
        age: document.getElementById("age").value,
        location: document.getElementById("location").value,
        experience: document.getElementById("experience").value,
        email: document.getElementById("email").value,
    };
    localStorage.setItem('profile', JSON.stringify(profileData));
}

editButton.addEventListener("click", function () {
    document.getElementById("name").value = profileName.textContent;
    document.getElementById("role").value = profileRole.textContent;
    document.getElementById("availability").value = profileAvailability.textContent;
    document.getElementById("age").value = profileAge.textContent;
    document.getElementById("location").value = profileLocation.textContent;
    document.getElementById("experience").value = profileExperience.textContent;
    document.getElementById("email").value = profileEmail.textContent;

    profileSection.style.display = "none";
    formSection.style.display = "block";
});

form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    profileName.textContent = document.getElementById("name").value;
    profileRole.textContent = document.getElementById("role").value;
    profileAvailability.textContent = document.getElementById("availability").value;
    profileAge.textContent = document.getElementById("age").value;
    profileLocation.textContent = document.getElementById("location").value;
    profileExperience.textContent = document.getElementById("experience").value;
    profileEmail.textContent = document.getElementById("email").value;

    saveProfile();

    formSection.style.display = "none";
    profileSection.style.display = "block";
});

window.onload = function () {
    loadProfile();
};
