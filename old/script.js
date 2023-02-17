let cat = document.querySelector('img');
document.addEventListener('mousedown', (event) => {
    event.preventDefault();

    if(event.buttons === 1){
        //esquerdo
        cat.setAttribute('src', 'img/02.png');
        let som = document.querySelector('#esquerdo');
        som.currentTime = 0;
        som.play();
    }

    if(event.buttons === 2){
        //direito
        cat.setAttribute('src', 'img/03.png');
        let som = document.querySelector('#direito');
        som.currentTime = 0;
        som.play();
    }
});


document.addEventListener('mouseup', (event) =>{
    cat.setAttribute('src', 'img/01.png');
})