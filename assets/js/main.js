//Capturar evento dop forumulario
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // Valida se peso e altura são do tipo Number
    if (!peso){
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura){
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc( peso, altura);
    const nivelIMC = faixaIMC(imc)

    const msg = `Seu IMC é: ${imc} (${nivelIMC})`;
    setResultado(msg, true)
});

//Cria paragrafos.
function criaP(){
    const p = document.createElement('p');
    return p;
}

//Exibe resultado na página.
function setResultado (mesagem, isValid){ 
   const resultado =  document.querySelector('#resultado');
   resultado.innerHTML = '';

   const p = criaP(); // Chama função cria paragrafos.

    if ( isValid){
        p.classList.add('p-resul-valido')
    } else {
        p.classList.add('p-resul-invalido')
    }

   p.innerHTML= mesagem;
   resultado.appendChild(p);
}

//CALCULO IMC
function getImc(peso, altura){
    return (peso / ( altura * altura)).toFixed(2);
}

//FAIXA IMC 
function faixaIMC (imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
                   'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}