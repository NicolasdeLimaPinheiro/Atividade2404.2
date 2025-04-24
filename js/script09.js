document.getElementById('form-horas').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const horas = parseFloat(document.getElementById('horas').value);
    const resultado = document.getElementById('resultado');
    
    if (isNaN(horas) || horas < 0) {
        resultado.textContent = "Por favor, insira um valor válido para horas.";
        resultado.style.color = 'red';
        return;
    }

    // Conversão para minutos e segundos
    const minutos = horas * 60;
    const segundos = minutos * 60;

    resultado.textContent = `${horas} hora(s) é igual a ${minutos} minuto(s) ou ${segundos} segundo(s).`;
    resultado.style.color = 'black';
});
