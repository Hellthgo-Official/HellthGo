let form = document.getElementById("signup-form");

let name = document.getElementById("name");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repassword = document.getElementById("repassword");

let values = {};

const inputArr = [name, username, email, password, repassword];

inputArr.forEach((input) => {
  input.addEventListener("change", (e) => {
    values = { ...values, [e.target.name]: e.target.value };
  });
});

function validateForm() {
  let { name, username, email, password, repassword } = values;
  let searchParams = new URLSearchParams(window.location.search);

  let referral = searchParams.get("referral");
  values = { ...values, referral: referral };
  console.log(values);

  if (!name || !username || !email || !password || !repassword) {
    alert(`Please Fill All Fields.`);
    return false;
  }
  if (name.length < 6) {
    alert("Name is too short");
    return false;
  }
  if (username.length < 4) {
    alert("Name is too short");
    return false;
  }
  if (password.length < 6 || repassword.length < 6) {
    alert("Password is too short.");
  }

  if (password !== repassword) {
    alert("Both passwords does'nt match.");
  }
  if (!email.includes("@") || !email.includes(".") || email.length < 8) {
    alert("Email is invalid.");
    return false;
  }
  if (!referral) {
    alert("Referral Code not found");
    return false;
  }
  return true;
}

function copyToClipboard(hostLink, referral) {
  navigator.clipboard.writeText(`${hostLink}?referral=${referral}`);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (validateForm()) {
    let { name, username, email, password, repassword, referral } = values;
    const host = "https://health-go.herokuapp.com/auth/signup";
    await axios
      .post(host, {
        name: name,
        username: username,
        email: email,
        password: password,
        repassword: repassword,
        referral: referral,
      })
      .then((res) => {
        console.log(res.data);
        setTimeout(
          async () => await copyToClipboard('https://healthgotechnologies.com/sign-up', res.data.userReferral),
          3000
        );
        setTimeout(
          alert(
            "Your referral link has been copied successfully and you'll be redirected to download the app to complete your profile"
          ),
          3000
        );
      })
      .catch((err) => {
        alert("Something went wrong!");
        console.log(err);
      });
  }
});
