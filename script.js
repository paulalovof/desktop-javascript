//alert("oi");

//const nome = prompt("Digite seu nome");
//console.log(nome);

//const h1 = document.getElementById('titulo');

//h1.innerHTML = `oi ${nome}`;

function calcularIMC(){
    const peso = parseFloat(prompt("Digite seu peso: "));
    console.log("Peso: ", peso);
    const altura = parseFloat(prompt("Digite sua altura: "));
    console.log("Altura: ", altura);

    if(isNaN(peso) || isNaN(altura)){
        alert("Por favor, insira valores numericos válidos!");
        return calcularIMC();
    }

    const imc = peso/ (altura * altura);
    const calculoImc = classificarImc(imc);

    console.log("Seu IMC é: ", `${imc.toFixed(2)}`);
    console.log("Classificacao: ", `${calculoImc}`);
}

function classificarImc(imc){
    if(imc < 18.5){
        return "Abaixo do peso";
    }else if(imc < 24.9){
        return "Peso normal";
    }else if(imc < 29.9){
        return "Sobrepeso";
    }else if(imc < 34.9){
        return "Obesidade grau I";
    }else if(imc < 39.9){
        return "Obesidade grau II";
    }else{
        return "Obesidade grau III mórbida";
    }
}

calcularIMC();
