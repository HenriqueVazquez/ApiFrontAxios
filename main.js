const url = "http://localhost:5500/api"

function getUsers() {
  axios.get(url)
    .then(response => {
      apiResult.textContent = JSON.stringify(response.data);
    })
    .catch(error => console.error(error));
}

function addNewUser(newUser) {
  axios.post(url, newUser)
    .then(response => {
      console.log(response);
    })
    .catch(error => console.error(error));
}

function getUser(idUser) {
  axios.get(`${url}/${idUser}`)
    .then(response => {
      const data = response.data;

      userID.textContent = data.id;
      userName.textContent = data.name;
      userCity.textContent = data.city;
      userAvatar.src = data.avatar;
    })
    .catch(error => console.error(error));
}

function updateUser(idUser, updatedUser) {
  axios.put(`${url}/${idUser}`, updatedUser)
    .then(response => console.log(response))
    .catch(error => console.error(error));
}

const newUser = {
  name: "Karen Tatiane",
  avatar: "https://thumbs.gfycat.com/FickleWaryBrocketdeer-size_restricted.gif",
  city: "São Paulo"

}

const updatedUser = {
  name: "Sophia Vazquez",
  avatar: "https://i.pinimg.com/originals/5f/09/b3/5f09b35c6fc0ba3c97cd09538926c8b6.gif",
  city: "São Paulo"
}

updateUser(3, updatedUser)

getUsers();
getUser(3);

//addNewUser(newUser);