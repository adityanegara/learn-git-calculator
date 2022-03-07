const inputOne = document.getElementById('inputOne');
const inputTwo = document.getElementById('inputTwo');
const addButton = document.getElementById('addButton');
const results = document.getElementById('results');



addButton.addEventListener('click', () =>{
    console.log('Click');
    const inputOneValue = parseInt(inputOne.value);
    const inputTwoValue = parseInt(inputTwo.value);
    results.innerHTML = inputOneValue + inputTwoValue; 
});

