function somarPares() {
    const limite = parseInt(document.getElementById('limite').value);
    let soma = 0;

    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }

    const resultado = document.getElementById('resultado');
    resultado.textContent = `A soma dos números pares até ${limite} é: ${soma}`;
}
