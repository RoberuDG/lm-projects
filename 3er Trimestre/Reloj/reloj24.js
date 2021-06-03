function actualizarHora() {
    
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];

    var f = new Date(),
        año = fecha.getFullYear(),
        mes = fecha.getMonth(),
        dia = fecha.getDate(),
        diaSemana = fecha.getDay(),
        horas = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds();


    var pAño = document.getElementById('año'),
        pMes = document.getElementById('mes'),
        pDia = document.getElementById('dia')
    pDiaSemana = document.getElementById('diaSemana'),
        pHoras = document.getElementById('horas')
    pMInutos = document.getElementById('minutos'),
        pSegundos = document.getElementById('segundos');

    pDiaSemana.textContent = semana[diaSemana];
    pDia.textContent = dia;
    pMes.textContent = meses[mes];
    pAño.textContent = año;

    if (minutos < 10) {
        minutos = '0' + minutos;
    }
    if (segundos < 10) {
        segundos = '0' + segundos;
    }
    if (horas < 10) {
        horas = '0' + horas;
    }
    pHoras.textContent = horas;
    pMInutos.textContent = minutos;
    pSegundos.textContent = segundos;
}
actualizarHora();
var act = setInterval(actualizarHora, 500);