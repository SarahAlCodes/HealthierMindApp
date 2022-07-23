const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  
  
  //Video Pause play function
  const video = document.getElementById("video");
  document.querySelector('.pauplay').addEventListener('click', playPause)
  function playPause() {
      if (video.paused === true){
          video.play();
        }
      else{
          video.pause();
        }
  }