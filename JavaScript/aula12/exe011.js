var idade = 22
console.log(`Você tem ${idade} anos`)
if (idade < 16){
    console.log('Menor de idade, não precisa votar.')
}
else {
    console.log('Maior de idade, precisar votar.')
}
console.log()
var idade = 19
console.log(`Você tem ${idade} anos`)
if (idade < 16){
    console.log('Menor de idade, não vota')
}
else {
    if(idade >= 16 && idade < 18 || idade > 65){ 
    console.log('Voto opcional.')
}
else{
    console.log('Voto obrigatório.')
}
}   