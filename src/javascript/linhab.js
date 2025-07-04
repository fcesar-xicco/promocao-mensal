
//--------------------------------------------------LINHA BRANCA

let produtosLinhaB = [
    {nome:'Bomba Univ. 127/220v EMICOL',cod:" 10245 / 10246" ,vista:18.90 , prazo:20.90, extra1:15.95 ,extra2:16.95, indice:0},//0 10245
    {nome:'Bomba Univ. 127/220v Lava/seca c/Prot Emicol',cod:" 12951 / 12952" ,vista:22.90 , prazo:24.90, extra1:21.90 ,extra2:23.90, indice:1},//0 10245
    //{nome:'Bomba Univ. 127/220V c/Prot EMICOL',vista:19.75 , prazo:22.90, indice:1},//1   12951 - 12952

    {nome:'Rolamento 6006 2RS Orig c/Caixa ',cod:1511,vista: 13.90, prazo:14.90, indice:2},//5 1511
    {nome:'Rolamento 6006 2R Orig s/caixa ',cod:13278,vista:10.90, prazo:12.90, indice:3},//6 13278
    {nome:'Agitador 8 Blades W10882241 Orig ',cod:1599,vista: 73.00, prazo:79.00, indice:4},//5 1599
    {nome:'Agitador 8 Blades Burdog paralelo',cod:8529,vista: 30.00, prazo:35.00, indice:5},//5 1599

    {nome:'Atuador do freio 127v Elect. 64500661.',cod:2332,vista:44.50, prazo:47.50, indice:6},//6
    //{nome:'Atuador do freio 127v Brastemp Emicol.',cod:,vista: 43.00, prazo:47.90, indice:5},//2

    {nome:'Cambio Eixo LONGO W11300816 Orig.',cod:5571,vista: 175.00, prazo:182.00, indice:7, promo:"pascoa"},//2
    {nome:'Cambio Eixo CURTO W11300675 Orig.',cod:4711,vista: 158.00, prazo:163.00, indice:8, promo:"pascoa"},//4
    {nome:'Cambio Smart MINI W11299803 Orig.',cod:5570,vista: 145.00 , prazo:151.00, indice:9, promo:"pascoa"},//3

    {nome:'Mangueira Saida Curva/Reta grossa.',cod:"11912 /12060",vista: 7.00, prazo:7.50, indice:10, promo:"pascoa"},//4
    {nome:'Mangueira Entrada 1,40m.',cod:10483,vista:9.50 , prazo:10.00, indice:11, promo:"pascoa"},
    // {nome:'SENSOR TEMP 2,7K W10531315 Orig.',vista:11.90, prazo:13.50, indice:6},//6
    // {nome:'TUBO MONDIAL THORMAC ',vista: 38.90, prazo:39.90, indice:7}//7



] 

/*
12951	ELETROBOMBA UNIVERSAL 127V C/ PROTETOR TERMICO EMICOL 32221910000	19,75	22,90		
12952	ELETROBOMBA UNIVERSAL 220V C/ PROTETOR TERMICO EMICOL 32217410000	19,75	22,90		
1511	ROLAMENTO 6006 2RS W10897149 ANTIGO 326075950 WHIRLPOOL ORIGINAL	11,90	14,90		
13278	ROLAMENTO 6006 2R ORIGINAL W11486744	10,90	13,90		
10245	ELETROBOMBA UNIVERSAL 127V EMICOL 32216110000	15,95	16,95	ACIMA DE 5 UNIDADES	
10246	ELETROBOMBA UNIVERSAL 220V EMICOL 32216210000	15,95	16,95	ACIMA DE 5 UNIDADES	
1599	AGITADOR 8 BLADES BWC06/7/8/10/11 CWE6/8/0 W10882241 WHIRLPOOL	57,90	65,00		
2332	ATUADOR DO FREIO 127V 64500661 ELECTROLUX	44,50	47,50		
8529	AGITADOR BURDOG 8 BLADES BRASTEMP W10882241A PARALELO	27,00	35,00		

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
    if(linhaB.promo == "pascoa"){
        liBranca.classList.add('pascoa')
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
        a vista: ${produtosLinhaB[item.value]['vista'].toFixed(2)}
        `
        
        if (item.value== 0 || item.value == 1){
            descricao.innerText += `
            Acima de 5 bombas a vista: ${produtosLinhaB[item.value]['extra1'].toFixed(2)} cada
            Acima de 5 bombas a prazo: ${produtosLinhaB[item.value]['extra2'].toFixed(2)} cada
                                    `}
                                    
        descricao.innerText += `
        Promoção ${tituloPromocao}!!
        prorrogado até ${datafinal}
        `







    })

}



