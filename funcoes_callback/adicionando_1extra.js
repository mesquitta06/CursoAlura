// // //Um aluno recebeu um ponto extra nas suas notas. Adicione esse ponto nas notas da seguinte lista:

// // 10
// // 9.5
// // 8
// // 7
// // 6


// const notas =  [10 , 9.5 , 6 , 8]

// let notasAdd = 0;

// let notasAntes = 0;

// for( let nota of notas){
//     notasAntes += nota
//     console.log (notasAntes)
// }
// notas.forEach(function(soma){
//     notasAdd += soma +1;
// })
// media= notasAdd / notas.length
// console.log (`O aluno recebeu 1 ponto extra em cada matéria e sua média antes era  mudou para ${media}`)



const notas =  [10 , 9.5 , 6 , 8]


const notasAtualizadas = notas.map((nota)=> {
    return nota + 1 >= 10 ? 10 : nota +1 ;
})

console.log(notasAtualizadas)