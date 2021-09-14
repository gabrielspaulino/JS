function carregar() 
{
    var horario = document.querySelector('#horario')
    var imagem = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    horario.innerHTML = 'Agora são ' + hora + ' horas'
    if(hora >= 0 && hora < 12)
    {
        imagem.innerHTML = '<img src="manha.jpg"></img>'
        document.body.style.background = '#e2cd9f'
    }
        else if(hora >= 12 && hora < 18)
        {
            imagem.innerHTML = '<img src="tarde.jpg"></img>'
            document.body.style.background = 'lightblue'
        }
            else
            {
                imagem.innerHTML = '<img src="noite.jpg"></img>'
                document.body.style.background = 'rgb(43, 43, 43)'
            }
}