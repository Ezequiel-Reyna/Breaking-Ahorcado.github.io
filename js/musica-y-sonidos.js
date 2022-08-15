var btniniciar = document.querySelector("#iniciar")
    btniniciar.addEventListener("click", playOrPause)
var reproduciendose = 0;
var audio = new Audio("sound/untitled.mp3");
function playOrPause() {
reproduciendose = reproduciendose + 1;
if (reproduciendose == 1) {
  audio.play();
  audio.loop=true;
} else {
  audio.pause();
  reproduciendose = 0;
}
return(reproduciendose);
}
