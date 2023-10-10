const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaAlunoEmedias = [alunos, medias]


console.log(`
O primeiro aluno da lista é: ${listaAlunoEmedias[0][1]} 
e sua média é: ${listaAlunoEmedias[1][1]}`);


const pessoasComFaculdade= ["Paulo", "Jose","Fernanda"];

const pessoasEmFormacao = ["Andre" , "Miguel" , "Adriana"];

const turmaCompleta = pessoasComFaculdade.concat(pessoasEmFormacao);

//turmaCompleta.pop()
turmaCompleta.splice(0, 3, "Otavio")

console.log(turmaCompleta)