(function (window) {
helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}
window.helloSpeaker = helloSpeaker;

})(window);