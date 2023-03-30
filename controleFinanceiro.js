let moneyQuestion= ""
let morLesMoney = 0
startMoney= parseFloat(prompt("Qual a Quantia Inicial?"))


do{
    alert("Dinheiro total: R$"+startMoney)

moneyQuestion= prompt(
    "R$ "+startMoney +
    "\nEscolha a opção desejada" +
    "\n 1 -Adicionar dinheiro" +
    "\n 2 -Subtrair Dinheiro" +
    "\n 3 -Sair"
)

switch(moneyQuestion){
    case"1"
    :startMoney+=parseFloat(prompt("Quanto dinheiro gotaria de adicionar?"))
    break
    case"2"
    :startMoney-=parseFloat(prompt("Quanto dinheiro gotaria de adicionar?"))
    break
    case"3"
    :alert("saindo...")
    break
    default
    : alert("Opção Invalida")
}
}while(moneyQuestion!=="3")



