
const searchBtn = document.querySelector('#searchBtn')
const birthName = document.querySelector('#birthName')

async function getName ()  {
    const rapperName = document.querySelector('#rapperName').value
    const response = await fetch(`http://localhost:8/api/${rapperName}`)
    const data = await response.json()
    
    console.log(data)
    birthName.textContent = data.birthName
    
}

searchBtn.addEventListener('click', ()=> {
    getName(rapperName)
    
})