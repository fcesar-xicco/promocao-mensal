//--------------------------------------------------GAS


let fluidos = [
    {nome:"Botija de gás R134 Uni ",tipo:"R134",cod:13083 , vista:830.00, prazo:890.00, indice:0 }, // 13083
    {nome:"Botija de gás R134 Friven ",tipo:"R134",cod:1171 , vista:950.00, prazo:1070.00, indice:1}, // 1171
    {nome:"Gás R134 Lata 750g ",tipo:"R134",cod:6404 , vista:68.90, prazo:72.90, indice:2}, // 6404
    {nome:"Gás R32 3KG ZAK",cod:13299 ,vista:278.00, prazo:315.00, indice:3 }, // 13299

    {nome:"Botija de gás R22 13,6kg Eos ",tipo:"R22",cod:1375 ,vista:915.00, prazo:995.00, indice:4}, // 1375
    {nome:"Botija de gás R22 13,6kg Friven ",tipo:"R22",cod:13421 ,vista:980.00, prazo:1035.00, indice:5}, // 1375
    {nome:"Botija de gás R22 6,8kg ",tipo:"R22",cod:13315 ,vista:519.00, prazo:568.00, indice:6}, // 13315
    {nome:"Gás R22 Lata 900g ",tipo:"R22",cod:9346 ,vista:120.00, prazo:129.00, indice:7}, // 9346

    {nome:"Botija de gás R404 Friven ",tipo:"R404",cod:664 ,vista:720.00, prazo:780.00, indice:8}, // 664
    {nome:"Botija de gás R404 Rlx/Uni ",tipo:"R404",cod:12317 ,vista:660.00, prazo:730.00, indice:9 }, // 12317

    {nome:"Botija de gás R410 Friven ",tipo:"R410",cod:4302 ,vista:925.00, prazo:990.00, indice:10}, // 4302
    {nome:"Gás R410 Lata 750g ",tipo:"R410",cod:12571 ,vista:90.00, prazo:98.00, indice:11}, //  12571

    

    
    // {nome:"Botija de gás R410 Rlx/Uni ",tipo:"R410",vista:890.00, prazo:975.00, indice:9 }, 12303
    // {nome:"Lata R32 650g",vista:115.00, prazo:125.00, indice:11 } //13 4972
    

]











fluidos.forEach((gas)=>{
    let listaFluidos = document.querySelector('ul.aba-fluidos')
    let liGas = document.createElement('li')
    liGas.innerText = gas.nome
    liGas.classList.add('item')
    liGas.classList.add('fluidos')
    liGas.classList.add('gas')
    

    liGas.setAttribute('value',gas.indice)
    liGas.setAttribute('title','cod.' + " " + gas.cod)

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
    prorrogado até ${datafinal}
    `  
})
 })
  





/*
    Mes de maio

 let fluidos = [
    {nome:"Botija de gás R134 Uni ",tipo:"R134", vista:929.00, prazo:959.00, indice:0 }, // 13083
    {nome:"Botija de gás R134 Friven ",tipo:"R134", vista:939.00, prazo:969.00, indice:1}, // 1171
    {nome:"Gás R134 Lata 750g ",tipo:"R134", vista:60.00, prazo:65.90, indice:2}, // 6404
    {nome:"Gás R32 3KG ZAK",vista:250.00, prazo:290.00, indice:3 }, // 13299

    {nome:"Botija de gás R22 13,6kg Eos ",tipo:"R22",vista:850.00, prazo:920.00, indice:4}, // 1375 
    {nome:"Botija de gás R22 6,8kg ",tipo:"R22",vista:519.00, prazo:568.00, indice:5}, // 13315
    {nome:"Gás R22 Lata 900g ",tipo:"R22",vista:110.00, prazo:118.00, indice:6}, // 12429

    {nome:"Botija de gás R404 Friven ",tipo:"R404",vista:690.00, prazo:760.00, indice:7}, // 664
    {nome:"Botija de gás R404 Rlx/Uni ",tipo:"R404",vista:660.00, prazo:730.00, indice:8 }, // 12317

     // {nome:"Botija de gás R410 Rlx/Uni ",tipo:"R410",vista:890.00, prazo:975.00, indice:9 }, 12303
    {nome:"Botija de gás R410 Friven ",tipo:"R410",vista:925.00, prazo:990.00, indice:9}, // 4302
    {nome:"Gás R410 Lata 750g ",tipo:"R410",vista:88.00, prazo:93.00, indice:10}, //  12571

    

    

    // {nome:"Lata R32 650g",vista:115.00, prazo:125.00, indice:11 } //13 4972
    

]

*/



/*

 Mes de abril


 let fluidos = [
    {nome:"Botija de gás R134 Uni ",tipo:"R134", vista:980.00, prazo:1070.00, indice:0 }, // 13083
    {nome:"Botija de gás R134 Friven ",tipo:"R134", vista:980.00, prazo:1070.00, indice:1}, // 1171
    {nome:"Gás R134 Lata 750g ",tipo:"R134", vista:68.90, prazo:70.90, indice:2}, // 6404
    {nome:"Gás R32 3KG ZAK",vista:278.00, prazo:305.00, indice:3 }, // 13299

    {nome:"Botija de gás R22 13,6kg Eos ",tipo:"R22",vista:915.00, prazo:999.00, indice:4}, // 1375 
    {nome:"Botija de gás R22 6,8kg ",tipo:"R22",vista:519.00, prazo:568.00, indice:5}, // 13315
    {nome:"Gás R22 Lata 800g ",tipo:"R22",vista:125.00, prazo:149.00, indice:6}, // 12429

    {nome:"Botija de gás R404 Friven ",tipo:"R404",vista:790.00, prazo:870.00, indice:7}, // 664
    {nome:"Botija de gás R404 Rlx/Uni ",tipo:"R404",vista:790.00, prazo:870.00, indice:8 }, // 12317

    {nome:"Botija de gás R410 Rlx/Uni ",tipo:"R410",vista:890.00, prazo:975.00, indice:9 }, // 12303
    {nome:"Botija de gás R410 Friven ",tipo:"R410",vista:975.00, prazo:1112.00, indice:10}, // 12899
    {nome:"Gás R410 Lata 750g ",tipo:"R410",vista:79.90, prazo:83.00, indice:11}, //  12571

    

    

    // {nome:"Lata R32 650g",vista:115.00, prazo:125.00, indice:11 } //13 4972
    */
