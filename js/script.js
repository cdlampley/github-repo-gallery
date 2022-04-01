// Create and name a global variable to select the div with a class of “overview”. This div is where your profile information will appear.
const overview = document.querySelector(".overview");
const username = "cdlampley";

// Create and name an async function to fetch information from your GitHub profile
const githubData = async function () {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    console.log(data);
    githubUserInfo(data);
};

githubData();

// Below the async function to fetch your GitHub user data, create and name a new function to display the fetched user information on the page. This function should accept the JSON data as a parameter.
const githubUserInfo = async function (data) {
    const div = document.createElement("user-info");
    div.innerHTML = `<figure>
    <img alt="user avatar" src=${data.avatar_url} />
  </figure>
  <div>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Bio:</strong> ${data.bio}</p>
    <p><strong>Location:</strong> ${data.location}</p>
    <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
  </div> `;
    overview.append(div);
};

