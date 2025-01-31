
//--------------------------------------------------Comercial

let produtosComercial = [
    {nome:'Suporte Split 7-12 400MM ',tipo: "Suporte", vista:22.90, prazo:25.90, extra1:21.90 ,extra2:24.90, indice:0 },//0  2265
    {nome:'Suporte barril 7-12 450MM ',tipo: "Suporte",vista:25.90, prazo:29.90, extra1:24.90 ,extra2:28.90, indice:1 },//1  12211
    {nome:'Suporte Split 18-24 500MM ',tipo: "Suporte",vista:33.90, prazo:36.90, extra1:32.90 ,extra2:35.90, indice:2 },//2  7288
    {nome:'Suporte Split 30-36 600MM ',tipo: "Suporte",vista:54.90, prazo:57.90, extra1:51.90 ,extra2:53.90, indice:3 },//3
    {nome:'Micro motor Elgin 1/40 110/220V ',tipo: "Comercial",vista:54.90 , prazo:59.90, indice:4},//3  6153
    {nome:'Micro motor Elgin 1/25 110/220V ',tipo: "Comercial",vista:63.90 , prazo:69.90, indice:5},//4  2418
    {nome:'Controlador FULL GAUGE MT512E ',tipo: "Comercial",vista:135.00 , prazo:142.90, indice:6},//0  3966
    {nome:'Controlador FULL GAUGE TC900E ',tipo: "Comercial",vista:179.00 , prazo:189.90, indice:7},//0  4874
    {nome:'Bico macarico portatil suryha ',tipo: "Comercial",vista:179.00 , prazo:189.00, indice:8},//2  1428
    {nome:'Gas Macarico Lata Map ZAK 400g ',tipo: "Comercial",vista:25.00 , prazo:28.00, indice:9}//2  1428
    // {nome:'COBRE FLEXIVEL DIVERSAS BITOLAS ',vista:0 , prazo:0 ,kg10:0 , kg20:0},//2

]

/*
2265	SUPORTE SPLIT 7-12 400MM	22,90	25,90	21,90	24,90........................................... 4094
12211	SUPORTE SPLIT 7-12 450MM	25,90	29,90	24,90	28,90...........................................
7288	SUPORTE SPLIT 18-24 500MM	33,90	36,90	32,90	35,90...........................................
6153	MICRO MOTOR ELGIN 1/40 COM SUPORTE E HELICE  110V E 220V	54,90	59,90...........................		
2418	MICRO MOTOR ELGIN 1/25 COM SUPORTE E HELICE 110V E 220V	63,90	69,90...............................		
3966	CONTROLADOR FULL GAUGE MT512E REF(3614)	135,00	142,00	...........................................	
4874	CONTROLADOR FULL GAUGE TC900 BIV   E115/230VAC. (3691) 	179,00	189,00...............................		
1428	BICO MACARICO PORTATIL AUTOMATICO SURYHA 80150.016   	179,00	189,00...............................
13028	GAS MACARICO MAP LATA ZAK 400G	25,00	28,00 .......................................................

*/



produtosComercial.forEach((produto)=>{
    let abaComercial = document.querySelector('ul.aba-comercial')
    let liComercial = document.createElement('li')
    liComercial.innerText = produto.nome
    liComercial.setAttribute('class','item')
    liComercial.classList.add('comercial')
    liComercial.setAttribute('value',produto.indice)
    if(produto.tipo == "Suporte"){
        liComercial.classList.add('suportes') 
    }

    abaComercial.appendChild(liComercial)
  })
  


let itemComercial = document.querySelectorAll('li.comercial')

itemComercial.forEach((item) =>{

    item.addEventListener('click',()=>{
        descricao.style.color = 'black'
        descricao.style.background = 'white'
        mostrarDescricao()
    
        if(produtosComercial[item.value]['nome'].includes('Suporte')){
    
            descricao.innerText = `${produtosComercial[item.value]['nome']}
            a prazo: ${produtosComercial[item.value]['prazo'].toFixed(2)}
            a vista: ${produtosComercial[item.value]['vista'].toFixed(2)}
    
            na caixa fechada a vista:${produtosComercial[item.value]['extra1'].toFixed(2)} cada
            na caixa fechada a prazo:${produtosComercial[item.value]['extra2'].toFixed(2)} cada
            
            Promoção ${tituloPromocao}!!
            validade até ${datafinal}      
            `
        }else{
            descricao.innerText = `${produtosComercial[item.value]['nome']}
            a prazo: ${produtosComercial[item.value]['prazo'].toFixed(2)}
            a vista: ${produtosComercial[item.value]['vista'].toFixed(2)}
    
            Promoção ${tituloPromocao}!!
            validade até ${datafinal}
            `
        }


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