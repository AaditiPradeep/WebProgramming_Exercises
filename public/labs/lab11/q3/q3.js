function time(){
    setInterval(()=> {
        let now = new Date();
        document.getElementById("timeDisplay").innerText = now.toLocaleTimeString();
    },1000);
}

document.getElementById("test").addEventListener("submit",(event) => {
    event.preventDefault();
    validate();
})

function validate(){
    let valid = true;

    document.querySelectorAll(".error").forEach(ele => ele.innerText="");

    let name = document.getElementById("name");
    if(name.value === "" || name.length > 15){
        document.getElementById("nameError").innerText = "Enter a valid name(max chars 15)";
        name.focus();
        return false;
    }

    let zipcode = document.getElementById("zip");
    let zipPat = /\d{6}/;
    if(!(zipPat.test(zipcode.value))){
        document.getElementById("zipError").innerText = "Enter a valid zipcode";
        zipcode.focus();
        return false;
    }
    
    let country = document.getElementById("country");
    if(country.value==""){
        document.getElementById("countryError").innerText = "Enter a valid country";
        country.focus();
        return false;
    }

    let ph = document.getElementById("phone");
    let phPat = /\d{10}/;
    if(!phPat.test(ph.value)){
        document.getElementById("phoneError").innerText = "Enter a valid phone number";
        ph.focus();
        return false;
    }

    let pan = document.getElementById("panNo");
    let panPat = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if(!(panPat.test(pan.value))){
        document.getElementById("panError").innerText = "Enter a valid PAN number";
        pan.focus();
        return false;
    }

    let email = document.getElementById("email");
    let emailPat = /^[A-Za-z0-9.+%_-]+@[A-Za-z0-9._]+\.[A-Za-z]{2,}$/;
    if(!emailPat.test(email.value)){
        document.getElementById("emailError").innerText = "Enter a valid email";
        email.focus();
        return false;
    }

    let pwd = document.getElementById("password");
    let pwdPat = /(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[#%&!@$])[a-zA-Z\d#%&!@$]{8,15}/;
    if(!pwdPat.test(pwd.value)){
        document.getElementById("passwordError").innerText = "Enter a valid password";
        pwd.focus();
        return false;
    }    

   alert("Form submitted successfully");
   document.getElementById("test").reset();

}

function displayData(){
    let output = "<p><b>Form Data </b></p>";

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let pan = document.getElementById("panNo").value;
    let country = document.getElementById("country").value;

    let gender = document.querySelector('input[name="gender"]:checked');
    gender = gender ? gender.value : "Not selected";

    let preferences = [];
    document.querySelectorAll('input[name="preferences"]:checked').forEach((chk) => {
        preferences.push(chk.value);
    });
    preferences = preferences.length > 0 ? preferences.join(", ") : "None";

    output += `<p><b>Name:</b> ${name}</p>`;
    output += `<p><b>Gender:</b> ${gender}</p>`;
    output += `<p><b>Email:</b> ${email}</p>`;
    output += `<p><b>Phone:</b> ${phone}</p>`;
    output += `<p><b>PAN No:</b> ${pan}</p>`;
    output += `<p><b>Country:</b> ${country}</p>`;
    output += `<p><b>Preferences:</b> ${preferences}</p>`;

    document.getElementById("output").innerHTML = output;
}

window.onload = time();