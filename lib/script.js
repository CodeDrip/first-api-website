console.log("oh yehh")

const url = "https://images-api.nasa.gov/search?description=nebula";
// targetting the element I want to update with the API data
const button = document.querySelector("button")
const imgTag = document.querySelector("img.picture");

// console.log(imgTag.src)

apiKey = "I5jAeSNw8sCQZuneer3pONLsaI8fWNE1opVbNdiV"

//extract json + turn into array

//select an item from array

//ectract image + assign it to img tag

//too "?api_key=${apiKey}" off to get array
fetch(`${url}`)
  .then(res => res.json())

  .then(res => {
      console.log("success!", res);
      console.log(res.collection.items[0].data[0].title);
      console.log(res.collection.items[0].data[0].date_created);
      console.log(res.collection.items[0].data[0].description);
      console.log(res.collection.items[0].links[0].href);


  })
  .then(res => {
    console.log("deserialized data", res);
  })
  .catch(err => {
    console.log("something went wrong...", err);
  });





button.addEventListener("click", evt => {
    evt.preventDefault();
    alert("We Got Action");
});