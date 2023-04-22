 var messages = [
  "A brief respite from the world wide web awaits you here.",
  "Find solace here before continuing your online odyssey.",
  "Rest here a while before journeying to your next site.",
  "Recharge before clicking onward.",
  "Take a peaceful pause in your browsing journey.",
  "Stay a while before exploring the digital expanse.",
  "Relax and soak up the digital scenery.",
  "Reflect before surfing the ocean of information.",
  "Enjoy this serene space before returning to cyberspace.",
  "Savor the stillness of this pixel oasis.",
  "Rest your mind in this serene corner of the web.",
  "Pause your browsing in this virtual haven.",
  "Find sanctuary in this online nook.",
  "Rest here and find solace in this digital landscape.",
  "Embrace tranquility in this cozy digital corner.",
  "Take a moment to unwind amid the vast online wilderness.",
  "Allow yourself a calming interlude in your web exploration.",
  "Breathe in the quiet of this digital refuge.",
  "This gentle haven offers a brief respite from the bustling internet.",
  "Pause and collect your thoughts in this peaceful digital alcove.",
  "Unwind in this serene pocket of the internet.",
  "Enjoy a moment of stillness in this comforting online hideaway.",
  "Revel in the simplicity of this quiet online retreat.",
  "Indulge in a moment of serenity amid the digital chaos.",
  "Take a break from your online journey and rest in this calming nook."
];

function getRandomMessage() {
  var randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

var repoName = 'https://onlineinternet.github.io/rpgstart';
var imageURLs = [];

for (var i = 1; i <= 20; i++) {
  var formattedNumber = ('0' + i).slice(-2);
  imageURLs.push(repoName + '/images/campfire' + formattedNumber + '.gif');
}

function setImageBackground() {
  var randomIndex = Math.floor(Math.random() * imageURLs.length);
  document.body.style.backgroundImage = "url('" + imageURLs[randomIndex] + "')";
}

window.onload = function() {
  setImageBackground();

  // Set the random message
  var messageElem = document.querySelector("#random-message");
  if (messageElem) {
    messageElem.innerText = getRandomMessage();
  }
};
