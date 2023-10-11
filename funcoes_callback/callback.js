const nomes = ["evaldo", "mari", "joao" , "adriana"]
//metodo 1
nomes.forEach(function(nome){

    console.log(nome)

})
//metodo 2
nomes.forEach((nome) =>{

    console.log(nome)

})
//metodo 3
function imprime(nome){
    console.log(nome)
}

nomes.forEach(imprime);


//todos os metodos fazem a mesma coisa
const lista = [1, 2, 3, 4, 5];

for (let indice = 0; indice < lista.length; indice++) {
    const totalIndicie = indice
 console.log(lista[indice]); 
}



console.log(`Você possui, ${lista.length} elementos no array`)