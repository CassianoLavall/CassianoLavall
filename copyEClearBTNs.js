const copyToClipeboard = (ev) => {
    const button=ev.currentTarget
    if(button.innerText === 'Copy'){
      button.innerText='Copied'
      button.classList.add('success')
      navigator.clipboard.writeText(document.getElementById('result').value)
    }else{
      button.innerText='Copy'
      button.classList.remove('success')
    }
}

const clearBtn = () =>{
  input.value=""
  input.focus()  //// deixa o cursor ja no input
}

export{copyToClipeboard, clearBtn}