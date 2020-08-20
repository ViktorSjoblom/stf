const video = document.getElementById("video");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");

playButton.addEventListener("click", function () {
  video.play();
});

pauseButton.addEventListener("click", function () {
  video.pause();
});
