// Create and name a global variable to select the div with a class of “overview”. This div is where your profile information will appear.
const overview = document.querySelector(".overview");
const username = "cdlampley";
// At the top of your file, create and name another global variable to select the unordered list to display the repos list.
const repoList = document.querySelector(".repo-list");

// Create and name an async function to fetch information from your GitHub profile
const githubData = async function () {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    //console.log(data);
    githubUserInfo(data);
};

githubData();

// Below the async function to fetch your GitHub user data, create and name a new function to display the fetched user information on the page. This function should accept the JSON data as a parameter.
const githubUserInfo = async function (data) {
    const div = document.createElement("div");
    div.classList.add("user-info");
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
    myRepos();
};

const myRepos = async function () {
    const fetchRepos = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    const reposResponse = await fetchRepos.json();
    //console.log(reposResponse);
    repoDisplay(reposResponse);
};
//myRepos();

// Below the async function fetching the repos, create and name a function to display information about each repo
const repoDisplay = function (repos) {
    //loop and create a list item for each repo and give each item class of "repo" & An <h3> element with the repo name
    for (const repo of repos) {
        const repoListItem = document.createElement("li");
        repoListItem.classList.add("repo");
        repoListItem.innerHTML = `<h3>${repo.name}</h3>`;
        //Append the list item to the global variable that selects the unordered repos list.
        repoList.append(repoListItem);
    } 
};