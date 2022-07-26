const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
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
  });


//Video function

  let sideBar = document.querySelectorAll('.sidebar .vid')
  let mainVideo = document.querySelector('.main-video video')
  let videoTitle = document.querySelector('.main-video .video-title')
  
  sideBar.forEach(video =>{
    video.onclick = () => {
      sideBar.forEach(vid => vid.classList.remove('active'));
      video.classList.add('active')
      if(video.classList.contains('active')){
        let src = video.children[0].getAttribute('src')
        mainVideo.src = src;
        let text = video.children[1].innerHTML
        videoTitle.innerHTML = text;
      }
    }
  })


  