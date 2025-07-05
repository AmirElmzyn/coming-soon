const btn = document.querySelector(".img-btn");
const input = document.querySelector(".email");
const errorIcon = document.querySelector(".error-icon");
const errorMes = document.querySelector(".error-mes");
const emailBox = document.querySelector(".email-box");

let emailValue;
let validEmail;
let checkEmail;

btn.onclick = () => {
    emailValue = input.value.trim();
    validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    checkEmail = validEmail.test(emailValue);

    if (!checkEmail || emailValue === ""){
        errorIcon.style.display = "block";
        errorMes.style.display ="block";
        emailBox.classList.add("error");

        setTimeout(() => {
            emailBox.classList.remove("error")
        }, 300)
    }
    else{
        errorIcon.style.display = "none";
        errorMes.style.display ="none";
        emailBox.classList.remove("error")

        console.log("Email is valid:", emailValue);
        alert("شكراً لك! تم تسجيل إيميلك بنجاح.");
        input.value = "";
    }
};

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        btn.click();
    }
});

input.addEventListener("input", () => {
    if(errorIcon.style.display === "block"){
        errorIcon.style.display = "none";
        errorMes.style.display = "none";
        emailBox.classList.remove("error")
    }
});