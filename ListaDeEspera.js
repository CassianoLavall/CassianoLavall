let list =[]
let menu=""
let personName=""

do{
  let petients=""
  for(let i=0;i<list.length;i++){
    petients+=(i + 1) + "° -" + list[i] +"\n"
}   
menu=prompt(
  " Ola, bem vindo ao Menu interativo"+
  " Ecolha uma das opções a seguir\n"+
  "1 -Adcionar um novo paciente\n"  +
  "2 -consultar paciente\n"+
  "3 -Sair\n"  +
  "Lista de espera\n"+
  petients
  )
  
       
  switch(menu){
      case "1"
    :const newPetient= prompt("Digite o nome do paciente")
    list.push(newPetient)
    break
    case "2"
    :personName=list.shift()
    if(personName){
      alert("paciente consultado\n"+personName)
    }else{
    alert("Não existem pacientes ha serem consultados")
    } 
    break
    case"3"
    : alert("Encerrando...")
    break
    case false
    :
    break
    default
    : alert("Opção invalida")
  }
  
}while(menu!=="3")
