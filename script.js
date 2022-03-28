//var get url API
var randomDog = 'https://dog.ceo/api/breeds/image/random';

//using fetch
//function to get the quotes from the API url
function getDog() {
    //use fetch
    fetch(randomDog)
    //waiting the promise and convert in json
    .then( response => response.json())
    //how the random dog is in the messages part of json, used it
    .then(data => displayDog(data.message))
    //cathe if are errors
    .catch( function () {
        console.log(data.status);
    })
}

//function to display the dog
function displayDog(dog) {
    var fetchDog = document.querySelector('.fetch-dog');
    //how the img tag not have src url we need add this get from the API
    fetchDog.src = dog;
}

//var for target html button
var newDogButton = document.querySelector('.new-dog');
//event for the button
newDogButton.addEventListener('click', getDog);

//call the function to get firts quote
getDog();
//otra solucion mas corta
// var image = document.querySelector('.fetch-dog');
// function fetchDog() {
//   console.log("click registerd")
//   console.log(image);
//   fetch('https://dog.ceo/api/breeds/image/random').then(response => {
//   return response.json();  
//   }).then(jsonResponse => {
//     image.src=jsonResponse.message;
//   })
// }