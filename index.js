function escalar(){
  
  const playerPosition = document.getElementById('playerPosition').value
  const playerName = document.getElementById('playerName').value
  const playerNumber = document.getElementById('playerNumber').value

  const confirmation = confirm(
   "Deseja escalar "+ playerName + " como " + playerPosition + "?" )
  
  if(confirmation){
    const ul = document.getElementById ('escalaçao')
    const player = document.createElement('li')
    player.id='player-' + playerNumber
    player.innerText= playerName +': '+playerPosition +': (' + playerNumber + ')'
    ul.appendChild(player)
    
    document.getElementById('playerName').value= ''
    document.getElementById('playerNumber').value= ''
    document.getElementById('playerPosition').value= ''
  }
}

function remover(){
  const numberToRemoove = document.getElementById('numberToRemoove').value
  
  const remoovePlayer = document.getElementById( 'player-' + numberToRemoove)
  
  const confirmation= confirm(
    "Remover "+ remoovePlayer.innerText +"?"
  )
  if(confirmation){
    remoovePlayer.remove()
    document.getElementById('numberToRemoove').value= ''
  }
}