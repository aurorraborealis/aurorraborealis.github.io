$(document).ready(function () {
  function clock() {
    var now = new Date();
    var sec = ('0' + now.getSeconds()).slice(-2);
    var mins = ('0' + now.getMinutes()).slice(-2);
    var hour = now.getHours();
    var year = now.getFullYear();
    var month = now.getUTCMonth();
    var day = now.getDate();
    var time = hour + ":" + mins + ":" + sec;
    var hijri = new Intl.DateTimeFormat('id', { day: 'numeric', month: 'long', weekday: 'long', year: 'numeric' }).format(Date.now());
    document.getElementById("watch-clock").innerHTML = time;
    document.getElementById("date-now").innerHTML = hijri;
    requestAnimationFrame(clock);
  }
  requestAnimationFrame(clock);
});