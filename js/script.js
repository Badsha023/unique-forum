const postContainer = document.getElementById('posting');
const cardRight = document.getElementById('second-card');
const count = document.getElementById('counting');
const cardArea = document.getElementById('card-container');

let totalCount=0;

const otherPost = async (search) => {
  try {
      const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${search}`);
      const data = await res.json();
      
      console.log(data);
      postContainer.innerHTML = '';

      const postsHTML = data.posts.map(post => `
          <div class="card lg:card-side shadow-xl lg:p-10">
              <div class="indicator">
                  <span id="active" class="indicator-item badge ${post.isActive ? 'bg-green-500' : 'bg-red-400'}"></span> 
                  <div class="grid w-32 h-32 bg-base-300 place-items-center">
                      <img src="${post.image}" alt="">
                  </div>
              </div>
              <div class="card-body flex lg:gap-10 gap-4">
                  <div class="flex gap-10 text-xl font-bold">
                      <h1>#${post.category}</h1>
                      <p>Author: ${post.author.name}</p>
                  </div>
                  <p class="text-[#12132D] text-[20px] font-extrabold">${post.title}</p>
                  <p>${post.description}</p>
                  <hr>
                  <div class="flex justify-center lg:justify-between flex-col lg:flex-row gap-5">
                      <div class="flex gap-5">
                          <div class="flex flex-row justify-center items-center gap-2">
                              <i class="fa-regular fa-comment"></i>
                              <p>${post.comment_count}</p>
                          </div>
                          <div class="flex flex-row justify-center items-center gap-2">
                              <i class="fa-regular fa-eye"></i>
                              <p>${post.view_count}</p>
                          </div>
                          <div class="flex flex-row justify-center items-center gap-2">
                              <i class="fa-regular fa-clock"></i>
                              <p>${post.posted_time} min</p>
                          </div>
                      </div>
                      <div class="text-center">
                          <button onclick="handleBtn('${post.title}', ${post.view_count})" class="btn btn-circle bg-green-400">
                              <i class="fa-regular fa-envelope-open"></i>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      `).join('');

      postContainer.innerHTML = postsHTML;

      // Hide loading spinner after 2 seconds
      setTimeout(() => {
          loadingSpinner(false);
      }, 2000);
  } catch (error) {
      console.error('Error fetching posts:', error);
  }
}

const totalPost = async () => {
  try {
      const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
      const data = await res.json();
      
      console.log(data);
      postContainer.innerHTML = '';

      const postsHTML = data.posts.map(post => `
          <div class="card lg:card-side shadow-xl lg:p-10">
              <div class="indicator">
                  <span id="active" class="indicator-item badge ${post.isActive ? 'bg-green-500' : 'bg-red-400'}"></span> 
                  <div class="grid w-32 h-32 bg-base-300 place-items-center">
                      <img src="${post.image}" alt="">
                  </div>
              </div>
              <div class="card-body flex lg:gap-10 gap-4">
                  <div class="flex gap-10 text-xl font-bold">
                      <h1>#${post.category}</h1>
                      <p>Author: ${post.author.name}</p>
                  </div>
                  <p class="text-[#12132D] text-[20px] font-extrabold">${post.title}</p>
                  <p>${post.description}</p>
                  <hr>
                  <div class="flex justify-center lg:justify-between flex-col lg:flex-row gap-5">
                      <div class="flex gap-5">
                          <div class="flex flex-row justify-center items-center gap-2">
                              <i class="fa-regular fa-comment"></i>
                              <p>${post.comment_count}</p>
                          </div>
                          <div class="flex flex-row justify-center items-center gap-2">
                              <i class="fa-regular fa-eye"></i>
                              <p>${post.view_count}</p>
                          </div>
                          <div class="flex flex-row justify-center items-center gap-2">
                              <i class="fa-regular fa-clock"></i>
                              <p>${post.posted_time} min</p>
                          </div>
                      </div>
                      <div class="text-center">
                          <button onclick="handleBtn('${post.title}', ${post.view_count})" class="btn btn-circle bg-green-400">
                              <i class="fa-regular fa-envelope-open"></i>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      `).join('');

      postContainer.innerHTML = postsHTML;
  } catch (error) {
      console.error('Error fetching posts:', error);
  }
}




const handleBtn = (a, b) => {
  totalCount++;
  count.innerText = totalCount;
  console.log("fff");

  const containerDiv = document.createElement("div");
  containerDiv.innerHTML = `
      <div class="flex lg:justify-between lg:flex-row flex-col justify-center my-10 bg-white p-7 rounded-2xl">
          <h1 class="text-center lg:text-start">${a}</h1>
          <div class="flex flex-row justify-center items-center gap-2">
              <i class="fa-regular fa-eye"></i>
              <p>${b}</p>
          </div>
      </div>
  `;

  cardRight.appendChild(containerDiv);
}



const latestPost = async () => {
  try {
      const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
      const data = await response.json();
      
      console.log(data);
      cardArea.innerHTML = '';

      data.forEach(post => {
          const cardDiv = document.createElement('div');
          cardDiv.classList.add('card', 'w-full', 'my-16', 'lg:w-96', 'bg-base-100', 'shadow-xl');

          cardDiv.innerHTML = `
              <figure class="lg:px-5 lg:pt-10">
                  <img src="${post.cover_image}" alt="Shoes" class="rounded-xl" />
              </figure>
              <div class="card-body items-start text-start my-10">
                  <div class="flex justify-center items-center gap-5">
                      <i class="fa-regular fa-calendar"></i>
                      <p>${post.author.posted_date ? post.author.posted_date : 'No Publish Date'}</p>
                  </div>
                  <p class="font-extrabold text-[18px] text-black mt-5">${post.title}</p>
                  <p class="text-[#12132d99]">${post.description}</p>
                  <div class="flex justify-between gap-10 mt-10">
                      <img class="w-[70px] rounded-full" src="${post.profile_image}" alt="">
                      <div>
                          <h1 class="font-bold text-[#12132d] text-xl">${post.author.name}</h1>
                          <p>${post.author.designation ? post.author.designation : 'No Designation Yet'}</p>
                      </div>
                  </div>
              </div>
          `;

          cardArea.appendChild(cardDiv);
      });
  } catch (error) {
      console.error('Error fetching latest posts:', error);
  }
}

const searchBtn = () => {
  const input = document.getElementById('input').value;
  loadingSpinner(true);
  otherPost(input);
}

const loadingSpinner = (isLoading) => {
  const spinner = document.getElementById('spinner');
  spinner.classList.toggle('hidden', !isLoading);
}

// Call function

otherPost();
totalPost();
latestPost();