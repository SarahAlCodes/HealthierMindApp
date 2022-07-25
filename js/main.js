const cards = document.querySelectorAll('.card');
[...cards].forEach((card)=>{
    card.addEventListener('click', () =>{
        card.classList.toggle('is-flipped')
    })
});


// play/pause background audio
const audio = document.getElementById("audio");
document.querySelector('.fa-circle-play').addEventListener('click', playPause)
function playPause() {
  if (audio.paused === true){
      audio.play();
    }
  else{
      audio.pause();
    }
}

