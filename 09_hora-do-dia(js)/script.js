function carregar(){
	//div#msg
	var msg = window.document.getElementById('msg')
	//img#imagem
	var img = window.document.getElementById('imagem')
	
	var data = new Date()
	var hora = data.getHours()
	msg.innerHTML = `Agora são ${hora} horas.`

	if(hora >= 0 && hora < 12){
		//BOM DIA!
		img.src = 'imagens/image-manha.png'
		document.body.style.background = '#e2cd9f'
	}else if(hora >= 12 && hora <= 18){
		//BOA TARDE!
		img.src = 'imagens/image-tarde.png'
		document.body.style.background = '#b9846f'
	}else{//if(hora >= 18 && hora < 0)
		//BOA NOITE!
		img.src = 'imagens/image-noite.png'
		document.body.style.background = '#515154'
	}
}