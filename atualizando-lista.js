const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

const novoAluno= 'rodrigo';
console.log(`A turma antiga era : ${nomes}`);

nomes.splice(1 , 2);

nomes.push(novoAluno);
console.log (`A nova turma é ${nomes}`)

