var scores=[0,0];
var roundscore=0;
var activePlayer=0 ;
var gamePlaying= true;


document.querySelector('.dice').style.display='none';

document.querySelector(".btn--roll").addEventListener('click',function(event) {
    if(gamePlaying){
    var dice=Math.floor(Math.random()*6)+1;
    document.querySelector('.dice').style.display='block';
    document.querySelector(".dice").setAttribute('src','dice-'+dice+'.png');
   
    if(dice>1)
    {// add score 
        roundscore+= dice;
        document.querySelector("#current--"+activePlayer).textContent= roundscore;

    }else{
        //change player using terenary operator
        nextPlayer();
    }
    }
});


document.querySelector('.btn--hold').addEventListener('click',function(event){
    if(gamePlaying)
    {
          // add current score to global score
    scores[activePlayer]+= roundscore;

    // update ui

    document.querySelector("#score--"+activePlayer).textContent=scores[activePlayer];

    if(scores[activePlayer]>=100){
        document.querySelector('#name--'+activePlayer).textContent= 'Winner!!';

        document.querySelector('.player--'+activePlayer).classList.add('player--winner'); 
        document.querySelector('.dice').style.display="none";
        document.querySelector('.player--'+activePlayer).classList.remove('player--active'); 
        gamePlaying=false;
    }
    else{
    nextPlayer();
    }

    }

});

function nextPlayer(){
     //change player using terenary operator
     activePlayer=== 0 ? activePlayer = 1 : activePlayer = 0;

     //round score to 0

     roundscore=0;

     document.getElementById('current--0').textContent='0';
     document.getElementById('current--1').textContent='0';
     document.querySelector('.player--0').classList.toggle('player--active');
     document.querySelector('.player--1').classList.toggle('player--active');
    // document.querySelector('.player--0').classList.remove('player--active');
    // document.querySelector('.player--1').classList.add('player--active');
     document.querySelector('.dice').style.display='none';
    
};

document.querySelector('.btn--new').addEventListener('click',init);

function init(){
    scores[0,0]=0;
    activePlayer=0;
    roundscore=0;

    document.querySelector('#name--0').textContent= 'Player 1';
    document.querySelector('#name--1').textContent= 'Player 2';
    document.getElementById('current--0').textContent='0';
    document.getElementById('current--1').textContent='0';
    document.getElementById('score--0').textContent='0';
    document.getElementById('score--1').textContent='0';
    
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.remove('player--winner'); 
    document.querySelector('.player--1').classList.remove('player--winner'); 

    document.querySelector('.player--0').classList.add('player--active');
    gamePlaying=true; 
};