function contar() {
  let ini = window.document.getElementById("txti");
  let fim = window.document.getElementById("txtf");
  let passo = window.document.getElementById("txtp");
  let res = window.document.getElementById("res");
  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    window.alert("[ERROR] Faltam dados.");
    res.innerHTML = 'Impossível Contar.'
  } else {
    res.innerHTML = 'Contando: <b>';
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
if (p <= 0){
   window.alert('Passo Inválido. Considerando PASSO 1')
   p = 1
}
    if (i < f) {
      //Contagem crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449}`;
      }
      
    } else {
      //Contagem regressiva
      for (let c = i; c >= f; c -= p) {
         res.innerHTML += `${c} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
