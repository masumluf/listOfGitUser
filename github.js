class Github {
  constructor() {
    this.client_id = "Iv1.e209daa6e9d4d5e4";
    this.client_secret = "3b9d076df0e3c4742b184e8561d1276ad1db23e5";
  }
  async gitUser(user) {
    const userProfile = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );
    const profile = await userProfile.json();
    return {
      profile
    };
  }
  async findUsers(user) {
    const searchResults = await fetch(
      `https://api.github.com/search/users?q=${user}`
    );
    const results = await searchResults.json();
    return {
      users: results.items
    };
  }
}
