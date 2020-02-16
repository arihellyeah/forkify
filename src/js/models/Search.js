import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
  // We won't need the proxy below for the API, but I'm storing it below, just in case :-)
  //  const proxy = 'https://cors-anywhere.herokuapp.com/';
    try {
      const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
      this.result = res.data.recipes
      // console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
