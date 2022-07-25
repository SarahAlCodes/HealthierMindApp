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

const cards = document.querySelectorAll('.card');
[...cards].forEach((card)=>{
    card.addEventListener('click', () =>{
        card.classList.toggle('is-flipped')
    })
});


// function play() {
//   audio.play();
// }
// document.querySelector('.fa-pause').addEventListener('click', pause)
// function pause() {
//   audio.pause();
// }