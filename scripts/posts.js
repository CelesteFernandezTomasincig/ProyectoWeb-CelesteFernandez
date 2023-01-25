function renderPostDetail(post) {
    let postsContainer = document.getElementById("postsContainer");
    let record = document.createElement("div");
    record.innerHTML = `<div class="card-body">
    <img src="https://picsum.photos/200" class="rounded card-img-top" alt="${post.title}">
    <h5 class="card-title">${post.title}</h5>
    <p class="card-text">${post.body}</p>
  </div>`;
    record.className = "card mt-2";
    postsContainer.appendChild(record);
  }
  
  function renderCardsPostDetails(posts = []) {
    let postsContainer = document.getElementById("postsContainer");
    postsContainer.innerHTML = "";
    posts.forEach((element) => {
      renderPostDetail(element);
    });
  }
  
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      
      showSearchingPosts.style.display = "block";
  
      renderCardsPostDetails(json);
  
      showSearchingPosts.style.display = "none";
    });
  
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((json) => {
    
    });