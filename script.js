const inputOne = document.getElementById('inputOne');
const inputTwo = document.getElementById('inputTwo');
const addButton = document.getElementById('addButton');
const results = document.getElementById('results');



addButton.addEventListener('click', () =>{
    console.log('Click');
    const inputOneValue = parseInt(inputOne.value);
    const inputTwoValue = parseInt(inputTwo.value);
    if(validation(inputOneValue, inputTwoValue)){
        results.innerHTML = inputOneValue + inputTwoValue; 
    }else{
        alert("Input tidak sesuai format!");
    }
});


function validation (inputOne, inputTwo){
    if((inputOne == false) || (inputTwo == false) || (isNaN(inputOne)) || (isNaN(inputTwo))){
        return false;
    }
    return true;
}