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
    document.body.style.background =
      "linear-gradient(227deg, rgba(0,255,162,1) 26%, rgba(0,255,64,1) 90%)";
  } else if (12 <= hr && hr < 18) {
    document.body.style.background =
    "linear-gradient(227deg, rgba(0,255,162,1) 26%, rgba(0,255,64,1) 90%)";
  } else {
    document.body.style.background =
    "linear-gradient(227deg, rgba(0,255,162,1) 26%, rgba(0,255,64,1) 90%)";
  }
});

// linear-gradient(34deg, rgba(0,8,163,1) 9%, rgba(1,3,77,1) 42%, rgba(0,0,0,1) 81%)
