async function handleSubmit(e) {
    try {
        e.preventDefault();
        let firstName = document.getElementById('firstName');
        let lastName = document.getElementById('lastName');
        let email = document.getElementById('email');
        let userName = document.getElementById('userName');
        let password = document.getElementById('password');
        let cnfPassword = document.getElementById('cnfPassword');
        firstName = firstName.value || "";
        lastName = lastName.value || "";
        email = email.value || "";
        userName = userName.value || "";
        password = password.value || "";
        cnfPassword = cnfPassword.value || "";
        let firstNameErr = document.getElementById('firstNameErr');
        let lastNameErr = document.getElementById('lastNameErr');
        let emailErr = document.getElementById('emailErr');
        let userNameErr = document.getElementById('userNameErr');
        let passwordErr = document.getElementById('passwordErr');
        let cnfPasswordErr = document.getElementById('cnfPasswordErr');
        if(firstName.length <= 0 || firstName.length > 50) {
            firstNameErr.classList.remove('hidden');
        } else {
            firstNameErr.classList.add('hidden');
        }
        if(lastName.length <= 0 || lastName.length > 50) {
            lastNameErr.classList.remove('hidden');
        } else {
            lastNameErr.classList.add('hidden');
        }
        if(email.length <= 0 || !(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email)) {
            emailErr.classList.remove('hidden');
        } else {
            emailErr.classList.add('hidden');
        }
        if(userName.length <= 0 || userName.length > 255) {
            userNameErr.classList.remove('hidden');
        } else {
            userNameErr.classList.add('hidden');
        }
        if( (password.length <= 0 || cnfPassword.length <= 0) || (password!=cnfPassword)) {
            passwordErr.classList.remove('hidden');
            cnfPasswordErr.classList.remove('hidden');
        } else {
            passwordErr.classList.add('hidden');
            cnfPasswordErr.classList.add('hidden');
        }
        if(firstNameErr.classList.contains('hidden') &&
            lastNameErr.classList.contains('hidden') &&
            emailErr.classList.contains('hidden') &&
            userNameErr.classList.contains('hidden') &&
            passwordErr.classList.contains('hidden') &&
            cnfPasswordErr.classList.contains('hidden')) {
            let data = {
                "firstName" : firstName,
                "lastName" : lastName,
                "email" : email,
                "userName" : userName,
                "password" : password
            };
            let response = await fetch('http://localhost:8081/BACKEND/api/v1/user/saveDataInDB', {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            response = await response.json();
            let alertDanger = document.getElementById('alert_danger');
            let alertSuccess = document.getElementById('alert_success');
            if(response && response.status) {
                alertSuccess.classList.remove('hidden');
            } else {
                alertDanger.classList.remove('hidden');
            }
            setTimeout(() => {
                alertSuccess.classList.add('hidden');
                alertDanger.classList.add('hidden');
            }, 3000);
        }
    } catch (error) {
        console.log(error);
    }
}

function hideAlert() {
    let alertDanger = document.getElementById('alert_danger');
    let alertSuccess = document.getElementById('alert_success');
    alertDanger.classList.add('hidden');
    alertSuccess.classList.add('hidden');
}