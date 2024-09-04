document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    const imc = Number((peso / (altura * altura)).toFixed(2));
    let classificacao = "";

    switch (true) {
        case imc < 17:
            classificacao = "Muito abaixo do peso";
            break;

        case imc >= 17 && imc <= 18.49:
            classificacao = "Abaixo do peso";
            break;

        case imc >= 18.5 && imc <= 24.9:
            classificacao = "Peso Normal";
            break;

        case imc >= 25 && imc <= 29.9:
            classificacao = "Acima do Peso";
            break;

        case imc >= 30 && imc <= 34.9:
            classificacao = "Obesidade I";
            break;

        case imc >= 35 && imc <= 39.9:
            classificacao = "Obesidade II";
            break;

        case imc >= 40:
            classificacao = "Obesidade III";
            break;

        default:
            classificacao = "Valor inválido";
            break;
    }

    document.getElementById("resultado").innerHTML = `Seu IMC é ${imc} (${classificacao})`;
});
