
//--------------------------------------------------LINHA BRANCA

let produtosLinhaB = [
    {nome:'Bomba Univ. 127/220v ASKOL',cod:"12168/12169" , prazo:23.90, vista:21.90 , extra1:18.90 ,extra2:21.90, indice:0},//0 extra1:15.95 ,extra2:16.95
    {nome:'Bomba Univ. 127/220v EMICOL',cod:" 10245 / 10246" , prazo:19.90, vista:18.90 ,extra1:15.95 ,extra2:16.95,  indice:1},//1 10245 ,
    {nome:'Bomba Univ. 127/220v Emicol Lava/seca ',cod:" 12951 / 12952" , prazo:24.90, vista:22.90 ,  indice:2},//2 10245 extra1:21.90 ,extra2:23.90,
    {nome:'Agitador 8 Blades W10882241 Orig ',cod:1599, prazo:78.90, vista: 71.90, indice:3},//3 1599
    {nome:'Agitador 8 Blades Burdog paralelo',cod:8529, prazo:35.00,vista: 29.90, indice:4},//4 1599
   

    {nome:'Rolamento 6006 2RS Orig c/Caixa ',cod:1511, prazo:14.90,vista: 12.90, indice:5},//5 1511
    {nome:'Rolamento 6006 2R Orig s/caixa ',cod:13278, prazo:11.90, vista:10.50, indice:6},//6 13278
    {nome:'Cambio Eixo LONGO W11300816 Orig.',cod:5571, prazo:172.90, vista: 165.90, indice:7, promo: "pais" },//7
    {nome:'Cambio Eixo CURTO W11300675 Orig.',cod:4711, prazo:166.00, vista: 155.00, indice:8, promo: "pais" },//8
    {nome:'Cambio Eixo MINI W11299803 Orig.',cod:5570, prazo:141.00, vista: 135.00, indice:9, promo: "pais"},//8

    {nome:'Mangueira Saida Curva/Reta grossa.',cod:"11912 /12060", prazo:7.50, vista: 7.00, indice:10 },//10
    {nome:'Mangueira Entrada 1,40m.',cod:10483, prazo:10.00,vista:9.50 , indice:11 }, //11  
    {nome:'Sensor temp. 2,7K W10531315 Orig.',cod: 8601, prazo:13.50, vista:11.90, indice:12},//12
    {nome:'Atuador de freio 127V 64500661 Orig.',cod: 2332, prazo:55.00, vista:52.90, indice:13},//12
    {nome:'Retentor Baixo W10751509 Orig.',cod:833, prazo:13.90, vista:12.90, indice:14},//14

] 

/*                      LINHA BRANCA DIA DOS PAIS

12168/12169	ELETROBOMBA UNIVERSAL ASKOLL S/ CARCAÇA 110V / 220V	    21,90	18,90
10245/10246	ELETROBOMBA UNIVERSAL EMICOL  FIO FUSIVEL 127/220V	    19,90	18,90
12951/12952	ELETROBOMBA UNIVERSAL EMICOL LAVA E SECA 34W            24,90	22,90
1599	AGITADOR 8 BLADES W10882241 WHIRLPOOL ORIG	                78,90	71,90
8529	AGITADOR 8 BLADES BURDOG BRASTEMP PARALELO	                35,00	29,90

1511	ROLAMENTO 6006 W10897149  WHIRLPOOL ORIG. c /caixa	         14,90	12,90
13278	ROLAMENTO 6006 2R ORIGINAL W11486744  s/caixa	            11,90	10,50
4711	MECANISMO MONDIAL EIXO CURTO WHIRLPOOL W11300675	        161,00	153,00
5571	MECANISMO CONSUL/BRAST EIXO LONGO W10297343/               	166,90	159,90
5570	MECANISMO SMART MINI CWH12 / CWE11 W11299803 WHIRLPOOL     	135,00	129,90

833	    RETENTOR BAIXO W10751509  W10791633 WHIRLPOOL ORIGINAL	    13,90	12,90
2332	ATUADOR DO FREIO 127V 64500661 ELECTROLUX - USE A236745501	55,00	52,00


*/




produtosLinhaB.forEach((linhaB)=>{
    let ul = document.querySelector('ul.aba-linhabranca')
    let liBranca = document.createElement('li')
    liBranca.innerText = linhaB.nome
    liBranca.classList.add('item')
    liBranca.classList.add('linhab')
    liBranca.setAttribute('value',linhaB.indice)
    liBranca.setAttribute('title','cod.' + " " +linhaB.cod)
    //promoção de pascoa
    if(linhaB.promo == "pais"){
        liBranca.classList.add('pais')
      }
      // fim da promoção

    ul.appendChild(liBranca)

})

let itemLinhaB = document.querySelectorAll('li.linhab')
itemLinhaB.forEach((item)=>{
  escolhidolinhaB(item)
})



function escolhidolinhaB(item){
    item.addEventListener('click',()=>{

        
        descricao.style.color = 'black'
        descricao.style.background = 'white'
      
        descricao.innerText = `${produtosLinhaB[item.value]['nome']}
        a prazo: ${produtosLinhaB[item.value]['prazo'].toFixed(2)}
        a vista: ${produtosLinhaB[item.value]['vista'].toFixed(2)} `
        
        if (item.value== 0 || item.value == 1){
            descricao.innerText += `
            Acima de 5 bombas a vista: ${produtosLinhaB[item.value]['extra1'].toFixed(2)} cada
            Acima de 5 bombas a prazo: ${produtosLinhaB[item.value]['extra2'].toFixed(2)} cada`}
                                    
        descricao.innerText += `
        
        ${datafinal}
        `
        //Promoção ${tituloPromocao}!!







    })

}



