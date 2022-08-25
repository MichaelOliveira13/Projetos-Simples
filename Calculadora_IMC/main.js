const calcular = document.getElementById('calcular')
calcular.addEventListener('click', op);

function op (){

    const nome = document.getElementById('input-nome').value;
    const altura = document.getElementById('input-altura').value;
    const peso = document.getElementById('input-peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !==''){

        const imc = (peso / (altura * altura)).toFixed(2);

        let parcial = '';

        if (imc < 19)
        {parcial = 'abaixo do peso.'}

        else if (imc > 19 && imc <= 25)
        {parcial = 'no peso ideal.'}

        else if (imc > 25 && imc <= 30)
        {parcial = 'com sobrepeso.'}

        else if (imc > 30 && imc <= 35)
        {parcial = 'com obesidade moderada.'}

        else if (imc > 35 && imc <= 40)
        {parcial = 'com obesidade severa.'}

        else if(imc > 40 && imc <= 50)
        {parcial = 'com obesidade morbida.'}

        resultado.textContent = `${nome} seu IMC é ${imc} e você está ${parcial}`;
        }
        else
        {resultado.textContent = 'Preencha os campos corretamente!'}
    }



