const loadCategorypost = async (category) => {
  const url = `https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  showAllPost(data.posts);
};
const showAllPost = (posts) => {
  posts.forEach((post) => {
    const postContainer = document.getElementById("post-container");
    const div = document.createElement("div");
    div.classList = `card bg-gray-100  p-6 my-6`;
    div.innerHTML = `
 
      <div class="flex gap-6">
       
        <div class="w-16 items-start">
          <div id="is-activated" class="avatar ${
            post.isActive ? "online" : "offline"
          } ">
            <div class="rounded-xl">
              <img
                src="${post.image}"
              />
            </div>
          </div>
        </div>

        <div class="grid auto-rows-auto lg:gap-4 gap-1 ">
          <div class="flex gap-3">
            <small>#${post.category}</small>
            <small>Author : ${post.author.name}</small>
          </div>
          <h2 class="card-title">${post.title}</h2>
          <p>
          ${post.description}
          </p>
          <div class="divider"></div>
          <div class="flex justify-between">
            <div class="flex gap-4">
              <div>
                <i class="fa-regular fa-message"></i>
                <span>560</span>
              </div>
              <div>
                <i class="fa-regular fa-eye"></i>
                <span>${post.view_count}</span>
              </div>
              <div>
                <i class="fa-regular fa-clock"></i>
                <span>${post.posted_time} min</span>
              </div>
            </div>
            <div>
              <i onclick="handleShowDetails('${post.title}', '${
      post.view_count
    }')"
                class="bg-green-400 p-2 text-white rounded-full fa-solid fa-envelope-open"
              ></i>
            </div>
          </div>
        </div>
      </div>
    
    `;

    postContainer.appendChild(div);
  });
};

const handleShowDetails = async (title, view_count) => {
  const markCount = document.getElementById("mark-count");
  const markCountValue = parseInt(markCount.innerText);
  markCount.innerText = markCountValue + 1;
  const markedItem = document.getElementById("marked-item");
  const div = document.createElement("div");
  div.classList =
    "flex bg-white p-4 rounded-xl justify-between items-center  mt-4";
  div.innerHTML = `
  
             
              <h1 class="text-xl w-5/6">
                ${title}
              </h1>
              <div class="">
                <i class="fa-regular fa-eye"></i>
                <span>${view_count}</span>
              
  `;
  markedItem.appendChild(div);
  console.log(title + view_count);
};

const handleSearch = () => {
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
  const searchInput = document.getElementById("search-input");
  const searchInputValue = searchInput.value;
  loadCategorypost(searchInputValue);
};
loadCategorypost("");

const loadLatestpost = async (category) => {
  const url = ` https://openapi.programming-hero.com/api/retro-forum/latest-posts`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  showLatestPosts(data);
};
const showLatestPosts = (data) => {
  const latestPostContainer = document.getElementById("latest-post-container");
  data.forEach((post) => {
    const div = document.createElement("div");
    div.classList = "card bg-base-100 mx-6 lg:w-96  shadow-xl";
    div.innerHTML = `
  <figure class="px-4 pt-4">
        <img
          src="${post.cover_image}"
          alt="Shoes"
          class="rounded-xl" />
      </figure>
      <div class="flex flex-col gap-4 p-4 ">
        <small>
          <i class="fa-solid fa-calendar-week mr-2"></i>
          ${post.author.posted_date || "No publish date"}
        </small>
        <h2 class="card-title">${post.title}</h2>
        <p>${post.description} </p>
        <div class="flex items-center gap-4">
          <div class="avatar">
            <div class="w-14 rounded-full">
              <img src="${post.profile_image}" />
            </div>
          </div>
          <div>
            <h3 class="font-semibold text-xl">${
              post.author.name || "Unknown"
            }</h3>
            <small>${post.author.designation}</small>
          </div>
        </div>
      </div>
  `;
    latestPostContainer.appendChild(div);
  });
  const div = document.createElement("div");
  div.classList = "card bg-base-100 w-96 shadow-xl";
  div.inner;
};
loadLatestpost();
