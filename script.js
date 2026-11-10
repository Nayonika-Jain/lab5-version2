// Find the audio players, cards and message on the page
let audio = document.getElementById("soundscape");
let message = document.getElementById("message");
let metroAudio = document.getElementById("metroAudio");
let eveningAudio = document.getElementById("eveningAudio");
let morningCard = document.getElementById("morningCard");
let metroCard = document.getElementById("metroCard");
let eveningCard = document.getElementById("eveningCard");



function highlightScene(sceneNumber) {
  morningCard.className = "scene-card";
  metroCard.className = "scene-card";
  eveningCard.className = "scene-card";

  if (sceneNumber === 1) {
    morningCard.className = "scene-card active";}
  else if (sceneNumber === 2) {
    metroCard.className = "scene-card active";
  }
  else {
    eveningCard.className = "scene-card active";
  }
}

audio.addEventListener("play", function() {
  highlightScene(1);
  message.innerHTML = "Now experiencing a morning at India Gate.";
});


metroAudio.addEventListener("play", function() {
  highlightScene(2);
  message.innerHTML = "Now experiencing the commute using Delhi Metro.";
});


eveningAudio.addEventListener("play", function() {
  highlightScene(3);
  message.innerHTML = "Now experiencing the Red Fort at night.";
});
