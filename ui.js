class Ui {
  constructor() {
    this.profile = document.getElementById("profile");
    this.userList = document.getElementById("user-list")
  }

  showProfile(profile) {
    this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${profile.avatar_url}">
            <a href="${
              profile.html_url
            }" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${
              profile.public_repos
            }</span>
            <span class="badge badge-secondary">Public Gists: ${
              profile.public_gists
            }</span>
            <span class="badge badge-success">Followers: ${
              profile.followers
            }</span>
            <span class="badge badge-info">Following: ${
              profile.following
            }</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${profile.company}</li>
              <li class="list-group-item">Website/Blog: ${profile.blog}</li>
              <li class="list-group-item">Location: ${profile.location}</li>
              <li class="list-group-item">Member Since: ${
                profile.created_at
              }</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
        `;
  }

  userCard(user) {
    return `
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${user.avatar_url}" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${user.login}</h5>
              <p class="card-text">
                <a href="${user.html_url}" target="_blank">${user.html_url}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    `
  }

  showUserList(users) {
    this.userList.innerHTML = `
      <h1>User Lists</h1>
      ${users.map(user => this.userCard(user)).join('')}
    `
  }

  clearResult(users){
      if(users === ''){
        ui.userList.innerHTML='';
      }
    }
  }
