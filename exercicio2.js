//1 autonomia

// let distanciaKM = 161.2;
// let consumoKmLitro = 42.1;
// let precoLitro = 6.49;
// let Litros = distanciaKM / consumoKmLitro;
// let ValorGasto = Litros * precoLitro;


// console.log(`Distancia: ${distanciaKM} 
// Consumo Km Litro:  ${consumoKmLitro} 
// Preço Litro: ${precoLitro}
// Litros: ${Litros.toFixed(2)}
// Valor Abastecido: ${ValorGasto.toFixed(2)}`
// )

//2 tringulo

let lado1 = 34;
let lado2 = 23;
let lado3 = 21;


if (lado1 + lado2 > lado3 && lado1)
{
    console.log("Tipo ")
}

//3
const numeroParaVerificar = 11;
let numPrimo = true;

if (numeroParaVerificar < 2 ) 
{
    numPrimo = false;

}else {
    for(let i = 2; i <= numeroParaVerificar; i++) 
    {
        if (numeroParaVerificar % i === 0 )
        {
            numPrimo = false;
            break;
        }
    }

    
}

if(numPrimo) {
    console.log(`${numeroParaVerificar} é primo`);
}else {
    console.log(`${numeroParaVerificar} não é primo`);
}