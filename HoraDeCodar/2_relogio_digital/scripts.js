function atualizarRelogio() {
    const elementoHoras = document.querySelector(".horas");
    const elementoMinutos = document.querySelector(".minutos");
    const elementoSegundos = document.querySelector(".segundos");

    const dataAgora = new Date();
    const horas = dataAgora.getHours().toString().padStart(2, "0"); // Vou pegar a hora atual, transformar em string, e deixar sempre com 2 digitos 
    const minutos = dataAgora.getMinutes().toString().padStart(2, "0");
    const segundos = dataAgora.getSeconds().toString().padStart(2, "0");

    // Setar os valores nos elementos
    elementoHoras.textContent = horas;
    elementoMinutos.textContent = minutos;
    elementoSegundos.textContent = segundos;
}

setInterval(atualizarRelogio, 1000);