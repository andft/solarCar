const videos = document.querySelectorAll('.img-placeholder');

videos.forEach(video => {
  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      video.loop = true;
    } else {
      video.pause();
    }
  });
});