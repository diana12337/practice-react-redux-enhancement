export default class GitHubSDK {
  url = "https://api.github.com";
  getRepos(userName) {
    return fetch(`${this.url}/users/${userName}/repos`)
      .then(this.handleErrors)
      .then((resp) => resp.json());
  }
}
