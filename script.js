const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  if (hr < 10) hr = "0" + hr;

  if (min < 10) min = "0" + min;

  if (s < 10) s = "0" + s;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = s;
  
  if (6 <= hr && hr < 12) {
    document.body.style.backgroundImage =
      "url(./img/1.wp7528738.jpg)"
      
  } else if (12 <= hr && hr < 18) {
    document.body.style.backgroundImage =
      "url(./img/wp7528778.jpg)";
      
  } else {
    document.body.style.backgroundImage =
    "url(./img/unnamed.jpg)"
  }
});

// linear-gradient(34deg, rgba(0,8,163,1) 9%, rgba(1,3,77,1) 42%, rgba(0,0,0,1) 81%)
// "linear-gradient(34deg, rgba(255,0,0,1) 5%, rgba(255,85,0,1) 32%, rgba(255,226,0,1) 91%)";
 // "linear-gradient(34deg, rgba(0,3,50,1) 52%, rgba(207,23,23,1) 85%, rgba(255,154,0,1) 100%)";