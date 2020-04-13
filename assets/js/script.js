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
    var hijri = new Intl.DateTimeFormat('en-TN-u-ca-islamic', { day: 'numeric', month: 'long', weekday: 'long', year: 'numeric' }).format(Date.now());
    var masehi = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'long', weekday: 'long', year: 'numeric' }).format(Date.now());
    
    document.getElementById("watch-clock").innerHTML = time;
    document.getElementById("date-hijri").innerHTML = hijri;
    document.getElementById("date-masehi").innerHTML = masehi;
    requestAnimationFrame(clock);
  }
  requestAnimationFrame(clock);
});