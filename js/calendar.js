$(function() {

  // La página ya está lista, inicializa el calendario ...

  $('#calendar').fullCalendar({
    // ponga sus opciones y devoluciones de llamada aquí
      events: [
      {
        title: "CARNAVALES",
        start: "2019-03-02",
        end: "2019-03-06",
        textColor: "white"
      },
      {
        title: "SEÑOR DE CAYAC",
        start: "2019-05-02",
        end: "2019-05-05",
        textColor: "white"
      },
      {
        title: "FIESTA COSTUMBRISTA HONOR A SAN MIGUEL ARCANGEL",
        start: "2019-09-27",
        end: "2019-10-03",
        textColor: "white"
      },
      {
        title: "AÑO NUEVO FIESTA DEL NIÑO JESUS",
        start: "2018-12-29",
        end: "2019-01-04",
        textColor: "white"
      }
      ]
  })

});
