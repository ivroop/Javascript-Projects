const button = document.querySelectorAll('.button');
const container = document.querySelector('.container');
const text = document.querySelector('.box1');

//[b1, b2, b3, b4, b5]
button.forEach(function(button){
    button.addEventListener('click', function(e){
        if(e.target.id==='chocolate'){
            container.style.backgroundColor=e.target.id;
            text.innerHTML= `You chose ${e.target.id}`; 
        }
        else if(e.target.id==='lavender'){
            container.style.backgroundColor=e.target.id;
            text.innerHTML= `You chose ${e.target.id}`; 
        }else if(e.target.id==='grey'){
            container.style.backgroundColor=e.target.id;
            text.innerHTML= `You chose ${e.target.id}`; 
        }else if(e.target.id==='plum'){
            container.style.backgroundColor=e.target.id;
            text.innerHTML= `You chose ${e.target.id}`; 
        }else if(e.target.id==='olive'){
            container.style.backgroundColor=e.target.id;
            text.innerHTML= `You chose ${e.target.id}`; 
        }
    })
})