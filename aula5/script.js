function verificar(){
    var data = new Date();
    var year = data.getFullYear();
    var textYear = document.getElementById('textYear');
    var res = document.querySelector('div#res');

    if(textYear.value <= 0 || textYear.value > year){
        alert('[ERRO] VERificar os dados e tentar novamente')
    }
    else{
        var sex = document.getElementsByName('rad');
        var idade = year - Number(textYear.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')
        img.width='250'
        img.style.borderRadius='50%'
        img.height= '200'
        if(sex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'image/babyMan.jpg')
            }
            else if(idade < 21){
                img.setAttribute('src', 'image/teenMan.jpg')
            }
            else if(idade < 50){
                img.setAttribute('src', 'image/adultMan.jpg')
            }
            else{
                img.setAttribute('src', 'image/oldMan.jpg')
            }
        }
        else if(sex[1].checked){
            genero = 'Mulher'
            if(idade => 0 && idade < 10){
                img.setAttribute('src', 'image/babyWoman.jpg')
            }
            else if(idade < 21){
                img.setAttribute('src', 'image/teenWoman.jpg')
            }
            else if(idade < 50){
                img.setAttribute('src', 'image/adultWoman.jpg')
            }
            else{
                img.setAttribute('src', 'image/oldWoman.jpg')
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Sua idade é ${idade}`;
        res.appendChild(img)
    }
}