let valores = [8,1,7,4,2,9]
console.log(valores)

console.log()

console.log('Maneira Errada')
console.log(`vetor na posição 1 é ${valores[0]}`)
console.log(`vetor na posição 2 é ${valores[1]}`)
console.log(`vetor na posição 3 é ${valores[2]}`)
console.log(`vetor na posição 4 é ${valores[3]}`)
console.log(`vetor na posição 5 é ${valores[4]}`)
console.log(`vetor na posição 6 é ${valores[5]}`)

console.log()

console.log('Maneira Inteligente')
for(let pos = 0;pos < valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log()

console.log('For simplificado')
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log()

console.log('uso do indexOf()')
let pos = valores.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)
 pos = valores.indexOf(3)

console.log(`O valor 3 está na posição ${pos}`)

console.log()

console.log('Usando if else para descobrir o indexOf')
pos = valores.indexOf(2)
if(pos == -1){  
console.log(`O valor não foi encontrado`)
}
else{
console.log(`O valor está na posição ${pos}`)
}

