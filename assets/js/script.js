$(document).ready(function(){
  function clock(){
    var now = new Date();
    var sec = ('0' + now.getSeconds()).slice(-2);
    var mins = ('0' + now.getMinutes()).slice(-2);
    var hour = now.getHours();
    var time = hour + ":" + mins + ":" + sec;
    document.getElementById("watch-clock").innerHTML = time;
    requestAnimationFrame(clock);
  }
  requestAnimationFrame(clock);
});