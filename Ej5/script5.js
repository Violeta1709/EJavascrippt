const meses = [
    "ENERO",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const semanas = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "viernes",
    "Sabado",
  ];
  const regalo = document.querySelector(".regalo");
  const plazo = document.querySelector(".plazo");
  const items = document.querySelectorAll(".formato-plazo h4");
  
  // months are ZERO index based;
  
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMes = tempDate.getMonth();
  let tempDia = tempDate.getDate();
  
  // let futureDate = new Date(2020, 3, 24, 11, 30, 0);
  const futureDate = new Date(tempYear, tempMes, tempDia + 10, 11, 30, 0);
  
  const year = futureDate.getFullYear();
  const horas = futureDate.getHours();
  const minutos = futureDate.getMinutes();
  let mes = futureDate.getMonth();
  
  mes = meses[mes];
  const semana = semanas[futureDate.getDay()];
  const date = futureDate.getDate();
  regalo.textContent = `El sorteo termina el ${semana}, ${date} ${mes} ${year} ${horas}:${minutos}am`;
  
  const futureTime = futureDate.getTime();
  function getRemaindingTime() {
    const today = new Date().getTime();
  
    const t = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    const unDia = 24 * 60 * 60 * 1000;
    const unaHora = 60 * 60 * 1000;
    const unMinuto = 60 * 1000;
    // calculate all values
    let days = t / unDia;
    days = Math.floor(days);
    let hours = Math.floor((t % unDia) / unaHora);
    let minutes = Math.floor((t % unaHora) / unMinuto);
    let seconds = Math.floor((t % unMinuto) / 1000);
  
    // set values array
    const values = [days, hours, minutes, seconds];
    function format(item) {
      if (item < 10) {
        return (item = `0${item}`);
      }
      return item;
    }
  
    items.forEach(function (item, index) {
      item.innerHTML = format(values[index]);
    });
  
    if (t < 0) {
      clearInterval(countdown);
      deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
    }
  }
  // countdown;
  let countdown = setInterval(getRemaindingTime, 1000);
  //set initial values
  getRemaindingTime();
  