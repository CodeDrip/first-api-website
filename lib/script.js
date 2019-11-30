console.log("oh yehh")

const url = "https://images-api.nasa.gov/album/Test";
// targetting the element I want to update with the API data
const button = document.querySelector("button")
const imgTag = document.querySelector("img.picture");

console.log(imgTag.src)

apiKey = "I5jAeSNw8sCQZuneer3pONLsaI8fWNE1opVbNdiV"

//extract json + turn into array

//select an item from array

//ectract image + assign it to img tag


fetch(`${url}?api_key=${apiKey}`)
  .then(res => res.json())

  .then(res => {
      console.log("success!", res);
      // console.log(res.collections);

  })
  .then(res => {
    console.log("deserialized data", res);
  });


button.addEventListener("click", evt => {
    evt.preventDefault();
    alert("We Got Action");
});