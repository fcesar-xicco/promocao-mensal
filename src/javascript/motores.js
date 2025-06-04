
//-----------------------------------------------MOTORES
let produtosCompressores = [
    {nome:'Electrolux 1/4 R134 ECLA002 ',cod:11551,voltagem:110, vista:319.00 , prazo:339.90, indice:0, promo:"pascoa" },//0 11551
    {nome:'Electrolux 1/4 R134 ECLA003 ',cod:12054,voltagem:220, vista:319.00, prazo:339.90, indice:1, promo: "pascoa" },//1 12054

    {nome:'Embraco 1/4 R134 EMR80HLR ',cod:11271,voltagem:110, vista:339.90 , prazo:359.90, indice:2  },//2 11271
    {nome:'Embraco 1/4 R134 EMR80HLR ',cod:11272,voltagem:220, vista:339.90 , prazo:359.90, indice:3  },//3 11272

    {nome:'Embraco 1/5 R134 EMR70HLR ',cod:12549,voltagem:110, vista:345.90 , prazo:379.90, indice:4  },//4 12549
    {nome:'Embraco 1/5 R134 EMR70HLR ',cod:12608,voltagem:220, vista:355.90 , prazo:379.90, indice:5  },//5 12608

    {nome:'Embraco 1/3 R134 EMR100HLC ',cod:12552,voltagem:127, vista:480.00 , prazo:510.90, indice:6  },//5 12552
    {nome:'Embraco 1/3 R134 EMR100HLC ',cod:12547,voltagem:220, vista:480.00 , prazo:510.90, indice:7  },//5 12547
    {nome:'Embraco 1/3+ R134 FFI12HBX ',cod:264,voltagem:127, vista:589.90 , prazo:619.90, indice:8  },//5 264
    {nome:'Embraco 1/3+ R134 FFI12HBX ',cod:262,voltagem:220, vista:589.90 , prazo:619.90, indice:9  },//5 262
    
]
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
produtosCompressores.forEach((comp)=>{
    let compressores = document.querySelector('ul.aba-compressor')
    let li = document.createElement('li')
    li.innerText = comp.nome
    li.classList.add('item')
    li.classList.add('motor')
    li.setAttribute('value',comp.indice)
    li.setAttribute('title','cod.' + " " + comp.cod)  // mostrar a descrição ao passar o mouse
    if(comp.indice == 0 || comp.indice == 1 ){
      li.classList.add('electrolux')
    }
    if(comp.promo == "pascoa"){
      li.classList.add('pascoa')
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
      if(produtosCompressores[mot.value]['voltagem'] == 220){
        descricao.innerText = `${produtosCompressores[mot.value]['nome']} 220v
        a prazo: ${produtosCompressores[mot.value]['prazo'].toFixed(2)}
        a vista: ${produtosCompressores[mot.value]['vista'].toFixed(2)}
        `
      }else{
        descricao.innerText = `${produtosCompressores[mot.value]['nome']} 127v
        a prazo: ${produtosCompressores[mot.value]['prazo'].toFixed(2)}
        a vista: ${produtosCompressores[mot.value]['vista'].toFixed(2)}
        `


      }

        

        // if(mot.nome == 0 || mot.value == 1 ||mot.value == 4 || mot.value == 5){

        if(produtosCompressores[mot.value]['nome'].includes('Electrolux') || produtosCompressores[mot.value]['nome'].includes('Elgin')){
          descricao.innerText += `1 ano de garantia!!
          `
        }
        descricao.innerText += `
        Promoção ${tituloPromocao}!!
        validade até ${datafinal}
        ` 


    })
  


}