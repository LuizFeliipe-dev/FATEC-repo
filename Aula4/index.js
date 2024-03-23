// Primeira questão

function verificaTamanho(a,b,c) {
    let maiorValor = a;
    if( b > maiorValor ) maiorValor = b;
    if( c > maiorValor ) maiorValor = c;
    return maiorValor
}

console.log(verificaTamanho(14,5,9));

// Segunda questão

function tabuada(numero, limite){
    for(i = 1; i <= limite; i++){
        console.log(`${numero} X ${i} = ${numero*i}`)
    }
    console.log('FIM');
}

tabuada(5,25);