/* function play(){
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    const playGroundSection = document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden')
} */
function handleKeyboardKeyUpEvent(event){
  const playerpressed =   event.key;
  console.log('player pressed', playerpressed);

//   get the excepted to press
const currentAlphabetElement = document.getElementById('current-alphabet');
const currentAlphabet = currentAlphabetElement.innerText;
const expectedAlphabet = currentAlphabet.toLowerCase();
console.log(playerpressed , expectedAlphabet);

if(playerpressed === expectedAlphabet){
    const currentScore = getTextElementById('current-score');
    const updateScore = currentScore + 1;
    setTextElementById('current-score',updateScore);


    // ---------------------------------------
    // console.log('you get a point');
    // // current socre updated
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);

    // currentScoreElement.innerText = currentScore + 1;



    removeBackgroundColor(expectedAlphabet);
    continueGame();
}
else{

    const currentLife = getTextElementById('current-life');
    const updateLife = currentLife - 1;
    setTextElementById('current-life',updateLife);

    if(updateLife === 0){
        gameOver();
    }

    // --------------------------------------------------
    // console.log('your missed you lost life');
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);

    // currentLifeElement.innerText = currentLife - 1;
}

}
document.addEventListener('keyup',handleKeyboardKeyUpEvent);


    function continueGame(){
        const alphabet = getARandomAlphabet();
        // console.log('your random alphabet :', alphabet)

        const currentAlphabetString = document.getElementById('current-alphabet');
        currentAlphabetString.innerText = alphabet;

        setBackgrounColor(alphabet);



    }




    function play(){
        // hide everything show only the playground
        hideElementById('home-screen');
        hideElementById('final-score');
        showElementById('play-ground');

        // reset score and life
        setTextElementById('current-life',5);
        setTextElementById('current-score',0);

        continueGame();

    }
    

    function gameOver(){
        hideElementById('play-ground');
        showElementById('final-score');

        // update final score
        const lastScore = getTextElementById('current-score');
        // console.log(lastScore);
        setTextElementById('last-score',lastScore);

        const currentAlphabet = getElementTextById('current-alphabet');
        removeBackgroundColor(currentAlphabet);
    }

    