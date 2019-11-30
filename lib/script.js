console.log("oh yehh")

const url = "https://images-api.nasa.gov/search?description=nebula";
// targetting the element I want to update with the API data
const button = document.querySelector("button")
const imgTag = document.querySelector("img.picture");

// console.log(imgTag.src)

apiKey = "I5jAeSNw8sCQZuneer3pONLsaI8fWNE1opVbNdiV"

//target first 10 objects of array

//create 10 divs

//SOMEHOWWWW correlate each object in array to a div

fetch(`${url}`)
  .then(res => res.json())

  .then(res => {
      console.log("success!", res);
      smallerArray = res.collection.items.slice(0, 10)

      for (var i in smallerArray) {
        var newElement = document.createElement('div');
        newElement.id = smallerArray[i]; newElement.className = "square";
        newElement.innerHTML = smallerArray[i];
        document.body.appendChild(newElement);
    }
   


  })
  .catch(err => {
    console.log("something went wrong...", err);
  });





button.addEventListener("click", evt => {
    evt.preventDefault();
    alert("We Got Action");
});



//json array targets
// console.log(res.collection.items[0-10])
// console.log(res.collection.items[0].data[0].title);
// console.log(res.collection.items[0].data[0].date_created);
// console.log(res.collection.items[0].data[0].description);
// console.log(res.collection.items[0].links[0].href);