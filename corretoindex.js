function createLabel(text, htmlFor){
 const label = document.createElement('label')
 label.innerText = text
 label.htmlFor = htmlFor
 return label
}

function createInputs(id, value, name, type='text',placeholder=''){
  const input = document.createElement('input')
  input.id = id
  input.value = value
  input.name = name
  input.type = type
  input.placeholder=placeholder
  return input
}

const addButton = document.getElementById('add-technology')
const form = document.getElementById('devForm')

const developers=[]
let inputsRows=0

addButton.addEventListener('click',function(ev){
  const experiencesList = document.getElementById('experiencesList')
  const newRow = document.createElement('li')
  const rowIndex = inputsRows 
  inputsRows++
  newRow.id ='row-'+rowIndex
  newRow.className= 'input-row'
  
  const techNameLabel= createLabel('Nome da tecnologia:', 'techName'+rowIndex)
  const techNameInput = createInputs('techName'+rowIndex,null,'techName')
  
  const expTimeLabel= createLabel('Tempo de experiencia:','ExpTime-'+rowIndex)
  const id1='ExpTime-'+rowIndex +'.1'
  const expRadio1= createInputs(id1,'0-2 Anos','techExp-'+rowIndex,'radio')
  const explabel1= createLabel('0-2 Anos',id1)
  const id2='ExpTime-'+rowIndex +'.2'
  const expRadio2= createInputs(id2,'3-4 Anos','techExp-'+rowIndex,'radio')
  const explabel2= createLabel('3-4 Anos',id2)
  const id3='ExpTime-'+rowIndex +'.3'
  const expRadio3= createInputs(id3,'5+ Anos','techExp-'+rowIndex,'radio')
  const explabel3= createLabel('5+ Anos',id3)
  
  experiencesList.appendChild(newRow)
  
  const remooveButton= document.createElement('button')
  remooveButton.type='button'
  remooveButton.innerText='Remover'
  remooveButton.name= 'remoovebutton'
  
  remooveButton.addEventListener('click', function(){
    experiencesList.removeChild(newRow)
  })
  newRow.append(techNameLabel,techNameInput,
    document.createElement('br'),
    expTimeLabel,
    expRadio1,
    explabel1,
    expRadio2,
    explabel2,
    expRadio3,
    explabel3,
    document.createElement('br'),
    remooveButton,
    document.createElement('br'),
    document.createElement('br')
    )
  
})

form.addEventListener('submit', function(ev){
  ev.preventDefault()
  
  const fulNameInput=document.getElementById('name')
  const inputRows = document.querySelectorAll('.input-row')
   
  let technologies=[]
  inputRows.forEach(function(row) {
    const techName= document.querySelector('#'+ row.id + ' input[name="techName"]').value
    const techExp= document.querySelector('#'+ row.id + ' input[type="radio"]:checked').value

    technologies.push({name: techName, exp: techExp})
  })

  const newDev={
    FulName:fulNameInput.value,
    technologies:technologies
  }
  developers.push(newDev)

  alert("Dev cadastrado com sucesso")

  fulNameInput.value=''
  inputRows.forEach(function(row){
   row.remove()
  })
  
  console.log(developers)

})



