
const names = document.getElementById('names');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('pass1');
const confirmPassword = document.getElementById('pass2');
const gender = document.getElementById('gender');
const country = document.getElementById('country');
const PasswordText = document.querySelector('.PasswordText');
const hear = document.getElementById('hear');
const refer = document.getElementById('refer');
const button = document.querySelector('.subTinsedit');
const ShowPasswordCheck = document.querySelector('.ShowPassword');


button.onclick = async (event) => {
  event.preventDefault();

  const data = {
    fullName: names.value,
    email: email.value,
    phoneNumber: phone.value,
    password: password.value,
    gender: gender.value,
    country: country.value,
  };

  console.log(data);
  button.innerHTML = "Loading...";

  fetch('https://chi-backend-omega.vercel.app/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response=> response.json())
    .then(response => {
      localStorage.setItem('userId', JSON.stringify(response.data))
          // sendSignUpEmail();
      console.log(response)
      const userId = JSON.parse(localStorage.getItem('userId'))
      console.log("Local User Id", userId);
      window.location.href = `https://nexusbitpay-dashboard.vercel.app/#/${userId._id}`;
      
    })
    .catch((error) => {
      console.log(error);
      button.innerHTML = "Submit";
    });
};


 ShowPasswordCheck.onclick = ()=>{
    if(ShowPasswordCheck.checked === true){
      password.type = "text"
      confirmPassword.type = "text"
      PasswordText.innerHTML = "Hide Passwoord"
    }else{
      password.type = "password"
      confirmPassword.type = "password"
      PasswordText.innerHTML = "Show Password"
    }
}

