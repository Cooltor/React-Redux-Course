import axios from "axios";
import { API_KEY_PARAM, BASE_URL, BACKDROP_BASE_URL } from "../config";

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`); // voir doc url

    return response.data.results;
  }
}
