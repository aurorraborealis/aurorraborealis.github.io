// ALL SOURCODE IN GUTHUB AurorraY
function toggle(){
  let curtain = document.getElementById('curtain');
  curtain.classList.toggle('active')
}

$(document).ready(function () {
  
  function clock() {
    let now = new Date();
    let sec = ('0' + now.getSeconds()).slice(-2);
    let mins = ('0' + now.getMinutes()).slice(-2);
    let hour = now.getHours();
    let year = now.getFullYear();
    let month = now.getUTCMonth();
    let day = now.getDate();
    let time = hour + ":" + mins + ":" + sec;
    let hijri = new Intl.DateTimeFormat('en-TN-u-ca-islamic', { day: 'numeric', month: 'long', weekday: 'long', year: 'numeric' }).format(Date.now());
    let masehi = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'long', weekday: 'long', year: 'numeric' }).format(Date.now());
    
    document.getElementById("watch-clock").innerHTML = time;
    document.getElementById("date-hijri").innerHTML = hijri;
    document.getElementById("date-masehi").innerHTML = masehi;
    requestAnimationFrame(clock);
  }
  requestAnimationFrame(clock);
  
  jQuery(function ($) {
    $.getJSON('https://muslimsalat.com/bandung/daily.json?key=b3cf4d0f3a61aef91eb32415b6ceefc9&jsoncallback=?', function (times) {
      $('.prayerTimes')
        .append('Today in ' + times.title)
        .append(' Fajr: ' + times.items[0].fajr)
        .append(' Dhuhr: ' + times.items[0].dhuhr)
        .append(' Asr: ' + times.items[0].asr)
        .append(' Maghrib: ' + times.items[0].maghrib)
        .append(' Isha: ' + times.items[0].isha)
        .append(' by MuslimSalat.com');
    });
  });



});