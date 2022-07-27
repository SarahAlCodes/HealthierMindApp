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
  let mainVideo = document.querySelector('.main-video iframe')
  let videoTitle = document.querySelector('.main-video .video-title')
  
  sideBar.forEach(iframe =>{
    iframe.onclick = () => {
      sideBar.forEach(vid => vid.classList.remove('active'));
      iframe.classList.add('active')
      if(iframe.classList.contains('active')){
        let src = iframe.children[0].getAttribute('src')
        mainVideo.src = src;
        let text = iframe.children[1].innerHTML
        videoTitle.innerHTML = text;
      }
    }
  })


  