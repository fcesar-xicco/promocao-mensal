
//--------------------------------------------------LINHA BRANCA

let produtosLinhaB = [
    {nome:'Bomba Univ. 127/220v EMICOL',vista:18.90 , prazo:20.90, extra1:15.95 ,extra2:16.95, indice:0},//0
    {nome:'Bomba Univ. 127/220V c/Prot EMICOL',vista:19.75 , prazo:22.90, indice:1},//1   12951 - 12952

    {nome:'Rolamento 6006 2RS Orig c/Caixa ',vista: 11.90, prazo:14.90, indice:2},//5 1511
    {nome:'Rolamento 6006 2R Orig s/caixa ',vista:10.90, prazo:13.90, indice:3},//6 13278
    {nome:'Agitador 8 Blades W10882241 Orig ',vista: 57.90, prazo:65.00, indice:4},//5 1599
    {nome:'Agitador 8 Blades paralelo.',vista: 27.00, prazo:35.00, indice:5},//5 1599
    {nome:'Atuador do freio 127v Elect. 64500661.',vista:44.50, prazo:47.50, indice:6},//6

    // {nome:'Mecanismo EIXO LONGO W11300816 Orig.',vista: 154.90, prazo:167.90, indice:2},//2
    // {nome:'Mecanismo SMART MINI W11299803 Orig.',vista:125.90 , prazo:139.90, indice:3},//3
    // {nome:'Mecanismo EIXO CURTO W11300675 Orig.',vista: 145.00, prazo:169.00, indice:4},//4
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
        validade até ${datafinal}
        `







    })

}



