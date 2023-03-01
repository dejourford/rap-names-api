const rapperName = document.querySelector('#rapperName').value
const searchBtn = document.querySelector('#searchBtn')
const birthName = document.querySelector('#birthName')

async function getName (rapperName)  {
    const response = await fetch(`http://localhost:8/api/:${rapperName}`)
    const data = await response.json()
    console.log('function working')
    console.log(data)
    birthName.textContent = 'hello world'
    console.log('wtf')
}

searchBtn.addEventListener('click', ()=> {
    getName(rapperName)
    console.log('clicked')
})