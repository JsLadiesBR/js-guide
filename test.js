const { quarentaEDois, valorNegativo, minhaIdade, dezNegativo, dezAoQuadrado, restoDe10por3,milDuzentosECinquenta,
  comparacao1, comparacao2, comparacao3, comparacao4, comparacao5, comparacao6, comparacao7} = require('./modulos/1-numeros-variaveis-comparacoes')

describe('Desafio 1 - Numeros, Comparações e Variaveis', () => {
  test('quarentaEDois deu quarenta e dois', () => expect(quarentaEDois).toBe(42))
  test('valorNegativo é negativo', () => expect(valorNegativo).toBeLessThan(0))
  test('minhaIdade deve estar ao quadrado', () => expect(minhaIdade).toBe(441))
  test('x deve estar ao negativo', () => expect(dezNegativo).toBe(-10))
  test('x deve estar ao quadrado', () => expect(dezAoQuadrado).toBe(100))
  test('Resto de 10 por 3 deve ser 1', () => expect(restoDe10por3).toBe(1))
  test('milDuzendoECinquenta deve ser 1250', () => expect(milDuzentosECinquenta).toBe(1250))
  test('Comparação 1 deve ter valor verdadeiro', () => expect(comparacao1).toBeTruthy())
  test('Comparação 2 deve ter valor verdadeiro', () => expect(comparacao2).toBeTruthy())
  test('Comparação 3 deve ter valor verdadeiro', () => expect(comparacao3).toBeTruthy())
  test('Comparação 4 deve ter valor verdadeiro', () => expect(comparacao4).toBeTruthy())
  test('Comparação 5 deve ter valor verdadeiro', () => expect(comparacao5).toBeTruthy())
  test('Comparação 6 deve ter valor verdadeiro', () => expect(comparacao6).toBeTruthy())
  test('Comparação 7 deve ter valor verdadeiro', () => expect(comparacao7).toBeTruthy())
})
