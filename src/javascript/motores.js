
//-----------------------------------------------MOTORES
let produtosCompressores = [
    {nome:'Electrolux 1/4 R134 ECLA002 ',voltagem:110, vista:349.00 , prazo:379.90, indice:0 },//0 11551
    {nome:'Electrolux 1/4 R134 ECLA003 ',voltagem:220, vista:349.00, prazo:379.90, indice:1  },//1 12054

    {nome:'Embraco 1/4 R134 EMR80HLR ',voltagem:110, vista:349.90 ,prazo:389.90, indice:2  },//2 11271
    {nome:'Embraco 1/4 R134 EMR80HLR ',voltagem:220, vista:349.90 , prazo:389.90, indice:3  },//3 11272

    {nome:'Embraco 1/5 R134 EMR70HLR ',voltagem:110, vista:349.90 , prazo:379.90, indice:4  },//4 12549
    {nome:'Embraco 1/5 R134 EMR70HLR ',voltagem:220, vista:349.90 , prazo:379.90, indice:5  },//5 12608

    {nome:'Embraco 1/3 R134 EMR100HLC ',voltagem:127, vista:482.90 , prazo:499.90, indice:6  },//5
    {nome:'Embraco 1/3 R134 EMR100HLC ',voltagem:220, vista:482.90 , prazo:499.90, indice:7  },//5
    {nome:'Embraco 1/3+ R134 FFI12HBX ',voltagem:127, vista:589.90 , prazo:619.90, indice:8  },//5
    {nome:'Embraco 1/3+ R134 FFI12HBX ',voltagem:220, vista:589.90 , prazo:619.90, indice:9  },//5
    


  
    
]

produtosCompressores.forEach((comp)=>{
    let compressores = document.querySelector('ul.aba-compressor')
    let li = document.createElement('li')
    li.innerText = comp.nome
    li.classList.add('item')
    li.classList.add('motor')
    li.setAttribute('value',comp.indice)
    if(comp.value == 0){
      li.classList.add('suportes')
    }
    if(comp.voltagem ==220){
      li.innerHTML += `<span class="v220">220V</span>`
    }else{
      li.innerHTML += `<span>127V</span>`
    }
    
    compressores.appendChild(li)
  })

  





let itemMotor = document.querySelectorAll('li.motor')
itemMotor.forEach((test)=>{
  escolhidoCompressor(test)
})







function escolhidoCompressor(mot){
 mot.addEventListener("click",() =>{

      if( mot.classList.contains("220v")){
       // descricao.style.color = 'red'
       descricao.style.background =  '#f7b9b9'
      }else{
        descricao.style.color = 'black'
        descricao.style.background = 'white'
      }
        descricao.innerText = `${produtosCompressores[mot.value]['nome']}
        a prazo: ${produtosCompressores[mot.value]['prazo'].toFixed(2)}
        a vista: ${produtosCompressores[mot.value]['vista'].toFixed(2)}
        `

        // if(mot.nome == 0 || mot.value == 1 ||mot.value == 4 || mot.value == 5){

        if(produtosCompressores[mot.value]['nome'].includes('Electrolux') || produtosCompressores[mot.value]['nome'].includes('Elgin')){
          descricao.innerText += `1 ano de garantia!!
          `
        }
        descricao.innerText +=`
        Promoção Frio Total!!
        validade até ${datafinal}
        `
    })
  


}