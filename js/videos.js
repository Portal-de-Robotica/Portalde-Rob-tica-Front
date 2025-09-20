// Somente vídeos que NÃO estão dentro do carrossel
document.querySelectorAll("video:not(#carouselVideos video)").forEach(video => {
  video.addEventListener("mouseenter", () => {
    video.play();
  });
  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});
