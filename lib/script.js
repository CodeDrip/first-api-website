console.log("oh yehh")

const url = "https://images-api.nasa.gov/search?description=nebula";
// targetting the element I want to update with the API data
const button = document.querySelector("button")
const imgTag = document.querySelector("img.picture");

// console.log(imgTag.src)

apiKey = "I5jAeSNw8sCQZuneer3pONLsaI8fWNE1opVbNdiV"



fetch(`${url}`)
  .then(res => res.json())

  .then(res => {
      console.log("success!", res);
      smallerArray = res.collection.items.slice(0, 12)

      for (var i in smallerArray) {
        //create divs for array items
        var newElement = document.createElement('div');
        newElement.id = "item" + i;
        console.log(newElement.id) 
        newElement.className = "square";
        document.getElementsByTagName('main')[0].appendChild(newElement);
        //assign background to divs
        assignedImg = smallerArray[i].links[0].href
        document.getElementById(newElement.id).style.background = `url(${assignedImg})`;       
        //event to make hidden div "pop up"
        idActions = document.getElementById(`${newElement.id}`)
        idActions.addEventListener("click", evt => {
            evt.preventDefault();
            // alert("Big things Poppin")
            document.getElementsByTagName("article")[0].style.visibility = "visible"
        }   )
    
    
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