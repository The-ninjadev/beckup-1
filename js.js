let points = document.querySelectorAll('.postion-slides div'); // 
let quant = document.querySelectorAll('.image');// 
let atual = null;//
let imagemAtual = document.getElementById('atual'); // 
let roll = true;// P

document.getElementById('0').classList.add('active-img');

/*
//fazendo a mesma coisa utilizando o for

for(let i = 0; i < points.length; i++) {             
    points[i].addEventListener('click', ()=> {
        atual = points[i].id
        roll = false;                       
        slide() 
        console.log(points[i])
    })
    
}
*/ 




points.forEach((item, index) => {
    item.addEventListener('click', ()=> {
        atual = item.id; //A variavel atual vai receber o item do array com o seu id.
        roll = false;

        points[0].classList.remove("active-img");
        points[1].classList.remove("active-img");
        points[2].classList.remove("active-img");
        points[3].classList.remove("active-img");

        points[index].classList.add("active-img");

        
        slide()
        console.log(item.id)
    })
     

})



function slide() {   
    if(atual >= quant.length) {
        atual = 0
       
    } else if(atual < 0 ) {
        atual = quant.length -1;
    }

 

    document.querySelector('.active-img').classList.remove('active-img');
    imagemAtual.style.marginLeft = -900 * atual +'px';//A variavel atual que ja tem o item com o id vai ser multiplicada;
    document.getElementById(atual).classList.add('active-img');
}


setInterval(()=>{
    if(roll){
      atual++
      slide()
    }else{
      roll = true;
    }
},4000);



