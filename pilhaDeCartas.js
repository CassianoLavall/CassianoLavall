const pilhaDeCartas =["valete de copas","Dama de ouro","2 de espadas","8 de espadas",
"9 de copas","10 de ouro","3 de espadas","5 de ouro"]
let cart
let menu
do{
  menu = prompt(
    "Bem vindo ao menu inrterativo\n"+
    "Escolha uma das opçoes a seguir\n"+
    "1 -Adicionar uma carta\n"+
    "2 -Pegar uma carta\n"+
    "3 -Sair\n"+
    "O baralho contem "+pilhaDeCartas.length+ " cartas"
    )
    switch(menu){
     case"1"
    :let newCart = prompt("Qual a carta deseja adicionar?")
    pilhaDeCartas.unshift(newCart)
    break
    case"2"
    :cart=pilhaDeCartas.shift()
    if(!cart){
      alert("Nao ha cartas no baralho")
    }else{
    alert("Sua carta é "+ cart)
    }
    break
    case"3"
    : alert("encerrando...")
    break
    default
    :alert("Opição invalida")
    }
    
}while(menu!=="3")