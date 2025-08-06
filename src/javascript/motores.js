
//-----------------------------------------------MOTORES
let produtosCompressores = [
    {nome:'Electrolux 1/4 R134 ECLA002 ',cod:11551,voltagem:110, vista:329.00 , prazo:339.90, indice:0},//0 11551
    {nome:'Electrolux 1/4 R134 ECLA003 ',cod:12054,voltagem:220, vista:329.00, prazo:339.90, indice:1},//1 12054

    {nome:'Embraco 1/4 R134 EMR80HLR ',cod:11271,voltagem:110, vista:299.90 , prazo:329.90, indice:2  },//2 11271
    {nome:'Embraco 1/4 R134 EMR80HLR ',cod:11272,voltagem:220, vista:299.90 , prazo:329.90, indice:3  },//3 11272

    {nome:'Embraco 1/5 R134 EMR70HLR ',cod:12549,voltagem:110, vista:330.90 , prazo:345.00, indice:4  },//4 12549
    {nome:'Embraco 1/5 R134 EMR70HLR ',cod:12608,voltagem:220, vista:330.90 , prazo:365.90, indice:5  },//5 12608

    {nome:'Embraco 1/3 R134 EMR100HLC ',cod:12552,voltagem:127, vista:490.00 , prazo:519.00, indice:6  },//6 12552
    {nome:'Embraco 1/3 R134 EMR100HLC ',cod:12547,voltagem:220, vista:490.00 , prazo:519.00, indice:7  },//7 12547
    {nome:'Embraco 1/3+ R134 FFI12HBX ',cod:264,voltagem:127, vista:590.00 , prazo:630.90, indice:8  },//8 264
    {nome:'Embraco 1/3+ R134 FFI12HBX ',cod:262,voltagem:220, vista:590.00 , prazo:630.90, indice:9  },//9 262
    {nome:'KIT Instalação Embraco 1/4',cod:"11271/11272 - 7229 - 7169 - 692",voltagem:"110v/220v", vista:349.90 , prazo:369.90, indice:10, promo:"yellow"  }//10 262
    
]

/*
11551	COMPRESSOR ECLA002 127V 1/4 R134 ELECTROLUX	339,00	329,00
12054	COMPRESSOR ECLA003 220V 1/4 R134A ELECTROLUX 41044709	339,00	329,00
11271	COMPRESSOR EMBRACO 1/4 MENOR 127V R134 EMR80HLR	329,90	299,90
11272	COMPRESSOR EMBRACO 1/4 MENOR 220V R134 EMR80HLR	329,90	299,90
12549	COMPRESSOR EMBRACO 1/5 127V R134 EMR70HLR	345,00	330,00
12608	COMPRESSOR EMBRACO 1/5 220V R134 EMR70HLR	365,00	330,00
12552	COMPRESSOR EMBRACO 1/3 127V R134 EMR100HLC	519,00	490,00
12547	COMPRESSOR EMBRACO 1/3 220V R134 EMR100HLC	519,00	490,00
264	COMPRESSOR EMBRACO 1/3+ 127V R134 FFI12HBX	630,00	590,00
262	COMPRESSOR EMBRACO 1/3+ 220V R134 FFI12HBX 	630,00	590,00



*/


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
    if(comp.promo == "yellow"){
      li.classList.add('yellow')
    }
    if(comp.indice ==10){
      li.innerHTML += `<span>127V/220v</span>`


    }else{
      if(comp.voltagem ==220){
      li.innerHTML += `<span class="v220">220V</span>`
    }else{
      li.innerHTML += `<span>127V</span>`
    }
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
      if(produtosCompressores[mot.value]['indice'] == 10){
        descricao.innerText = `${produtosCompressores[mot.value]['nome']} 
        Acompanha: 
        Compressor 1/4 Embraco EMR80 R134
        1 Filtro, 1 solda e 1 Schiraid
        a prazo: ${produtosCompressores[mot.value]['prazo'].toFixed(2)}
        a vista: ${produtosCompressores[mot.value]['vista'].toFixed(2)}
        `
      }
      else{
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
      }


        

        // if(mot.nome == 0 || mot.value == 1 ||mot.value == 4 || mot.value == 5){

        if(produtosCompressores[mot.value]['nome'].includes('Electrolux') || produtosCompressores[mot.value]['nome'].includes('Elgin')){
          descricao.innerText += `1 ano de garantia!!
          `
        }


        if(produtosCompressores[mot.value]['indice'] == 10){
          descricao.innerText += `
          Promoção valida até ${datafinal}
        ` 
        }else{
          descricao.innerText += `
        Promoção ${tituloPromocao}!!
        ${datafinal}
        ` 
        }
        


    })
  


}