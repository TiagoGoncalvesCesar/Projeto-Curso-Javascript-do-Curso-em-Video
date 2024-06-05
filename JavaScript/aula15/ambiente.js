let num = [3, 8, 6, 7]
console.log (`vetor em ordem ${num.sort()}`)
num[3] = 9 // cria mais um vetor dessa forma
num[7]= 16
num[6]= 4
num[4]= 2
num[8] = 10
num[5] = 13 //pula o vetor vazio e coloca o numero no vetor correspondente que é o vetor 5
num.push(1)
console.log(`Nosso vetor é ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`Nosso vetor na posição 0 é o número ${num[0]}`)


