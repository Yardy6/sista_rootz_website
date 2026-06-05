const ageGate = document.querySelector("#ageGate");
const ageForm = document.querySelector("#ageForm");
const ageError = document.querySelector("#ageError");
const signupForm = document.querySelector(".signup-form");
const signupMessage = document.querySelector("#signupMessage");
const verifiedStorageKey = "sistaRootzAgeVerified";

function getAgeFromBirthdate(value) {
  const birthdate = new Date(`${value}T00:00:00`);
  const today = new Date();

  if (Number.isNaN(birthdate.getTime()) || birthdate > today) {
    return null;
  }

  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDifference = today.getMonth() - birthdate.getMonth();
  const dayDifference = today.getDate() - birthdate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age -= 1;
  }

  return age;
}

function hideAgeGate() {
  if (!ageGate) {
    return;
  }

  ageGate.classList.add("is-hidden");
  document.body.classList.remove("gate-open");
}

if (ageGate) {
  const isVerified = window.sessionStorage.getItem(verifiedStorageKey) === "true";

  if (isVerified) {
    hideAgeGate();
  } else {
    document.body.classList.add("gate-open");
  }
}

if (ageForm) {
  ageForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const birthdateInput = ageForm.querySelector("#birthdate");
    const age = getAgeFromBirthdate(birthdateInput.value);

    if (age === null) {
      ageError.textContent = "Please enter a valid date of birth.";
      return;
    }

    if (age >= 21) {
      window.sessionStorage.setItem(verifiedStorageKey, "true");
      ageError.textContent = "";
      hideAgeGate();
      return;
    }

    ageError.textContent = "You must be 21 years of age or older to enter this site.";
  });
}

if (signupForm) {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const button = signupForm.querySelector("button");
    button.textContent = "Request Noted";
    button.disabled = true;

    if (signupMessage) {
      signupMessage.textContent = "Thanks. This placeholder form is not connected to a live service yet.";
    }
  });
}
