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
    for (let i = 0; i < smallerArray.length; i++){
      console.log(smallerArray[i])


        //make divs of square imgs


        //create divs for array items
        var newDiv = document.createElement('div');
       
        newDiv.id = "item0" + i;
        // console.log(newDiv.id) 
        newDiv.className = "square";
        document.getElementsByTagName('main')[0].appendChild(newDiv);
        //adding onclick
        // document.getElementById(newDiv.id)[i].onclick = "squareActivated";
        
        //assign background to divs
        assignedImg = smallerArray[i].links[0].href
        document.getElementById(newDiv.id).style.background = `url(${assignedImg})`;







        //create article modal


        var overFlow = document.createElement('div');
        overFlow.className = "over-flow"


        var newCard = document.createElement('article');
        newCard.id = "card0" + i;
        console.log(newCard.id) 
        newCard.className = "card-container";
        //declare card img tags
         var newImg = document.createElement('img');
        newImg.id = "img" + i;
        cubeId = newImg.id
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



        // // document.getElementsByTagName('body')[0].append(overFlow);
        // contentEle = document.querySelector('.over-flow')





        // // overFlow.insertAdjacentElement("afterbegin", contentEle);

        // //create cards in DOM
        // console.log(contentEle)
        // document.getElementsByTagName('content')[0].append(newCard);

        document.querySelector('.over-flow').append(newCard);
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



        document.querySelectorAll(`div`)[i].addEventListener("click", function(){
          clickDiv = `0${i}`
          // console.log(clickDiv)
          // console.log(document.querySelectorAll(`div`)[i])
          if (clickDiv == 012){
            console.log(document.querySelectorAll(`article`)[10])
            document.querySelectorAll(`article`)[10].style.visibility = "visible"
            document.querySelector(`.over-flow`).style.visibility = "visible"
          } 
          if (clickDiv == 013){
            console.log(document.querySelectorAll(`article`)[11])
            document.querySelectorAll(`article`)[11].style.visibility = "visible"
            document.querySelector(`.over-flow`).style.visibility = "visible"
          } 
          else if (clickDiv == document.querySelectorAll(`article`)[i].id.substr(-2)) {
            console.log(document.querySelectorAll(`article`)[i])
            document.querySelectorAll(`article`)[i].style.visibility = "visible"
            document.querySelector(`.over-flow`).style.visibility = "visible"
            console.log(document.querySelectorAll(`article`)[i])

            // .substr(-2)
          }
         

          })

          // document.querySelector(`#item010`).addEventListener("click", function(){
          //   i = 10
          //   clickDiv = `0${i}`
          //   console.log(clickDiv)
          //   if (clickDiv == document.querySelectorAll(`article`)[i].id.substr(-2)) {
          //     document.querySelectorAll(`article`)[i].style.visibility = "visible"
          //     document.querySelector(`.over-flow`).style.visibility = "visible"
  
          //   } 
  
          //   })


            // document.querySelectorAll(`div`)[i].addEventListener("click", function(){
            //   clickDiv = `0${i}`
            //   console.log(clickDiv)
            //   if (clickDiv == document.querySelectorAll(`article`)[i].id.substr(-2)) {
            //     document.querySelectorAll(`article`)[i].style.visibility = "visible"
            //     document.querySelector(`.over-flow`).style.visibility = "visible"
    
            //   } 
    
            //   })

          document.querySelector(`.over-flow`).onclick = function(event) {

            if (event.target == document.querySelector(`.over-flow`)) {
              // var openModal = document.querySelectorAll('card-container')[i]

              // document.querySelectorAll('article')[i].style.visibility = "hidden";
              // console.log("this hppened")
              // console.log(openModal)
              // console.log(document.querySelectorAll('.card-container'))
              document.querySelectorAll(`article`)[0].style.visibility = "hidden"
              document.querySelectorAll(`article`)[1].style.visibility = "hidden"
              document.querySelectorAll(`article`)[2].style.visibility = "hidden"
              document.querySelectorAll(`article`)[3].style.visibility = "hidden"
              document.querySelectorAll(`article`)[4].style.visibility = "hidden"
              document.querySelectorAll(`article`)[5].style.visibility = "hidden"
              document.querySelectorAll(`article`)[6].style.visibility = "hidden"
              document.querySelectorAll(`article`)[7].style.visibility = "hidden"
              document.querySelectorAll(`article`)[8].style.visibility = "hidden"
              document.querySelectorAll(`article`)[9].style.visibility = "hidden"
              document.querySelectorAll(`article`)[10].style.visibility = "hidden"
              document.querySelectorAll(`article`)[11].style.visibility = "hidden"
              document.querySelector(`.over-flow`).style.visibility = "hidden"


              console.log("click")
            
            }
            else {
              console.log("not target")
            }
        }





















   




        var selectedModal = document.querySelectorAll('article')[i]
        var selectedSquare = document.querySelectorAll(`div`)[i]

        // console.log(document.querySelectorAll(`div`)[i].id.substr(-2))
        // console.log(document.querySelectorAll(`article`)[i].id.substr(-2))

        console.log(selectedModal)
        console.log(selectedSquare)
        console.log(`0${i}`)








            

        // document.querySelectorAll(`article`)[i].addEventListener("click", function(event) {
        //   var openModal = document.querySelectorAll('article')[i]

        //   if (event.target == document.querySelectorAll('article')[i]) {
        //     var openModal = document.querySelectorAll('article')[i]
        //     console.log(openModal)
        //     // openModal.style.visibility = "hidden"
        //     console.log("this hppened")
        //   }
        //   else {
        //     // openModal.style.visibility = "hidden"
        //     console.log("this ddnt hppened")

        //   }

        // })

        // document.querySelectorAll(`article`)[i].addEventListener("click", function(event) {
        //   var openModal = document.querySelectorAll('article')[i]

        //   if (event.target != document.querySelector('body')) {
        //     var openModal = document.querySelectorAll('article')[i]
        //     console.log(openModal)
        //     // openModal.style.visibility = "hidden"
        //     console.log("this hppened")
        //   }
        //   else {
        //     // openModal.style.visibility = "hidden"
        //     console.log("this ddnt hppened")

        //   }

        // })










        // window.onclick = function(event) {
        //     var openModal = document.querySelectorAll('card-container')[i]

        //     if (event.target == openModal) {
        //       var openModal = document.querySelectorAll('card-container')[i]

        //       document.querySelectorAll('article')[i].style.visibility = "hidden";
        //       console.log("this hppened")
        //       console.log(openModal)
        //       console.log(document.querySelectorAll('.card-container'))

        //     }
        // }











        // var openModal = document.querySelectorAll('article')[i]

     




       
      //   ACTIVATED BY ANY CLICK ON BODY 
      //   window.onclick = function(event) {
      //     var openModal = document.querySelectorAll('article')[i]

      //     if (event.target != openModal) {
      //       openModal.style.visibility = "hidden";
      //       console.log("this hppened")

      //     }
      // }
          
          // document.querySelectorAll(`article`)[i].addEventListener("click", function(event) {
          //   var openModal = document.querySelectorAll('article')[i]

          //   if (event.target == openModal) {
          //     // openModal.style.visibility = "hidden"
          //     console.log("this hppened")
          //   }
          //   else {
          //     openModal.style.visibility = "hidden"

          //   }

          // })








        //on click actions

        // var selectedSquare = document.querySelectorAll(`div`)[i]
        // console.log(selectedSquare)

        // var selectedModal = document.querySelectorAll('article')[i]
        // console.log(selectedModal)

        // selectedSquare.addEventListener("click", function(){
        //       //  document.getElementById(nodes[i].id)
                
        //         console.log(selectedSquare)
        //       })
      
      
      }



      // var openModal = document.querySelectorAll('article')

      // document.querySelectorAll('article').addEventListener("click", function(event) {

      //   if (event.target == openModal) {
      //     // var openModal = document.querySelectorAll('article')[i]
      //     console.log(openModal)
      //     // openModal.style.visibility = "hidden"
      //     console.log("this hppened")
      //   }
      //   else {
      //     // openModal.style.visibility = "hidden"
      //     console.log("this ddnt hppened")

      //   }

      // })


      // var modal = document.querySelectorAll('article');
      // console.log(modal)

      // modal.addEventListener("click", function(event) {
      //   if (event.target == document.querySelectorAll('article')) {
      //     // modal.style.display = "none";
      //     console.log("thats a click")
      // }

      //         }        )

    //   window.onclick = function(event) {
    //     if (event.target == modal) {
    //         // modal.style.display = "none";
    //         console.log("thats a click")

    //     }
    // }































          // var openModal = document.querySelectorAll(`article`)[i].addEventListener("click", function(event) {
          //   if (event.target == openModal) {
          //     openModal.style.visibility = "hidden"
          //   }
          // })
          // console.log(openModal)

          // // When the user clicks anywhere outside of the modal, close it
          // window.onclick = function(event) {
          //   if (event.target == openModal) {
          //     openModal.style.visibility = "hidden"
          //   }
          // }

          // var selectedModal = document.querySelectorAll('article')[i]
          // var selectedSquare = document.querySelectorAll(`div`)[i]

          // console.log(document.querySelectorAll(`div`)[i].id.substr(-2))
          // console.log(document.querySelectorAll(`article`)[i].id.substr(-2))

          // console.log(selectedModal)
          // console.log(selectedSquare)
          // console.log(`0${i}`)







        // var nodes = document.querySelectorAll('div')
        // console.log(nodes)
        //  divArr = Array.from(nodes)
        //  for (var i = 0, n = nodes.length; i < n; i++) {
        //     node = nodes[i]
        //     console.log(node)

        //                 document.getElementById(nodes[i].id)
        //                 console.log(nodes[i].id)
        //                 tarSqId = [nodes[i].id]
        //                 console.log(tarSqId)

        //     document.getElementById(nodes[i].id).addEventListener("click", function(){
        //     //  document.getElementById(nodes[i].id)
              
        //       console.log(tarSqId)
        //     })
        //     // console.log(nodes[i].id)
        //     // tarSqId = [nodes[i].id]
        //     // console.log(tarSqId)



          // }
       
       


     
  //     fetch(`${url}`)
  //     .then(res => res.json())
    
  //     .then(res => {
  //         console.log("success!", res);
  //         smallerArray = res.collection.items.slice(0, 12)
  //       //make article modul
  //         for (var i in smallerArray) {
  //           var newCard = document.createElement('article');
  //           newCard.id = "card" + i;
  //           console.log(newCard.id) 
  //           newCard.className = "card-container";
  //           //declare card img tags
  //            var newImg = document.createElement('img');
  //           newImg.id = "img" + i;
  //           console.log(newImg.id) 
  //           newImg.className = "card-pic";
  //           //declare card-info div
  //           var newInfo = document.createElement('div');
  //           newInfo.id = "info" + i;
  //           console.log(newInfo.id) 
  //           newInfo.className = "card-info-container";
  //           //declare card-title div / card-info kid#1
  //           var newTitle = document.createElement('div');
  //           newTitle.id = "title" + i;
  //           console.log(newTitle.id) 
  //           newTitle.className = "card-title";
  //           //declare description div
  //           var newDescr = document.createElement('div');
  //           newDescr.id = "descr" + i;
  //           console.log(newDescr.id) 
  //           newDescr.className = "card-description";
  //           //declare card <h3> title 
  //           var newH3 = document.createElement('h3');
  //           newH3.id = "title" + i;
  //           // console.log(newH3.id) 
  //           //declare decript para
  //           var newPara = document.createElement('p');
  //           newPara.className = "decription-font";

  //           //create cards in DOM
  //           document.getElementsByTagName('content')[0].append(newCard);
  //           //insert children
  //           //new Card kid - img
  //           newCard.insertAdjacentElement('afterbegin', newImg);
  //           //newCard kid - cardinfo
  //           newCard.insertAdjacentElement('beforeend', newInfo);
  //           //create card Info Kids
  //           newInfo.insertAdjacentElement('beforeend', newTitle);
  //           newInfo.insertAdjacentElement('beforeend', newDescr);
  //           //create card grandkids
  //           newTitle.insertAdjacentElement('beforeend', newH3);
  //           newDescr.insertAdjacentElement('beforeend', newPara);


  //           newImg.src = smallerArray[i].links[0].href


  //           newTitle.innerHTML = smallerArray[i].data[0].title
  //           newDescr.innerHTML = smallerArray[i].data[0].description
  //         }            





  // })





  // function squareActivated(){
  //   console.log("click")
  // }



  // function loadModul(){
  //   thisLoad = document.querySelector(".square")
  //   console.log("thisLoad")

  // }
 








       
       
       
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




  // .catch(err => {
  //   console.log("something went wrong...", err);
  // });





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