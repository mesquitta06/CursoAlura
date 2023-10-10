const notas = [10, 6.5 , 8 , 7.5, 7, 12.3, 25, 69]

let somaDasNotas = 0;

for(let elemento of notas){ //para cada elemento de notas, execute o codigo dentro das chaves
  somaDasNotas += elemento

}

media = somaDasNotas/ notas.length

console.log(media)