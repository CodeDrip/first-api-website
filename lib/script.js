console.log("oh yehh")

const url = "https://images-api.nasa.gov/album/Test";

fetch(url)
  .then(res => res.json())
  .then(res => console.log("success!", res))
  .catch(err => console.log("something went wrong...", err));