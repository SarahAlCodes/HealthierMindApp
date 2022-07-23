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


// function play() {
//   audio.play();
// }
// document.querySelector('.fa-pause').addEventListener('click', pause)
// function pause() {
//   audio.pause();
// }

const cards = document.querySelectorAll('.card');
[...cards].forEach((card)=>{
    card.addEventListener('click', () =>{
        card.classList.toggle('is-flipped')
    })
});

// function myFunction() {
//     let x = document.querySelector(".nav__list");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }

const icon = document.getElementsByClassName('icon')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

icon.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})
