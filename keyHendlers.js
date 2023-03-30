const input=document.getElementById('input')
import { calculate } from "./calculate.js"

const keys = (ev)=>{
  ev.preventDefault()
  const allowedKeys=["(" , ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
  if(allowedKeys.includes(ev.key)){
    input.value+=ev.key
    return
  }if(ev.key ==='Backspace'){
    input.value=input.value.slice(0,-1)/// corta o ultimo elemento do input
  }if(ev.key === 'Enter'){
    calculate()
  }
}

const charKyeBtnFunction=()=>{
  document.querySelectorAll('.charKye').forEach(function(charKyeBtn){
    charKyeBtn.addEventListener('click',function(){
    const value= charKyeBtn.dataset.value
    input.value+=value})
  })
}

export{keys, charKyeBtnFunction}