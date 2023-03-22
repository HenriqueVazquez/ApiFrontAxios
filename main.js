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

function getUser(id) {
  axios.get(`${url}/${id}`)
    .then(response => {
      const data = response.data;

      userID.textContent = data.id;
      userName.textContent = data.name;
      userCity.textContent = data.city;
      userAvatar.src = data.avatar;
    })
    .catch(error => console.error(error));
}


const newUser = {
  name: "Karen Tatiane",
  avatar: "https://thumbs.gfycat.com/FickleWaryBrocketdeer-size_restricted.gif",
  city: "São Paulo"

}

getUsers();
getUser(2);

//addNewUser(newUser);