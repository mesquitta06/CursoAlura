const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaAlunoEmedias = [alunos, medias]



const aluno = "Caio"

function exibeNomeENota(aluno){
    if(listaAlunoEmedias[0].includes(aluno)){
        
        const indice = listaAlunoEmedias [0].indexOf(aluno);//index of mostar o indice de um elemento no array
        const mediaDoAluno = listaAlunoEmedias[1][indice];
        console.log(`O aluno(a) ${aluno} está cadastrado , e sua nota é ${mediaDoAluno}`);


    }else{
        console.log("Aluno nao encontrado")
    }
};

exibeNomeENota(aluno);