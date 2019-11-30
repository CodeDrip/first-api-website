console.log("oh yehh")

const url = "https://images-api.nasa.gov/album/Test";
// targetting the element I want to update with the API data
const button = document.querySelector("button")
const imgDiv = document.querySelector("img");


fetch(url)
  .then(res => {
      return res.json();
 
  })
  .then(res => {
      console.log("success!", res);
  })
  .then(res => {
    console.log("deserialized data", res);
  });


button.addEventListener("click", evt => {
    evt.preventDefault();
    alert("We Got Action");
});