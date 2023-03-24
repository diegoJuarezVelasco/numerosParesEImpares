document.addEventListener("DOMContentLoaded", function () {


    const formulario = document.querySelector('form');
    const input = document.querySelector('#numeros');
    const divPares = document.querySelector('#pares');
    const divImpares = document.querySelector('#impares');


    function agruparNumeros(numero) {
        const parrafoNumero = document.createElement('p');
        parrafoNumero.textContent = numero;
        if (Number(numero) % 2 === 0) {
            divPares.append(parrafoNumero);
        } else {
            divImpares.append(parrafoNumero);
        }
        
    }
    formulario.addEventListener('submit', e => {
        e.preventDefault();
        let numeros_separados = input.value.split(',');
        if (numeros_separados.length < 4) {
            alert('Se debe ingresar un minimo de cuatro numeros');
        } else {
            numeros_separados.forEach(numero => {
                agruparNumeros(numero);
            })

        }
    })
});