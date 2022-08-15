var btniniciar = document.querySelector("#iniciar")
    btniniciar.addEventListener("click", playOrPause)
var reproduciendose = 0;
var audio = new Audio("sound/game-song.mp3");
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

var btnanhadir = document.querySelector("#btnanhadir")
    btnanhadir.addEventListener("click", playOrPause2);
      function playOrPause2() {
       var audio = new Audio("sound/tcmbr.mp3");
      reproduciendose = reproduciendose + 1;
      if (reproduciendose == 1) {
        audio.play();
      }
      return(reproduciendose);
      }