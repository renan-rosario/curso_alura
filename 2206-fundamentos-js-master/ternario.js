const idadeMinima = 18;
const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

// if (idadeCliente >= idadeMinima) {
//   console.log("cerveja")
// } else {
//   console.log("suco")
// }

            //condição                    //true     //false
console.log(idade >= idadeMinima ? "cerveja" : "suco")

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)
