const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#min");
const sc = document.querySelector("#sec");
setInterval(() => {
 let day = new Date();
 let hh = day.getHours() * 30;
 let mm = day.getMinutes() * deg;
 let ss = day.getSeconds() * deg;
 hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
 mn.style.transform = `rotateZ(${mm}deg)`;
 sc.style.transform = `rotateZ(${ss}deg)`;
})


function initLocalClocks() {
 // Get the local time using JS
 var date = new Date;
 var seconds = date.getSeconds();
 var minutes = date.getMinutes();
 var hours = date.getHours();
 var hands = [
   {
     hand: 'hr',
     angle: (hr * 30) + (min / 2)
   },
   {
     hand: 'mn',
     angle: (mn * 6)
   },
   {
     hand: 'sc',
     angle: (sc * 6)
   }
 ];
 for (var j = 0; j < hands.length; j++) {
   var elements = document.querySelectorAll('.' + hands[j].hand);
   for (var k = 0; k < elements.length; k++) {
       elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
       elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
       // If this is a minute hand, note the seconds position (to calculate minute position later)
       if (hands[j].hand === 'mn') {
         elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
       }
   }
 }
}