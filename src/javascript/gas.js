//--------------------------------------------------GAS


let fluidos = [
<<<<<<< HEAD
    //{nome:"Botija de gás R134 Uni ",tipo:"R134",cod:13083 , vista:890.00, prazo:949.00, indice:0 }, // 13083
    {nome:"Botija de gás R134 RLX ",tipo:"R134",cod:12494 , prazo:999.00, vista:949.00, indice:0 }, // 12494
    {nome:"Gás R134 1kg Freon ",tipo:"R134",cod:12006 , prazo:135.00,  vista:125.00, indice:1}, // 12006
    {nome:"Gás R134 Lata 750g ",tipo:"R134",cod:6404 , prazo:70.00,  vista:65.00, indice:2}, //6404
    {nome:"GAS R290 380G LATA ",tipo:"R290",cod:13204 , prazo:40.00,  vista:38.00, indice:3}, //13204
    {nome:"Gás R32 3KG ZAK",cod:13299 ,prazo:260.00,  vista:240.00, indice:4 }, // 13299
=======
    {nome:"Botija de gás R134 Uni ",tipo:"R134",cod:13083 , vista:890.00, prazo:949.00, indice:0 }, // 13083
    {nome:"Gás R134 1kg Freon ",tipo:"R134",cod:12006 , vista:109.00, prazo:125.00, indice:1}, // 12006
    {nome:"Gás R134 Lata 750g ",tipo:"R134",cod:13204 , vista:60.00, prazo:65.00, indice:2}, //13204
<<<<<<< HEAD
    {nome:"Botija de gás R134 RLX ",tipo:"R134",cod:12494 , vista:950.00, prazo:999.00, indice:3 }, //12494
=======
    {nome:"Botija de gás R134 RLX ",tipo:"R134",cod:12494 , vista:949.00, prazo:999.00, indice:3 }, // 13083
>>>>>>> 49de0b731cba972c26af826e8919aa4ce823f51c
    {nome:"Gás R32 3KG ZAK",cod:13299 ,vista:239.90, prazo:250.00, indice:4 }, // 13299
>>>>>>> 59c36cc3c7acf864725d094f54a8d28ba6c4a041

    {nome:"Botija de gás R22 13,6kg Eos ",tipo:"R22",cod:1375 ,prazo:950.00,  vista:890.00, indice:5}, // 1375
    {nome:"Botija de gás R22 13,6kg Friven ",tipo:"R22",cod:13421 ,prazo:1015.00,  vista:980.00, indice:6}, // 13421
    {nome:"Botija de gás R22 6,8kg ",tipo:"R22",cod:13315 ,prazo:650.00,  vista:630.00, indice:7}, // 13315
    {nome:"Gás R22 Lata 1kg Freon ",tipo:"R22",cod:11656 ,prazo:150.00,  vista:140.00, indice:8}, // 11656
    {nome:"Gás R22 Lata 900g ",tipo:"R22",cod:9346 ,prazo:120.00,  vista:115.00, indice:9}, // 9346

    {nome:"Botija de gás R404 Friven ",tipo:"R404",cod:664 ,prazo:790.00,  vista:740.00, indice:10}, // 664
    {nome:"Botija de gás R404 Uni ",tipo:"R404",cod:13314 ,prazo:690.00,  vista:650.00, indice:11 }, // 13314
    {nome:"Botija de gás R410 Friven ",tipo:"R410",cod:4302 ,prazo:1030.00,  vista:980.00, indice:12}, // 4302
    {nome:"Gás R410 Lata 750g ",tipo:"R410",cod:12571 ,prazo:160.00,  vista:150.00, indice:13}, //  12571
    {nome:"Gás R410 Lata 650g Freon",tipo:"R410",cod:11993 ,prazo:90.00,  vista:85.00, indice:14} // 11993




    /*  DIA DOS PAIS
13083	GAS R134 13,6KG BOTIJA UNI	949,00	890,00
12006	GAS R134A 1KG LATA DUPONT	125,00	109,90
6404	GAS R134A 750G LATA 	    65,00	60,00
13204	GAS R290 380G LATA 	        40,00	38,00
13299	GAS R32 3KG BOTIJA ZAK	    250,00	239,90

1375	GAS R22 13,6KG EOS BOTIJA	925,00	890,00
13421	GAS R22 13,6KG BOTIJA FRIVEN 	1025,00	980,00
13315	GAS R22 6,8KG BOTIJA 	    568,00	540,00
11656	GAS R22 1KG LATA DUPONT 	150,00	140,00
9346	GAS R22 900G LATA	       125,00	120,00

664	    GAS R404 10,9KG BOTIJA FRIVEN	780,00	720,00
13314	GAS R404 10,9KG BOTIJA UNI	    695,00	680,00
4302	GAS R410 11,34K BOTIJA	        1025,00	970,00
12571	GAS R410 750G LATA 	            90,00	85,00
11993	GAS R410A 650G LATA DUPONT  	160,00	145,00



*/
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
    a vista: ${fluidos[itemGas.value]['vista'].toFixed(2)} `
    // if (gas.value== 7 || gas.value == 8 || gas.value == 9 || gas.value == 10){
    //     descricao.innerText += `Acima de 12 unidades a vista: ${produtosGas[gas.value]['extra1']} cada
    //  `
    // }

    descricao.innerText += `
    
    ${datafinal}
    `  
   // Promoção ${tituloPromocao}!!
})
 })
  





/*
    Mes de maio

 let fluidos = [

    

    

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
