//--------------------------------------------------GAS


let fluidos = [
    {nome:"Botija de gás R134 Uni ",tipo:"R134", vista:870.00, prazo:910.00, indice:0 }, // 0 13083
    {nome:"Botija de gás R134 Friven ",tipo:"R134", vista:870.00, prazo:910.00, indice:1}, // 1 1171
    {nome:"Gás R134 Lata 750g ",tipo:"R134", vista:68.90, prazo:70.90, indice:2}, // 2 6404

    {nome:"Botija de gás R22 Eos ",tipo:"R22",vista:849.90, prazo:898.00, indice:3}, //4 1375 
    {nome:"Gás R22 Lata 800g ",tipo:"R22",vista:125.00, prazo:149.00, indice:4}, //5 12429

    {nome:"Botija de gás R410 RLX ",tipo:"R410",vista:579.00, prazo:605.00, indice:5 }, //6 12303
    {nome:"Botija de gás R410 Uni ",tipo:"R410",vista:579.00, prazo:605.00, indice:6}, //7 12899
    {nome:"Gás R410 Lata 750g ",tipo:"R410",vista:69.90, prazo:79.00, indice:7}, //8  12571

    {nome:"Botija de gás R404 Friven ",tipo:"R404",vista:599.00, prazo:639.00, indice:8}, //9 664
    {nome:"Botija de gás R404 Rlx ",tipo:"R404",vista:469.00, prazo:499.00, indice:9 }, //10 12317

    {nome:"Gás R32 3KG Friven",vista:320.00, prazo:360.00, indice:10 }, //12 12317
    {nome:"Lata R32 650g",vista:115.00, prazo:125.00, indice:11 } //13 4972
    

]

4300









fluidos.forEach((gas)=>{
    let listaFluidos = document.querySelector('ul.aba-fluidos')
    let liGas = document.createElement('li')
    liGas.innerText = gas.nome
    liGas.classList.add('item')
    liGas.classList.add('fluidos')
    liGas.classList.add('gas')
    

    liGas.setAttribute('value',gas.indice)


    if(gas.tipo =='R134'){
        liGas.classList.add('gasr134')

    }else if(gas.tipo =='R22'){
        liGas.classList.add('gasr22')

    }else if(gas.tipo =='R410'){
        liGas.classList.add('gasr410')

    }else if(gas.tipo =='R404'){
        liGas.classList.add('gasr404')
    }
    listaFluidos.appendChild(liGas)
   
  })
  


  let produtosGas = document.querySelectorAll('li.gas')

  produtosGas.forEach((itemGas)=>{
    itemGas.addEventListener('click', (gas)=>{
        
        
    descricao.style.color = 'black'
    descricao.style.background = 'white'
  
    descricao.innerText = `${fluidos[itemGas.value]['nome']}
    a prazo: ${fluidos[itemGas.value]['prazo'].toFixed(2)}
    a vista: ${fluidos[itemGas.value]['vista'].toFixed(2)}
    `
    // if (gas.value== 7 || gas.value == 8 || gas.value == 9 || gas.value == 10){
    //     descricao.innerText += `Acima de 12 unidades a vista: ${produtosGas[gas.value]['extra1']} cada
    //  `
    // }

    descricao.innerText += `
    Promoção ${tituloPromocao}!!
    validade até ${datafinal}
    `  
})
 })
  