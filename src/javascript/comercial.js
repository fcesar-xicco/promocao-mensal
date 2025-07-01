
//--------------------------------------------------Comercial

let produtosComercial = [
    {nome:'Suporte Split 7-12 400MM ',tipo: "Suporte",cod:2265 ,vista:22.90, prazo:25.90, extra1:21.90 ,extra2:23.90, indice:0, promo:"pascoa" },//0  2265
    {nome:'Suporte barril 7-12 450MM ',tipo: "Suporte",cod:12211 ,vista:25.90, prazo:29.90, extra1:24.90 ,extra2:28.90, indice:1, promo:"pascoa" },//1  12211
    {nome:'Suporte Split 18-24 500MM ',tipo: "Suporte",cod:7288 ,vista:33.90, prazo:36.90, extra1:31.90 ,extra2:35.90, indice:2, promo:"pascoa" },//2  7288
    {nome:'Suporte Split 30-36 600MM ',tipo: "Suporte",cod:7289 ,vista:54.90, prazo:59.90, extra1:51.90 ,extra2:53.90, indice:3, promo:"pascoa" },//3
    {nome:'Micro motor Elgin 1/40 110/220V ',tipo: "Comercial",cod:6153 ,vista:54.90 , prazo:57.90, indice:4, promo:"pascoa"},//3  6153
    {nome:'Micro motor Elgin 1/25 110/220V ',tipo: "Comercial",cod:2418 ,vista:65.90 , prazo:69.90, indice:5, promo:"pascoa"},//4  2418
    {nome:'Controlador FULL GAUGE MT512E ',tipo: "Comercial",cod:3966 ,vista:130.00 , prazo:142.00, indice:6, promo:"pascoa"},//0  3966
    {nome:'Controlador FULL GAUGE TC900E ',tipo: "Comercial",cod:4874 ,vista:175.90 , prazo:185.00, indice:7, promo:"pascoa"},//0  4874
    {nome:'Bico macarico portatil suryha ',tipo: "Comercial",cod:1428 ,vista:179.00 , prazo:189.00, indice:8},//2  1428
    {nome:'Gas Macarico Lata Map ZAK 400g ',tipo: "Comercial",cod:13028 ,vista:25.00 , prazo:28.00, indice:9},//2 13028
    {nome:'Fluido Reparir 900ml Pescan R141B ',tipo: "Comercial",cod:13234 ,vista:55.00 , prazo:60.00, indice:10}//2 13028
    // {nome:'COBRE FLEXIVEL DIVERSAS BITOLAS ',vista:0 , prazo:0 ,kg10:0 , kg20:0},//2

]




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
    if(produto.promo == "pascoa"){
        liComercial.classList.add('pascoa')
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
            prorrogado até ${datafinal}
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