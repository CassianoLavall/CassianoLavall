function calculaAreaTriangulo(){
 const base = prompt("Informe a base do triangulo")
 const altura = prompt("Informe a altura do triangulo")
  let confirma = confirm(
    "As seguintes informaçoes estão corretas?\n"+
     "base: "+ base +
     "\naltura: "+ altura
  )
  if(confirma==true){
   return base*altura/2 
  }
}

function calculaAreaRetangulo(){
  const base = prompt("Informe a base do retangulo")
  const altura = prompt("Informe a altura do retangulo")
  let confirma = confirm(
    "As seguintes informaçoes estão corretas?\n"+
     "base: "+ base +
     "\naltura: "+ altura
  )
  if(confirma==true){
  return (base*altura)
  }
}

function calculaAreaQuadrado(){
  const lado = prompt("Informe o lado do quadrado")
  let confirma = confirm(
    "As seguintes informaçoes estão corretas?\n"+
     "lado: "+ lado 
  )
  if(confirma==true){
return (lado*lado)
}
}

function calculaAreaTrapezio(){
 const baseMaior=parseFloat(prompt("Infome a base maior"))
 const baseMenor=parseFloat(prompt("Infome a base menor"))
 const altura=prompt("Infome a altura")

  let confirma = confirm(
    "As seguintes informaçoes estão corretas?\n"+
     "base maior: "+ baseMaior +
     "\nbase menor: "+ baseMenor +
     "\naltura: "+ altura
  )
  if(confirma==true){
  return (baseMaior+baseMenor )* altura /2
  }
}

function calculaAreaCirculo(){
  const raio = prompt("Informe o raio do circulo")
  let confirma = confirm(
    "As seguintes informaçoes estão corretas?\n"+
     "Raio: "+ raio 
  )
  if(confirma==true){
   return (raio*raio) * 3.14
  }
}

function showMenu (){
 return prompt(
    "Bem vindo a calculadora geometrica.\n"+
    "Escolha uma das opçoes a seguir para calcular.\n"+
    "1 - Calcular a area de um Triângulo\n"+
    "2 - Calcular a area de um Retângulo\n"+
    "3 - Calcular a area de um Quadrado\n"+
    "4 - Calcular a area de um Trapézio\n"+
    "5 - Calcular a area de um Circulo\n"+
    "6 - Sair\n")
}

function executar(){
  let opçao = ""
  do{
    opçao = showMenu()
    let resultado
    switch(opçao){
      case "1"
      :resultado = calculaAreaTriangulo()
      break  
      case "2"
      :resultado = calculaAreaRetangulo()
      break  
      case "3"
      :resultado = calculaAreaQuadrado()
      break  
      case "4"
      :resultado = calculaAreaTrapezio()
      break  
      case "5"
      :resultado = calculaAreaCirculo()
      break  
      case "6"
      :alert("Encerrando...")
      break  
      default
      : alert("Opção invalida.")
    }
    if(resultado){  /// importante o if e o alert estarem dentro do  (do)
      alert("Resultado = " + resultado)
    }
  }while(opçao !== "6")
}

executar()