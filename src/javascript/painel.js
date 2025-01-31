
let linhaBranca = document.querySelector('ul.aba-linha-branca')
let geral = document.querySelector('ul.aba-geral')
let fuidos = document.querySelector('ul.aba-fluidos')


let produtoCompressores = [
    { nome: 'Comp. Electrolux 1/4 R134 ECLA002 110V ', vista: 375.90, prazo: 419.00 },//0
    { nome: 'Comp. Electrolux 1/4 R134 ECLA003 220V ', vista: 375.90, prazo: 419.00 },//1
    { nome: 'Comp. EMBRACO 1/4 R134 110V EMR80HLR', vista: 379.90, prazo: 415.00 },//2
    { nome: 'Comp. EMBRACO 1/4 R134 220V EMR80HLR', vista: 379.90, prazo: 415.00 },//3
    { nome: 'Comp. Tecumseh 1/4 R134 127V TA1380Y', vista: 389.90, prazo: 420.90 },//4
    { nome: 'Comp. Tecumseh 1/4 R134 220V TA1380Y', vista: 389.90, prazo: 420.90 },//5

]




    
produtoCompressores.forEach((compressor) => {

        adicionarProduto(compressor)

})
function adicionarProduto(compressor){
    let compressores = document.querySelector('ul.aba-compressores')
    let li = document.createElement('li')
    li.setAttribute('class','item')
    li.setAttribute('value',compre)
    compressores.appendChild(li)    
}











linhaBranca.addEventListener('click', () => {
    alert('linha branca')
})
geral.addEventListener('click', () => {
    alert('geral')
})
fuidos.addEventListener('click', () => {
    alert('fluidos')
})