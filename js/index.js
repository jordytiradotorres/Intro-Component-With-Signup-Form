const form = document.forms[0],
	spanError = [...document.querySelectorAll("span.error")],
	iconError = [...document.querySelectorAll("img.icon-error")];

const inputs = [...document.querySelectorAll("form input")];
const inputNames = [
	"First Name",
	"Last Name",
	"Looks like this not an Email",
	"Password",
];

form.addEventListener("input", (e) => {
	for (let i = 0; i < 4; i++) {
		if (!inputs[i].validity.valueMissing) {
			iconError[i].style.display = "none";
			spanError[i].textContent = "";
		}
	}
});

form.addEventListener(
	"invalid",
	(e) => {
		form.classList.add("invalid");
		for (let i = 0; i < 4; i++) {
			if (inputs[i].validity.valueMissing) {
				iconError[i].style.display = "block";
				spanError[i].textContent = `${inputNames[i]} cannot by empty`;
				inputs[i].placeholder = "";

				if (i === 2) {
					inputs[i].placeholder = "email@example/com";
					inputs[i].classList.add("errorEmail");
				}
			}
		}
	},
	true
);
