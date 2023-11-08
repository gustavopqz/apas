async function mudarCor(){
    const arrayCores = ['red', 'blue', 'yellow', 'green', 'purple']
    const titulo = document.getElementById('titulo');

    let contador = 0;
    setInterval(()=> {
        if(contador == 0){
            titulo.classList.add(arrayCores[contador]);
            contador++;
        } else if(contador <5){
            titulo.classList.remove(arrayCores[contador]);
            titulo.classList.add(arrayCores[contador + 1]);
            contador++;
        } else{
            titulo.classList.remove(arrayCores[contador]);
            contador = 0;
            titulo.classList.add(arrayCores[contador]);
            contador++;
        }
    },1500)
}

const historia = document.querySelector('#historia .dizeres')

historia.addEventListener('mouseenter', ()=>{
    document.getElementById('historia_logo').classList.add('bounce')
    setTimeout(()=>{
        document.getElementById('historia_logo').classList.remove('bounce')
    },4000)
})
