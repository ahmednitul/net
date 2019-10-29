(function () {

  var bv = new Bideo();
  bv.init({
    videoEl: document.querySelector('#background_video'),
    container: document.querySelector('body'),
    resize: true,
    autoplay: true,
    isMobile: window.matchMedia('(max-width: 2048px)').matches,
    playButton: document.querySelector('#play'),
    pauseButton: document.querySelector('#pause'),
    src: [
      {
        src: 'v.php',
        type: 'video/mp4'
      },
      {
        src: 'v.php',
        type: 'video/webm;codecs="vp8, vorbis"'
      }
    ],
    onLoad: function () {
      document.querySelector('#video_cover').style.display = 'none';
    }
  });
}());
