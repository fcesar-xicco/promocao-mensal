
//--------------------------------------------------Comercial

let produtosComercial = [
    {nome:'Suporte Split 7-12 400MM ',tipo: "Suporte",cod:2265 , prazo:23.90,vista:21.50, indice:0, },//0  2265
    {nome:'Suporte barril 7-12 450MM ',tipo: "Suporte",cod:12211 , prazo:27.90,vista:24.50, indice:1,},//1  12211
    {nome:'Suporte Split 18-24 500MM ',tipo: "Suporte",cod:7288 , prazo:36.90,vista:32.90,indice:2, },//2  7288
    // {nome:'Suporte Split 30-36 600MM ',tipo: "Suporte",cod:7289 ,vista:54.90, prazo:59.90, extra1:51.90 ,extra2:53.90, indice:3, promo:"pascoa" },//3
    // {nome:'Suporte Split 48-60 600MM ',tipo: "Suporte",cod:7289 ,vista:54.90, prazo:59.90, extra1:51.90 ,extra2:53.90, indice:3, promo:"pascoa" },//3
    {nome:'Micro motor Elgin 1/40 110/220V ',tipo: "Comercial",cod:6153 , prazo:52.90,vista:49.90 , indice:3,},//3  6153
    {nome:'Micro motor Elgin 1/25 110/220V ',tipo: "Comercial",cod:2418 , prazo:62.90,vista:58.90 , indice:4,},//4  2418

    {nome:'Controlador FULL GAUGE MT512E',tipo: "Comercial",cod:3966 ,prazo:135.00, vista:129.90 ,  indice:5,},//5  3966
    {nome:'Controlador FULL GAUGE TC900E',tipo: "Comercial",cod:4874 , prazo:185.00, vista:175.90 , indice:6,},//6 4874
    {nome:'Gas Macarico Lata Map ZAK 400g',tipo: "Comercial",cod:13028 , prazo:29.90, vista:25.00 , indice:8},//8 13028
    
    {nome:'Fluído  AIR REPAIR 500ML PESCAN',tipo: "Comercial",cod:13233 , prazo:34.90, vista:29.90 , indice:11},//11 13028
    {nome:'Espuma Limpadora Air repair Pescan',tipo: "Comercial",cod:13238 , prazo:21.90, vista:19.90 , indice:12},//12  1428
    {nome:'Conj. Manilfold R410/R32 Mang 90cm',tipo: "Comercial",cod:8378 , prazo:160.00, vista:150.00 , indice:14}//15 13028
    

]

/*              MÊS DOS PAIS
2265	SUPORTE SPLIT 7-12 400MM	23,90	21,50
12211	SUPORTE SPLIT 7-12 450MM	27,90	24,50
7288	SUPORTE SPLIT 18-24 500MM	36,90	32,90
6153	MICRO MOTOR ELGIN 1/40 COM SUPORTE E HELICE  110V E 220V	52,90	49,90
2418	MICRO MOTOR ELGIN 1/25 COM SUPORTE E HELICE 110V E 220V	62,90	58,90

3966	CONTROLADOR FULL GAUGE DIGITAL MT512E 127V/220V 	135,00	129,90
4874	CONTROLADOR FULL GAUGE TC900E POWER 115/230V	    185,00	175,00
1428	BICO MACARICO PORTATIL AUTOMATICO SURYHA80150.016   205,00	180,00
13028	GAS MACARICO MAP 400G LATA ZAK	                    29,90	25,00
13237	OLEO PARA BOMBA DE VACUO AIR REPAIR 1lt PESCAN	    45,90	42,90

392	KIT CENTRAL ELETRICA SURYHA 80150.064   	            125,00	118,00
13233	FLUIDO AIR REPAIR 500ML PESCAN (SUBSTITUI 141B)	    34,90	29,90
13238	ESPUMA LIMPADORA AIR REPAIR- 300ML/290G PESCAN	    21,90	19,90
13163	MANIFOLD DIGITAL 2 VIAS MS-100 - BLUETOOTH	        730,00	690,00
8378	CONJUNTO MANIFOLD MANG. 90CM - R41080150.033	    160,00	150,00

*/



produtosComercial.forEach((produto)=>{
    let abaComercial = document.querySelector('ul.aba-comercial')
    let liComercial = document.createElement('li')
    liComercial.innerText = produto.nome
    liComercial.setAttribute('class','item')
    liComercial.classList.add('comercial')
    liComercial.setAttribute('value',produto.indice)
    liComercial.setAttribute('title','cod.' + " " + produto.cod)  // mostrar a descrição ao passar o mouse
    if(produto.tipo == "Suporte"){
        liComercial.classList.add('suportes') 
    }

    //promoção de pascoa
    if(produto.promo == "yellow"){
        liComercial.classList.add('yellow')
      }
      // fim da promoção
    abaComercial.appendChild(liComercial)
  })
 
  


let itemComercial = document.querySelectorAll('li.comercial')

itemComercial.forEach((item) =>{

    item.addEventListener('click',()=>{
        descricao.style.color = 'black'
        descricao.style.background = 'white'
        mostrarDescricao()
    
        // if(produtosComercial[item.value]['nome'].includes('Suporte')){
    
        //     descricao.innerText = `${produtosComercial[item.value]['nome']}
        //     a prazo: ${produtosComercial[item.value]['prazo'].toFixed(2)}
        //     a vista: ${produtosComercial[item.value]['vista'].toFixed(2)}
    
        //     na caixa fechada a vista:${produtosComercial[item.value]['extra1'].toFixed(2)} cada
        //     na caixa fechada a prazo:${produtosComercial[item.value]['extra2'].toFixed(2)} cada
            
        //     Promoção ${tituloPromocao}!!
        //     ${datafinal}      
        //     `
        // }
        // else{
            descricao.innerText = `${produtosComercial[item.value]['nome']}
            a prazo: ${produtosComercial[item.value]['prazo'].toFixed(2)}
            a vista: ${produtosComercial[item.value]['vista'].toFixed(2)}
    
           ${datafinal}
            `

            // Promoção ${tituloPromocao}!!
            
        // }


    })



})


/*
                    COBRE

if(produtosComercial[item.value]['nome'].includes('Cobre')){
    
    descricao.innerText = `${produtosComercial[item.value]['nome']}
    prazo: ${produtosComercial[item.value]['prazo'].toFixed(2)}
    a vista: ${produtosComercial[item.value]['vista'].toFixed(2)}

    acima de 10kg: ${produtosComercial[item.value]['kg10'].toFixed(2)} o kg no a vista
    acima de 20kg: ${produtosComercial[item.value]['kg20'].toFixed(2)} o kg no a vista

    Promoção vem verão!!
    validade até ${datafinal}
    `
    */