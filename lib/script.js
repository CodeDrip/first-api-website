//put divs in array 0 - 11


//Add on Load function to handle pic squares

//Add onClick to each pic pic square

//match each square with corresponding res dat needed for card

//make card visible on click

const url = "https://images-api.nasa.gov/search?description=nebula";
// targetting the element I want to update with the API data
const button = document.querySelector("button")
const imgTag = document.querySelector("img.picture");

// console.log(imgTag.src)

apiKey = "I5jAeSNw8sCQZuneer3pONLsaI8fWNE1opVbNdiV"

//get Data First



//On Load
// function bodyOnLoad(){
// console.log("OnLoad")
// }
// function feti(caminho, dados) {
//   return fetch(caminho, {
//     method: 'POST',
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(dados)
//   })
//   // captura o erro 
//   .then(erroAPI)
//   // converte o sucesso em JSON
//   .then(response => response.json())
// }
  
  















fetch(`${url}`)
  .then(res => res.json())

  .then(res => {
      console.log("success!", res);
      smallerArray = res.collection.items.slice(0, 12)
    //make Square
    for (let i = 0; i < smallerArray.length; i++){
      console.log(smallerArray[i])
    // }
    //   for (var i in smallerArray) {
        //create divs for array items
        var newDiv = document.createElement('div');
       
        newDiv.id = "item" + i;
        console.log(newDiv.id) 
        newDiv.className = "square";
        document.getElementsByTagName('main')[0].appendChild(newDiv);
        //adding onclick
        document.getElementById(newDiv.id).onclick = "squareActivated";
        
        //assign background to divs
        assignedImg = smallerArray[i].links[0].href
        document.getElementById(newDiv.id).style.background = `url(${assignedImg})`;
        
      }

        var nodes = document.querySelectorAll('div')
         divArr = Array.from(nodes)
         for (var i = 0, n = nodes.length; i < n; i++) {
            node = nodes[i]
            console.log(node)

                        document.getElementById(nodes[i].id)
                        console.log(nodes[i].id)
                        tarSqId = [nodes[i].id]
                        console.log(tarSqId)

            document.getElementById(nodes[i].id).addEventListener("click", function(){
            //  document.getElementById(nodes[i].id)
              
              console.log(tarSqId)
            })
            // console.log(nodes[i].id)
            // tarSqId = [nodes[i].id]
            // console.log(tarSqId)



          }
       
       
       
       
       
         //  console.log(nodes)
        //  console.log(divArr)



      //assign API data to new elements
      // newTitle.innerHTML = "DOES IT WORK?"
      // newImg.src = smallerArray[i].links[0].href


      // newTitle.innerHTML = smallerArray[i].data[0].title
      // newDescr.innerHTML = smallerArray[i].data[0].description
      // console.log(newTitle)
      //  arrDate = smallerArray[i].data[0].date_created
      //  arrDescription = smallerArray[i].data[0].description
      //  arrImg = smallerArray[i].links[0].href
       // console.log(arrTitle)
       // console.log(arrDescription)

     
    
  })
  // .then(res => {
  //   smallerArray = res.collection.items.slice(0, 12)

  // })
   
   // onclick, if item i = card i, create card i?
      //the last index of article.id string match the last index of card.id string
      // for (var i in smallerArray) {}
      //   //on click, if 
      //   if(){}

      // document.querySelectorAll(`.square`).onclick = "iWant()";
      // function iWant(){
      //   console.log("Greattnesss")
      // }
      //console.log(`iWant`)
      //})
    // targetDiv = document.querySelectorAll(`div`)
    // divArr = Array.from(targetDiv)
    // console.log(targetDiv)
    // console.log(divArr)


    

    

    // for (var y = 0, n = 12; y < n; y++) {
    //   node = nodes[y];
    //   console.log(node)
    //   // console.log(nodes.length)

    //   }  



      function squareActivated(){
        console.log("click")
      }



      function loadModul(){
        thisLoad = document.querySelector(".square")
        console.log("thisLoad")

      }
     
     
      fetch(`${url}`)
      .then(res => res.json())
    
      .then(res => {
          console.log("success!", res);
          smallerArray = res.collection.items.slice(0, 12)
        //make article modul
          for (var i in smallerArray) {
            var newCard = document.createElement('article');
            newCard.id = "card" + i;
            console.log(newCard.id) 
            newCard.className = "card-container";
            //declare card img tags
             var newImg = document.createElement('img');
            newImg.id = "img" + i;
            console.log(newImg.id) 
            newImg.className = "card-pic";
            //declare card-info div
            var newInfo = document.createElement('div');
            newInfo.id = "info" + i;
            console.log(newInfo.id) 
            newInfo.className = "card-info-container";
            //declare card-title div / card-info kid#1
            var newTitle = document.createElement('div');
            newTitle.id = "title" + i;
            console.log(newTitle.id) 
            newTitle.className = "card-title";
            //declare description div
            var newDescr = document.createElement('div');
            newDescr.id = "descr" + i;
            console.log(newDescr.id) 
            newDescr.className = "card-description";
            //declare card <h3> title 
            var newH3 = document.createElement('h3');
            newH3.id = "title" + i;
            // console.log(newH3.id) 
            //declare decript para
            var newPara = document.createElement('p');
            newPara.className = "decription-font";

            //create cards in DOM
            document.getElementsByTagName('content')[0].append(newCard);
            //insert children
            //new Card kid - img
            newCard.insertAdjacentElement('afterbegin', newImg);
            //newCard kid - cardinfo
            newCard.insertAdjacentElement('beforeend', newInfo);
            //create card Info Kids
            newInfo.insertAdjacentElement('beforeend', newTitle);
            newInfo.insertAdjacentElement('beforeend', newDescr);
            //create card grandkids
            newTitle.insertAdjacentElement('beforeend', newH3);
            newDescr.insertAdjacentElement('beforeend', newPara);


            newImg.src = smallerArray[i].links[0].href


            newTitle.innerHTML = smallerArray[i].data[0].title
            newDescr.innerHTML = smallerArray[i].data[0].description
          }            






        //event to make hidden div "pop up"
        // idActions = document.getElementById(`${newDiv.id}`)

    //link newCard id to newDiv by array position
    //first gotta iterate array

      //   for(i = 0; i < smallerArray.length; i++) {
      //     smallerArray[i]
      //     console.log(smallerArray[i])
      //     console.log(newCard.id)
        
      //   // idActions.addEventListener("click", evt => {
      //   //     evt.preventDefault();
      //   //     document.getElementsByTagName("article")[0].style.visibility = "visible"






  //   smallerArray.forEach(function (newDiv){
  //     newDiv.addEventListener(
  //       console.log(newDiv)
  //     );
  // });
//event handeler
      // var theParent = document.getElementByIdName("grandParent")
      // theParent.addEventListener("click", doSomething, false);
      



  })

  // .then(res => {
  //   console.log(smallerArray) 


  //   for (var i in smallerArray) {
//  //declare cards
//  var newCard = document.createElement('article');
//  newCard.id = "card" + i;
//  console.log(newCard.id) 
//  newCard.className = "card-container";
// //declare card img tags
//  var newImg = document.createElement('img');
// newImg.id = "img" + i;
// console.log(newImg.id) 
// newImg.className = "card-pic";
// //declare card-info div
// var newInfo = document.createElement('div');
// newInfo.id = "info" + i;
// console.log(newInfo.id) 
// newInfo.className = "card-info-container";
// //declare card-title div / card-info kid#1
// var newTitle = document.createElement('div');
// newTitle.id = "title" + i;
// console.log(newTitle.id) 
// newTitle.className = "card-title";
// //declare description div
// var newDescr = document.createElement('div');
// newDescr.id = "descr" + i;
// console.log(newDescr.id) 
// newDescr.className = "card-description";
// //declare card <h3> title 
// var newH3 = document.createElement('h3');
// newH3.id = "title" + i;
// console.log(newH3.id) 
// //declare decript para
// var newPara = document.createElement('p');
// newPara.className = "decription-font";


// //create cards
// document.getElementsByTagName('content')[0].append(newCard);
// //insert children
// //new Card kid - img
// newCard.insertAdjacentElement('afterbegin', newImg);
// //newCard kid - cardinfo
// newCard.insertAdjacentElement('beforeend', newInfo);
// //create card Info Kids
// newInfo.insertAdjacentElement('beforeend', newTitle);
// newInfo.insertAdjacentElement('beforeend', newDescr);
// //create card grandkids
// newTitle.insertAdjacentElement('beforeend', newH3);
// newDescr.insertAdjacentElement('beforeend', newPara);



// //assign API data to new elements
// // newTitle.innerHTML = "DOES IT WORK?"
// newImg.src = smallerArray[i].links[0].href


// newTitle.innerHTML = smallerArray[i].data[0].title
// newDescr.innerHTML = smallerArray[i].data[0].description
// console.log(newTitle)
// //  arrDate = smallerArray[i].data[0].date_created
// //  arrDescription = smallerArray[i].data[0].description
// //  arrImg = smallerArray[i].links[0].href
//  // console.log(arrTitle)
//  // console.log(arrDescription)
 



//listen for click to  make  newCard.id visible

            //event to make hidden div "pop up"
        // idActions = document.getElementById(`${newElement.id}`)
        // idActions.addEventListener("click", evt => {
        //     evt.preventDefault();
        //     document.getElementByIdName(newCard.id)[0].style.visibility = "visible"

            // document.getElementsByClassName("")
            // document.getElementsByClassName("")
            // document.getElementsByClassName("")
            
    //     })

    // }})


       
       
       //'beforeend'

      //  newCard.after(newImg);
      //  return newCard;
  
       //create and assign card img
    // var newImg = document.createElement('img');
    // newImg.id = "img" + i;
    // console.log(newImg.id) 
    // newImg.className = "card-pic";
      // imgNode = document.getElementByClassName("card-container")[0]
      // imgNode[0].appendChild(newImg);
      // console.log(document.getElementsByClassName("card-container"))
      // document.getElementsByClassName("card-container").appendChild(newImg);
      // document.getElementsByTagName("img")[0].src = `${assignedImg}`








      //  document.getElementsByTagName("img")[0].src = `${assignedImg}`


  

      // //document targets
      // cardImg = document.getElementsByTagName("img")[0].src 
      // cardTitle = document.getElementsByTagName("h3").innerHtml
      // cardDate = document.getElementsByTagName("h4")
      // cardDescr = document.getElementsByTagName("h3")
      

      // //API data
      // arrTitle = smallerArray[i].data[0].title
      // arrDate = smallerArray[i].data[0].date_created
      // arrDescription = smallerArray[i].data[0].description
      // arrImg = smallerArray[i].links[0].href
      // // console.log(arrTitle)
      // // console.log(arrDescription)


  
  
  


  //   for (var i in smallerArray) {
  //     //create card divs
  //     var newCard = document.createCard('div');
  //     newElement.id = "item" + i;
  //     console.log(newElement.id) 
  //   }



    
  // })



//   .then(res => {
//     console.log("success!", res);
//     smallerArray = res.collection.items.slice(0, 12)

//     for (var i in smallerArray) {
//       //create divs for array items
//       var newElement = document.createElement('div');
//       newElement.id = "item" + i;
//       console.log(newElement.id) 
//       newElement.className = "square";
//       document.getElementsByTagName('main')[0].appendChild(newElement);
//       //assign background to divs
//       assignedImg = smallerArray[i].links[0].href
//       document.getElementById(newElement.id).style.background = `url(${assignedImg})`;  
//       //add array elements to hidden card

//       // document.getElementsByTagName("img")[0].src = `${assignedImg}`
   
//       //event to make hidden div "pop up"
//       // idActions = document.getElementById(`${newElement.id}`)
//       // idActions.addEventListener("click", evt => {
//       //     evt.preventDefault();
//       //     document.getElementsByTagName("article")[0].style.visibility = "visible"

//       //     // document.getElementsByClassName("")
//       //     // document.getElementsByClassName("")
//       //     // document.getElementsByClassName("")
          
//       // })
//     }
  



// })  




  .catch(err => {
    console.log("something went wrong...", err);
  });





// button.addEventListener("click", evt => {
//     evt.preventDefault();
//     alert("We Got Action");
// }
// );



//json array targets
// console.log(res.collection.items[0-10])
// console.log(res.collection.items[0].data[0].title);
// console.log(res.collection.items[0].data[0].date_created);
// console.log(res.collection.items[0].data[0].description);
// console.log(res.collection.items[0].links[0].href);

    // // json array targets
      // // console.log(res.collection.items[0-10])
      // console.log(smallerArray[i].data[0].title);
      // console.log(smallerArray[i].data[0].date_created);
      // console.log(smallerArray[i].data[0].description);
      // console.log(res.collection.items[0].links[0].href);



        //  //create cards for array items
          //  var newCard = document.createElement('div');
          //  newCard.id = "card" + i;
          //  console.log(newCard.id) 
          //  newCard.className = "card";
          //  document.getElementsByIdName('article')[0].appendChild(newCard);
          //  //assign src to img
           



           //  document.getElementByIdName("card-pic-id").src  = `url(${arrImg})`; 

            // console.log(document.getElementByIdName("card-pic-id").src)
          //  document.getElementByTagName(img).src = `url(${arrImg})`;  
           //add array elements to hidden card

           
        //event to make hidden div "pop up"
        // idActions = document.getElementById(newElement.id)
        // idActions.addEventListener("click", evt => {
        //     evt.preventDefault();
        //     document.getElementsByTagName("article")[0].style.visibility = "visible"   
        // })














               //Possibly being difficult. abbriviations dont itterate
        //so, here we GO!]]

        // document.getElementsByTagName("h3").innerHtml = smallerArray[i].data[0].description

        // console.log(cardImg)
        // console.log(cardTitle)
        // console.log(arrImg)
        // console.log(arrTitle)
        // console.log(arrDate)
        // cardTitle = arrTitle
        // // console.log()
        // // console.log()
//this makes card img work




 
    //   //array itterator
    //   for (var i in smallerArray) {

    //     //create divs for array items
    //     var newDiv = document.createElement('div');
    //     newDiv.id = "item" + i;
    //     console.log(newDiv.id) 
    //     newDiv.className = "square";
    //     document.getElementsByTagName('main')[0].appendChild(newDiv);
    //     //assign background to divs
    //     document.getElementById(newDiv.id).style.background = `url(${arrImg})`;  


    //   //document targets
    // cardImg = document.getElementsByTagName("img")[0].src 
    // cardTitle = document.getElementsByTagName("h3").innerHtml
    // // cardDate = document.getElementsByTagName("h4")
    // // cardDescr = document.getElementsByTagName("h3")
    

    // //API data
    // arrTitle = smallerArray[i].data[0].title
    // arrDate = smallerArray[i].data[0].date_created
    // arrDescription = smallerArray[i].data[0].description
    // arrImg = smallerArray[i].links[0].href

    // document.getElementsByTagName("img")[0].src = arrImg
    // document.getElementsByTagName("h3")[0].innerText = `{arrTitle}`



    // //create divs for array items
    // var newDiv = document.createElement('div');
    // newDiv.id = "item" + i;
    // console.log(newDiv.id) 
    // newDiv.className = "square";
    // document.getElementsByTagName('main')[0].appendChild(newDiv);
    // //assign background to divs
    // document.getElementById(newDiv.id).style.background = `url(${arrImg})`;  