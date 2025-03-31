const lista = document.getElementById('lista'); // Substitua pelo ID da sua lista
let itemcor = document.getElementsByClassName('item')
let produto =  document.querySelectorAll('.produto')
let motor = document.querySelectorAll(".motor")
let suportes = document.querySelectorAll(".suportes")
let gas = document.querySelectorAll(".gas")
let comercial = document.querySelectorAll(".comercial")
let linhaB = document.querySelectorAll(".linhab")
let descricao = document.querySelector('#descricao')
let datafinal = '31/04/2025'
let tituloPromocao = 'Páscoa!'
let abaB = document.querySelector('div.aba-b')

// --------------------------DESCONTOS COMPRESSORES----------------------

let valorConsumidor = document.getElementById('valorconsumidor')

let descontoPrazo = document.getElementById('descontoPrazo')
let descontoVista = document.getElementById('descontoVista')

valorConsumidor.addEventListener("input",function(valorConsumidor){
    valores(valorConsumidor)
    

})
function valores(valor){
  let custo = Number(valorConsumidor.value)/2
  let valorPrazo = custo+((custo/100)*43)
  let valorVista = custo+((custo/100)*38)

  descontoPrazo.innerHTML = valorPrazo.toFixed(2)
  descontoVista.innerHTML = valorVista.toFixed(2)
}

function mostrarDescricao() {
    let abaB = document.querySelector('div.aba-b')
    abaB.style.display = "block"; // Torna a imagem visível
}





/*
let itemCompressores = [
    {nome:'Gas r22', valor:375.90, pag:'Pix/Dinheiro', criterio:""},
   

]

let itemGeral = [
    {nome:'Gas Maçarico RLX lata', valor:32.90, pag:'Pix/Dinheiro', criterio:""},
]

let itemComercial = [
    {nome:'Conj. Manifold Suryha R22/134', valor:32.90, pag:'Pix/Dinheiro', criterio:""},
    {nome:'Bomba Universal Emicol 127v', valor:21.90, pag: 'Pix/Dinheiro', criterio:"Acima de 5 unidades"},
]*/


/*
itemLavadora.forEach(function(item) {
  const li = document.createElement("li");
  li.textContent = item.nome;
  lista.appendChild(li);
  li.style.background = 'orange'
  
});

itemComercial.forEach(function(item) {
    const li = document.createElement("li");
    li.textContent = item.nome;
    lista.appendChild(li);
 
  });

  itemCompressores.forEach(function(item) {
    const li = document.createElement("li");
    li.textContent = item.nome;
    lista.appendChild(li);
 
  });
  
  itemGeral.forEach(function(item) {
      const li = document.createElement("li");
      li.textContent = item.nome;
      lista.appendChild(li);
      
    });
    */