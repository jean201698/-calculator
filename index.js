const adcionarTarefa = document.querySelector('.adcionarTarefa')
let input = document.querySelector('.input')
let div = document.querySelector('.div')
const p = document.querySelector('.aviso')









adcionarTarefa.addEventListener('click', ()=>{
	if(!input.value){
		p.innerHTML =  'Precisa preencher o input logo acima'
		p.classList.add('corDeAviso')
		return
	}

	if(input.value) {
		 p.innerHTML = ''
	
	}
	
	jogaTextoNoli()

	
})



document.addEventListener('click', (e)=>{
	
	if(e.target.classList.contains('apagar')) {
		e.target.parentElement.remove()
	}
})

function criaLi(){  

return document.createElement('li')

}



function botaoApagar(){
	const botaoApagar = document.createElement('button')
   return botaoApagar;
}

function botao(){
	const p = botaoApagar()
	p.setAttribute('class', 'apagar')
	p.innerHTML = 'Apagar'
	return p
}




function jogaTextoNoli(){
const li = criaLi()
li.innerHTML += '<hr>' 
    li.innerHTML += `* ${input.value} </br> `
	
	li.innerHTML += '   ' + new Date().toLocaleTimeString()
	
	li.innerHTML += ' '
	li.classList.add('adicionar-cor', 'retirarOutline')
	div.appendChild(li)
	input.value = ''
	input.focus()
	 
    li.appendChild(botao())
}







