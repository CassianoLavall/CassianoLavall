const vacancies = []


function listVacancies(){ // case 1 
  if(vacancies==false){
    alert("nao ha vagas registradas")
    return
  }
  const vagasEmTexto = vacancies.reduce(function(textoFinal,vacancie,index,){
  textoFinal+="vaga N° " +index + "- "
  textoFinal+=vacancie.name
  textoFinal+= " (" + vacancie.candidates.length + " Candidatos)\n"
  return textoFinal
  },"") // segundo valor é uma string vazia pois é o valor inicial 0
  alert(vagasEmTexto) // nao esquecer do alert 
}

function newVacancie(){ // case 2
  const vacancie = {
    canditates:[]
  }
  const name= prompt("Digite o nome da vaga")
  const description = prompt ("Descreva a vaga que deseja adicionar")
  const limitDate= prompt("Qual a data limite da vaga \n escreva nesse modelo dd/mm/aaaa")
 
  const confirmy = confirm (
    "As informações a seguir estão corretas?\n"+
    "Nome da vaga: "+ name+
    "\n Descrição da vaga: "+ description+
    "\n Data limite da vaga:" + limitDate
  )

  if(confirmy===true){
    const vacancie = {
      name,
      description,
      limitDate,
      candidates:[]
    }
    vacancies.push(vacancie)
    alert("Vaga adicionada com sucesso")
  }else{
    alert("Voltando ao menu inicial")
  }
}

function viewVacancie(){ /// case3
  const i = prompt ("Informe o numero da vaga que deseja visualizar")
  if(i>= vacancies.length || i<0){
    alert ("indice invalido")
   return
   }
  const vaga = vacancies[i] 
  const canditatosEmTexto = vaga.candidates.reduce(function(textoFinal,candidato){
   return textoFinal + "\n - " + candidato
  },"")
  alert(
  "Vaga: n°" + i +
  "Nome da vaga: " +vaga.name+
  "Descrição da vaga: " + vaga.description+
  "Data final da vaga: " + vaga.limitDate +
  "Quantidade de candidatos: " + vaga.candidates.length+
  "Lista de candidatos\n:" +  canditatosEmTexto 
  )
}

function registerCandidate (){  /// case 4
  
  const candidate = prompt("Qual o nome do candidato(a)?")
  const index = prompt ("Em qual vaga deseja adicionar esse candidato?\n Digite o numero da vaga.")
  if(index>= vacancies.length || index<0){
    alert ("indice invalido")
   return
   }
  const vaga = vacancies[index] // a variavel é a vaga que esta na posiçao index
  //isso deixa mais simples para manipular td
  const confirmy= confirm(
    "Deseja adicionar o candidato "+ candidate + " na vaga " + index + "?\n"+
    "Nome: "+ vaga.name+ "\nDescrição: " + vaga.description +"\nData limite: " + vaga.limitDate
  )
  
  if(confirmy== true){
    vaga.candidates.push(candidate)
    alert("Candidato adicionado a vaga.")
  }
 
}

function deleteVacancie(){ /// case 5
  const index = prompt ("Informe o numero da vaga que deseja excluir")
  if(index>= vacancies.length || index<0){
    alert ("indice invalido")
   return
   }
  const vaga = vacancies[index]
  
  const confirmy = confirm(
  "deseja realmente excluir essa vaga?\n"+
   "Vaga: n°" + index +
   "\nNome da vaga: " +vaga.name+
   "\nDescrição da vaga: " + vaga.description+
   "\nData final da vaga: " + vaga.limitDate +
   "\nQuantidade de candidatos: " + vaga.candidates.length
  )
  
  if(confirmy){
  vacancies.splice(index,1) 
  alert("Vaga excluida.")
  }
}

function menu(){
  const opção = prompt (
  "Menu vagas de emprego.\n\n"+
  "Escolha a opção desejada.\n"+
  "1 - Listar vagas disponiveis.\n "+
  "2 - Criar uma nova vaga.\n"+
  "3 - Visualizar uma vaga.\n" +
  "4 - inscrever um candidato em uma vaga.\n" +
  "5 - Excluir uma vaga.\n"+
  "6 - sair."
  )
  return opção
}

function executar(){
  let opção= ""
  do{  
    opção= menu()

   switch(opção){
    case"1"
    : listVacancies()
    break
    case"2"
    : newVacancie()
    break
    case"3"
    : viewVacancie()
    break
    case"4"
    : registerCandidate()
    break
    case"5"
    : deleteVacancie()
    break
    case"6"
    : alert("Saindo.")
    break
    default
    : alert("opção invalida.")
   }
  }while(opção!=="6")
}

executar()









