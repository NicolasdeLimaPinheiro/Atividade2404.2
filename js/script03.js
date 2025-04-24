function classificarIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    const resultado = document.getElementById('resultado');

    let classificacao = '';

    if (idade >= 0 && idade <= 12) {
        classificacao = 'Criança';
    } else if (idade >= 13 && idade <= 17) {
        classificacao = 'Adolescente';
    } else if (idade >= 18 && idade <= 59) {
        classificacao = 'Adulto';
    } else if (idade >= 60) {
        classificacao = 'Idoso';
    } else {
        classificacao = 'Idade inválida';
    }

    resultado.textContent = `Classificação: ${classificacao}`;
}
