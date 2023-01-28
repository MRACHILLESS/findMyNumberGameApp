
let randomNumber = Math.trunc(Math.random() * 20) + 1;

let count=20;
let highestScore =0;


let btnCheck= document.querySelector('#check');
btnCheck.addEventListener('click', function (){
    let guess = parseInt(document.querySelector('#guess').value);
    if(count>1){
        if(guess === randomNumber){
            document.querySelector('body').style.backgroundColor = 'green';
            correctNumber.innerHTML="the number is correct";   
            document.querySelector('.number').innerHTML = randomNumber;
            highestScore=count;
            document.querySelector('#highestScore').innerHTML = `<h4>Highest score ${count}`;
            
        }
        else if(guess>randomNumber){
            correctNumber.innerHTML="The number is bigger"
            count--;
            document.querySelector('#score').innerHTML = count;
        }
        else {
            correctNumber.innerHTML="The number is smaller"
            count--;
            document.querySelector('#score').innerHTML = count;
        }
    }
    else {
        //if tries finished
        count--;
        document.querySelector('#score').innerHTML = count;
        document.querySelector('#check').setAttribute("disabled");
        document.querySelector('.check').style.cursor = 'not-allowed';
        document.querySelector('#correctNumber').innerHTML =
        'You dont have any attempts left'
        document.querySelector
        
    }

});

//new game
let restart =document.querySelector('#restart');
restart.addEventListener('click', restartFunction)
 function restartFunction(){
    let randomNumber = Math.trunc(Math.random() * 20) + 1;    
    count=20;
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('#score').innerHTML = count;
    document.querySelector('#correctNumber').innerHTML = 'guess...';    
    document.querySelector('.number').innerHTML = '?';
    document.querySelector('#guess').value = '';   
    document.querySelector('#highestScore').innerHTML= `<h4>Ball: 0</h4>`
    
}
restartFunction()