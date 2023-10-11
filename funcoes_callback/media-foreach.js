const notas = [10 , 6.5 , 8 , 7 , 5]

//quando uma função anônima é parâmetro de outra, ela é chamada de callback.
let somaDasNotas = 0;


notas.forEach(function (nota ){
     somaDasNotas += nota ;
    
    
})

console.log(somaDasNotas/notas.length)