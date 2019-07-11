const github = new Github();
const ui = new Ui();

const searchUser = document.getElementById("search-user");

searchUser.addEventListener("keyup", _.debounce(e => {
  const user = e.target.value;

  if (user !== "") {
    // github.gitUser(user).then(data => {
    //   if (data.profile.message === "Not Found") {
    //     //show alert
    //     //console.log('user found');
    //   } else {
    //     //show profile
    //     ui.showProfile(data.profile);
    //   }
    // });

    github.findUsers(user).then(({ users }) => {
      if(!_.isEmpty(users)){
        ui.showUserList(users);
        ui.clearResult(users);       
      }
    })

  }else{
    //console.log('gone');
    ui.clearResult(user);
  }
   
}, 500));
