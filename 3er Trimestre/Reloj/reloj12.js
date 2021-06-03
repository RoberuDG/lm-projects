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
        segundos = fecha.getSeconds(),
        ampm;
    var pAño = document.getElementById('año'),
        pMes = document.getElementById('mes'),
        pDia = document.getElementById('dia')
    pDiaSemana = document.getElementById('diaSemana'),
        pHoras = document.getElementById('horas')
    pMInutos = document.getElementById('minutos'),
        pSegundos = document.getElementById('segundos'),
        pAMPM = document.getElementById('ampm');

    

    pDiaSemana.textContent = semana[diaSemana];
    pDia.textContent = dia;
    pMes.textContent = meses[mes];
    pAño.textContent = año;

    if (horas >= 12) {
        horas = horas - 12;
        ampm = 'PM';
    }
    else {
        ampm = 'AM';
    }

    if (horas == 0) {
        horas = 12;
    }

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
    pAMPM.textContent = ampm;
}
actualizarHora();
var act = setInterval(actualizarHora, 500);