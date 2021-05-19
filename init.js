console.log("============= Bem Vindo ao Sistema de Notas =================");


// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

 
// readline.question('Digite o nome do aluno\n', nome => {
//   console.log(`o nome digitado foi ${nome}!`);
  
// });

const prompt = require('prompt-sync')();

const name = prompt('Qual seu nome ? ');
const nota1 = parseInt(prompt('Qual a nota da prova 1 ? ')); 
const nota2 = parseInt(prompt('Qual a nota da prova 2 ? ')); 
const nota3 = parseInt(prompt('Qual a nota da prova 3 ? ')); 
const media = ((nota1 + nota2 + nota3)/3);





console.log(`\n\n O seu nome é ${name}`);
console.log(`A media das suas notas é Number ${media}`);
