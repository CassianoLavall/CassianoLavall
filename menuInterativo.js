

 let options = ""

do{
  options = prompt(
    "Escolha o numero da opção desejada"+
    "\n 1 -Falar com o supervisor"+
    "\n 2 -Quero ser um fornecedor" +
    "\n 3 -Quero trabalhar com voces" +
    "\n 4 -Quero ser cliente"+
    "\n 5 -Encerrar"
    )
  switch(options){
    case"1"
    :alert("voce escolheu a opção\n - Falar com o supervisor")
    break
    case"2"
    :alert("voce escolheu a opção\n - Quero ser um fornecedor")
    break
    case"3"
    :alert("voce escolheu a opção\n - Quero trabalhar com vocês")
    break
    case"4"
    :alert("voce escolheu a opção\n - Quero ser um cliente")
    break
    case"5"
    :alert("O sistema esta encerrando")
    break
    default
    : alert("Opção Invalida")
}
} while(options!=="5")     

    