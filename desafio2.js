const prompt = require('prompt-sync')();

console.log("\n============= Bem Vindo ao Sistema de Notas =================\n");

const qtdalunos = parseInt(prompt(`Quantidade de alunos ? `))
const qtdnotas = parseInt(prompt('Quantidade de notas de cada aluno ? '))

console.log("==================================================");


let notas = 0;


for(let i = 0; i<qtdalunos; i++){

    const name = prompt('Qual seu nome ? ');

    for(let x=0; x<qtdnotas; x++){
        notas = parseInt(notas) + parseInt(prompt(`Qual a nota da prova ${x+1}: `));
    }
    var media = parseFloat(notas / qtdnotas);
    console.log(`\nO seu nome é ${name}`);
    console.log(`A media das suas notas é ${media}`);
    notas = 0;
    medias = 0;
    console.log("==================================================");


}
