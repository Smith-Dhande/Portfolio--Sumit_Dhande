let form = document.getElementById("contactform");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let servicesInput = document.querySelectorAll('input[name="service"]');

form.addEventListener("submit", save);

function save() {

    let name = nameInput.value;
    let email = emailInput.value;

    let serviceSelected = [];

    servicesInput.forEach(service => {
        if (service.checked) {
            serviceSelected.push(service.value);
        }
    });

    let formData = {
        name: name,
        email: email,
        services: serviceSelected
    };

    localStorage.setItem(
        "contactData",
        JSON.stringify(formData)
    );

}