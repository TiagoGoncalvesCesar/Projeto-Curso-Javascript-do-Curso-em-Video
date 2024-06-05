function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem') 
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
var seg = data.getSeconds()
//var hora = 1 pra testar
msg.innerHTML = `<strong>Agora são ${hora}hora(s)${min}minuto(s)${seg}segundo(s).</strong>`
if(hora >= 0 && hora <12){
    //Bom Dia
    img.src = 'foto-manha.png'
}
else if(hora >= 12 && hora <= 18){
    //Boa Tarde
    img.src = 'foto-tarde.png'
}
else{
    //Boa Noite
    img.src = 'foto-noite.png'
}
}