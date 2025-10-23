
function calcular(operacao) {
let valor1 = parseFloat(document.getElementById("inpvl1").value);
let valor2 = parseFloat(document.getElementById("inpvl2").value);
let resultado = 0;

if (operacao === '+') {
    resultado = valor1 + valor2;
}else if (operacao === '-') {
    resultado = valor1 - valor2;
}else if (operacao === '*') {
    resultado = valor1 * valor2;
}else if (operacao === '/') {
    
    if(valor2 !== 0) {
        resultado = valor1 /valor2;
    }else {
        resultado = "ERRO... Divisão por zero";
    }
}
document.getElementById("resultado").textContent = "Resultado: " + resultado;
}

