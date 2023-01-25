let showSearchingUsers = document.getElementById("showSearchingUsers");
let showSearchingPosts = document.getElementById("showSearchingPosts");
//showSearchingUsers.style.display = "block";

// Usuarios
function renderUserDetail(user) {
  let productDetail = document.getElementById("usersTableBody");
  let record = document.createElement("tr");
  record.innerHTML = `<td>${user.name}</td>
      <td><a href="mailto:${user.email}?Subject=Lo%20contactamos%20para%20ofrecerle%20un%20curso">${user.email}</a></td>
      <td>${user.username}</td>
      <td>
      <a href="${user.website}" target="_blank">${user.website}</a>
      </td>`;
  productDetail.appendChild(record);
}

function renderUsersTableDetails(users = []) {
  let usersTableBody = document.getElementById("usersTableBody");
  usersTableBody.innerHTML = "";
  users.forEach((element) => {
    renderUserDetail(element);
  });
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    showSearchingUsers.style.display = "block";

    renderUsersTableDetails(json);

    showSearchingUsers.style.display = "none";
  });

