const ____ = undefined;
//Para comentar no javascript voce pode usar apenas duas barras
/* E para comentários com mais de uma linha
    voce pode usar dessa forma */

// Javascript não liga muito se voce usa ponto e virgula ou não.
//Nesse desafio não usaremos mas é completamente opcional!

//
// 1 - Numeros, variaveis e comparações

// Diferente de algumas linguagens de programação, todo numero no javascript é do tipo number
// O tipo number tem 64-bits e acaba geralmente sendo o suficiente para fazer calculos sem preocupacao.

//Operações funcionam de forma simples
1 + 1 // = 2
8 - 1 // = 7
10 * 2 // = 20
5 / 2 // = 2.5
10 % 2 // = 0
3 ** 3 // = 9

// O javascript é bem conhecido por resultar alguns "tipos malucos" as vezes
Infinity // resultado de 1/0
-Infinity // resultado de -1/0
NaN //resultado de 0/0

//Parenteses reforçam a ordem das operações
2 * (1 + 3) //= 8           

// Existem 3 formas de declarar uma variavel no javascript e usa-se o simbolo = para atribuir um valor a ela.

// A principio no js usava-se apenas var para definir variaveis
// Mas let e const vieram na ES6 para resolver problemas, portanto prefira usar let e const!

// Já que o javascript é dinamicamente tipado voce não precisa se preocupar com tipos das suas variaveis
// Basta colocar o valor da variavel após o =

var numero5 = 5
let minhaIdade = 21
const pi = 3.14

// Por exemplo, voce pode mudar o valor de sua variavel para qualquer tipo a qualquer momento

numero5 = "cinco" // note que mudamos o valor number de 5 para "cinco"
minhaIdade = 22 // mutamos o valor de minhaIdade de 21 para 22

// A grande diferença entre let e const é que voce pode mudar o valor de variaveis let
// Já variaveis declaradas como const são constantes e não podem mudar sua referencia.
// Por exemplo, se tentassemos mudar o valor de pi um erro aconteceria

// Note que nesse arquivo são usadas muitas variaveis const pois as vezes não precisamos alterar o valor da variavel

// Atividade: Teste as operações que vimos acima fazendo com que o valor da variavel "quarentaEDois" resulte em 42!
const quarentaEDois = ____

// Atividade: faça com que o valor da variavel valorNegativo seja qualquer numero abaixo de 0
const valorNegativo = ____

//Para operar valores de uma variavel voce pode usar o operador antes do =
// Se minha idade era 22...
minhaIdade += 1 // Minha idade ano que vem ( 23 )
minhaIdade -= 2 // Minha idade ano passado ( 22 )

//Atividade : Se eu quero minha idade (declarada logo acima) ao quadrado, o que voce deve preencher?
minhaIdade *= ____ // Minha idade ao quadrado

//Atividade: Operece a variavel x para que as variaveis resultem nos valores esperados
const x = 10;

const dezNegativo = -____
const dezAoQuadrado = x ** ____
const restoDe10por3 =  x % ____
const milDuzentosECinquenta =  10 * ____

//Assim como qualquer linguagem, existem tipos booleanos como true e false.
true
false
//E voce pode nega-los com o simbolo !
!true; // = false
!false; // = true

//Ao fazer comparações o resultado sempre será booleano!
1 === 1 // true
1 !== 1 // false
1 < 10 // true
1 >= 10 // false

// Coerçao de tipos só acontece em comparações com mais um =
// Procure sempre usar tres =!
"5" == 5; // true
"5" === 5 // false

// && significa "AND" ou "E" enquanto || significa ou "OR" ou "OU"
true && true // true
true && false // false
true || false // true
false || false // false

//As expressoes abaixo tem valores verdadeiros ou falsos?
// Preencha após a comparação === se as expressoes resultam em true ou false
// todas as variaveis devem resultar em um valor true(verdadeiros)!
const comparacaoEx = 5 < 4 === ____
const comparacao1 = 100 >= 100 === ____ // true ou false?
const comparacao2 = 100 > 100 === ____ // true ou false?
const comparacao3 = 1 !== 2 === ____ // true ou false?
const comparacao4 = !(100 === 100) === ____ // true ou false?
const comparacao5 = !!(100 === 100) === ____ // true ou false?
const comparacao6 = ((true && false) || true) == ____ //true ou false?
const comparacao7 = true && !(( false || true )|| false) === ____  // true ou false?


module.exports = { quarentaEDois, valorNegativo, minhaIdade, dezNegativo, dezAoQuadrado, restoDe10por3, milDuzentosECinquenta, comparacao1, comparacao2, comparacao3, comparacao4, comparacao5, comparacao6, comparacao7 }
