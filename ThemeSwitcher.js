const themeSwitcher = () =>{
  const main = document.querySelector('main')
  const root= document.querySelector(':root') 

  document.getElementById('themeSwitcher').addEventListener('click', function () {
  if (main.dataset.theme==='dark') {
    root.style.setProperty('--bg-Color','#f1f5f9')
    root.style.setProperty('--border-color','#020202')
    root.style.setProperty('--font-color','#212529')
    root.style.setProperty('--primary-color','#26834a')
    main.dataset.theme= 'light'
  } else {
    root.style.setProperty('--bg-Color', '#212529')
    root.style.setProperty('--border-color', '#666')
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--primary-color', '#4dff91')
    main.dataset.theme= 'dark'
    }
})}

export{themeSwitcher}