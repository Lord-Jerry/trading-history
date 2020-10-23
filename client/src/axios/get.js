import axios from "./axios"

export async function fetchData(ade) {
    await axios.get("https://bunny-task-server.herokuapp.com/api/v1/tasks")
    .then(res => {return res})
    .catch(err => console.log(err))
    // setMovies(request.data.results);
    // return request;
  }
