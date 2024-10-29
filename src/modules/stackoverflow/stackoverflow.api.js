export default class StackoverflowApi {
  url = "https://api.stackexchange.com";
  getData(text, filter) {
    return fetch(
      `${this.url}/2.3/similar?order=desc&sort=${filter}&title=${text} &site=stackoverflow`
    )
      .then(this.handleErrors)
      .then((resp) => resp.json());
  }

  handleErrors(resp) {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }
    return resp;
  }
}
