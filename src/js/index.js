import model from './model';
import router from './router';
import view from './view';

/**
  * Main app object
  *
  */
let app = {};

/**
 * init - Initialize the application
 *
 */
app.init = function() {
	model.init();
	router.init();
	view.init();
};

app.init();

//museum api calls
//FYI this is a different key
// Api Key 859fc9c0-b2e4-11e9-870c-63b3864eb9ca
const key = '859fc9c0-b2e4-11e9-870c-63b3864eb9ca'

//https://api.harvardartmuseums.org/object?q=totalpageviews:0&size=1&apikey=5c335e70-a3d6-11e9-94bb-f30da93ec338


//get painting api call
const getPainting = async () => {
  const baseUrl = 'https://api.harvardartmuseums.org/';
  const query = `object?q=classification:Painting&size=1&&sort=random&hasimage=1&apikey=${key}`;

  const response = await fetch(baseUrl + query);
  const data = await response.json();
  
  return data.records[0].images[0].baseimageurl;
}


  
const discoverBtn= document.querySelector('#discoverBtn');
const imageCard = document.querySelector('#imageCard');
const museumImage = document.querySelector('#museumImage');
//on click button add painting to placeholder area
discoverBtn.addEventListener("click", function(e){
  e.preventDefault();
  getPainting()
  .then(data => museumImage.setAttribute('src',data))
  .catch(err => console.log(err));
 
})

//Firebase/Firestore Database

//Firebase-firestore key below
var firebaseConfig = {
  apiKey: "AIzaSyDRi3srKe7hNPvW31HZWzklUEtw0HPSTXo",
  authDomain: "impressions-prototype.firebaseapp.com",
  databaseURL: "https://impressions-prototype.firebaseio.com",
  projectId: "impressions-prototype",
  storageBucket: "",
  messagingSenderId: "1092943872445",
  appId: "1:1092943872445:web:413024422bce97b6"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig); 
var firestore = firebase.firestore();

const docRef = firestore.doc("impressions/testDoc");  
const commentText = document.querySelector("#comment");
const submitButton = document.querySelector("#submit");
const commentOutput =document.querySelector("#commentSaved");

//On submit comment in box is saved to database
submitButton.addEventListener("click", function(e){
  const commentToSave = commentText.value;
  e.preventDefault();
  console.log(commentToSave);
  docRef.set({
    comment: commentToSave
  }).then(function(){
    console.log("comment saved!");
  }).catch(function(err){
    console.log("Got an error");
  });
})
//database updates and outputs to "Your Impressions" card
getRealtimeUpdates = function() {
  docRef.onSnapshot(function(doc) {
    if (doc && doc.exists) {
      const myData = doc.data();
      commentOutput.innerText = myData.comment;
    }
  });
}

getRealtimeUpdates();
