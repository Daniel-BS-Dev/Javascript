function carregar(){
    var msg = document.getElementById('msg');
    var picture = document.getElementById('picture');
    var data = new Date();
    var hour = data.getHours();
    msg.innerHTML = `Agora são ${hour} horas.`;

    if(hour >= 0 && hour <  12 ){
        picture.src = 'image/morning.jpg';
        msg.style.color = 'darkred';
        document.body.style.background = '#e2cd9f';
    }
    else if(hour >= 12 && hour < 18){
        picture.src = 'image/aftermoon.jpg';
        document.body.style.background = '#b98464';
    }
    else{
        picture.src = 'image/night.jpg';
        msg.style.color = 'darkgreen'
        document.body.style.background = '#515154';
    }
}