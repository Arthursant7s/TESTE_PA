//Doom
const capa = document.querySelector('#capa')
const sinope = document.querySelector('#sinpse')
const bt1 = document.querySelector('#bt1')
const bt2 = document.querySelector('#bt2')
const bt3 = document.querySelector('#bt3')
const bt4 = document.querySelector('#bt4')
//Eventos

bt1.addEventListener('click',Homem_aranha)
bt2.addEventListener('click',Pantera_Negra)
bt3.addEventListener('click',Avengers)
bt4.addEventListener('click',Velozes_Furiosos)

//Ação

function Homem_aranha(){
    capa.src = 'images/spider-man background.jpg'
    sinopse.textContent = `Peter Parker é um estudante do ensino médio tímido, estudioso e com pouca sorte social,
    apaixonado por sua vizinha Mary Jane Watson e cujo melhor amigo é Harry Osborn.
    Durante uma visita escolar a um laboratório de genético, Peter é picado por uma aranha
    geneticamente modificada e desenvolve superpoderes (superforça, agilidade, capacidade de escalar paredes e um "sentido aranha").`

}
function Pantera_Negra(){
    capa.src = 'images/pantera-negra-poster.webp'
    sinopse.textContent = `A Ascensão ao Trono: Após a morte de seu pai, o rei T'Chaka, T'Challa passa pelo ritual de coroação e assume o manto do Pantera Negra.
    Wakanda esconde do mundo seu verdadeiro poder tecnológico, impulsionado pelo vibranium, um metal raro e valioso que caiu na região há milênios.
    A Ameaça de Killmonger: A estabilidade do reino é abalada quando surge Erik "Killmonger" Stevens (Michael B. Jordan),
    um ex-soldado americano com um passado sombrio ligado à família real de Wakanda. Killmonger revela ser filho do príncipe N'Jobu (irmão de T'Chaka),
    assassinado após tentar contrabandear vibranium para libertar pessoas negras oprimidas ao redor do mundo.`

}
function Avengers(){
    capa.src = 'images/Avengers background.webp'
    sinopse.textContent = `Os Vingadores (2012) é um marco na história do cinema que consolidou o ambicioso Universo Cinematográfico da Marvel (MCU) ao reunir, pela primeira vez,
    os heróis mais poderosos da Terra em uma única produção. Dirigido por Joss Whedon, o longa acompanha a icônica equipe formada por Homem de Ferro, Capitão América, Thor,
    Hulk, Viúva Negra e Gavião Arqueiro, que são convocados por Nick Fury,
    diretor da agência S.H.I.E.L.D., para enfrentar uma ameaça global sem precedentes liderada pelo carismático vilão Loki.`

}
function Velozes_Furiosos(){
    capa.src = 'images/velozes_furiosos background.jpg'
    sinopse.textContent = `Velozes e Furiosos (2001) é um filme de ação dirigido por Rob Cohen que explora o submundo das corridas ilegais de rua em Los Angeles.
    A história acompanha Brian O'Conner (Paul Walker), um policial disfarçado que se infiltra na gangue de Dominic Toretto (Vin Diesel).
    O objetivo inicial de Brian é investigar roubos de equipamentos eletrônicos em movimento,
    mas ele acaba envolvido pela adrenalina dos carros tunados e se apaixona por Mia Toretto (Jordana Brewster), irmã de Dominic`

}