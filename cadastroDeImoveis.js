const property = []

let menu = ""

do {
  menu= prompt(
    "Ola, Bem vindo ao cadastro de imoveis.\n"+
    "No momento temos "+ property.length+ " imoveis registrados.\n"+
    "Ecolha uma das opções a seguir.\n" +
    "1 - Registrar um novo imovel.\n"+
    "2 - Visualizar os Imoveis registrados.\n"+
    "3 - Sair."
    )
  switch(menu){
    case "1"
    : const imoveis = {}    //importante nao criar a variavel imoveis antes do "do" pq nao salva no arrey

      imoveis.propietario = prompt("Qual o nome do propietario?")
      imoveis.quartos = prompt("Quantos quartos possue?")
      imoveis.banheiros = prompt("Quantos banheiros?")
      imoveis.garagem = prompt("Possui garagem? (sim/nao)")

      const confirmi = confirm(
        "Deseja salvar esse imovel?\n"+
        "Propietario: " + imoveis.propietario+
        "\nQuantidade de Quartos: "+ imoveis.quartos +
        "\nQuantidade de Banheiros: " + imoveis.banheiros +
        "\nPossui garagem: " + imoveis.garagem
      )
      if(confirmi){
      property.push(imoveis)
      alert("Imovel Salvo Com Sucesso")
      }else{
        alert("Voltando ao Menu inicial")
      }
    break
    case "2"
    :for(let i = 0; i<property.length;i++){
    alert(
      "imovel: " + (i + 1)+
      "\nPropietario: " + property[i].propietario+
      "\nQuartos: "+ property[i].quartos+
      "\nBanheiros: " + property[i].banheiros+
      "\nGaragem: " + property[i].garagem
    )
    }
      
    break 
    case "3"
    :alert("Saindo")
    break
    default
    :alert("Opção invalida")
  }

} while (menu!=="3");
console.table(property)