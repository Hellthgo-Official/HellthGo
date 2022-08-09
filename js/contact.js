const li = document.getElementById("axx");
const getUsers = () => {
  const sname = document.querySelector("name").value;
  const email = document.querySelector("email").value;
  console.log(sname, email);
  axios
    .post("http://localhost:41816/signup", {
      name: sname,
      email,
    })
    .then((response) => {
      const users = response.data.response;
      console.log(users);
    })
    .catch((error) => console.error(error));
};

li.onclick = (e) => {
  e.preventDefault();
  getUsers();
};
