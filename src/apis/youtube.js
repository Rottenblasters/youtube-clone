import axios from "axios";

const KEY = "AIzaSyD6rsHDc8EV7okktoxHu4ibE9XSI1lYrhU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
