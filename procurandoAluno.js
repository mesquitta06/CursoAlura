const alunos = ["João", "Juliana", "Ana", "Caio", "André"];
const medias = [10, 8, 7.5, 9];

const listaAlunoEmedias = [alunos, medias]



const aluno = "André"

function exibeNomeENota(aluno){
    if(listaAlunoEmedias[0].includes(aluno)){

        //const alunos = listaAlunoEmedias[0]
        //const medias = listaAlunoEmedias[1];

        const [alunos, medias ] = listaAlunoEmedias

        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
        
        
        //const indice = listaAlunoEmedias [0].indexOf(aluno);//index of mostar o indice de um elemento no array

        //const mediaDoAluno = listaAlunoEmedias[1][indiceAluno];

        console.log(`O aluno(a) ${aluno} está cadastrado , e sua nota é ${mediaAluno}`);


    }else{
        console.log("Aluno nao encontrado")
    }
};

exibeNomeENota(aluno);