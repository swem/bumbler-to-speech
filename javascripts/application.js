(function() {
  var AUDIO_MAP, speaker;

  AUDIO_MAP = {
    d1: {
      start: 0.45,
      duration: 0.5
    },
    d2: {
      start: 1.43,
      duration: 0.5
    },
    d3: {
      start: 2.65,
      duration: 0.5
    },
    d4: {
      start: 3.55,
      duration: 0.5
    },
    d5: {
      start: 4.9,
      duration: 0.5
    },
    d6: {
      start: 5.9,
      duration: 0.6
    },
    d7: {
      start: 6.7,
      duration: 0.55
    },
    d8: {
      start: 7.75,
      duration: 0.5
    },
    d9: {
      start: 8.77,
      duration: 0.53
    },
    d10: {
      start: 9.52,
      duration: 0.7
    },
    thank: {
      start: 10.73,
      duration: 1.55
    }
  };

  speaker = document.querySelector("#ma-speech");

  speaker.addEventListener('timeupdate', function(event) {
    return console.log(event.target.currentTime);
  });

  /*
  document.addEventListener 'click', (event) ->
    speaker.currentTime = AUDIO_MAP.d2.start
    speaker.play()
    setTimeout( ->
      speaker.pause()
      speaker.currentTime = AUDIO_MAP.d10.start
      speaker.play()
    , 500)
    setTimeout( ->
      speaker.pause()
      speaker.currentTime = AUDIO_MAP.d2.start
      speaker.play()
    , 1000)
    setTimeout( ->
      speaker.pause()
    , 1500)
  */


}).call(this);
