let button100 = document.querySelectorAll('.button100');
let button200 = document.querySelectorAll('.button200');
let button400 = document.querySelectorAll('.button400');
let button600 = document.querySelectorAll('.button600');
let button800 = document.querySelectorAll('.button800');
let display = document.querySelector('#displayQuestion');
let userInput = document.querySelector('#userInput')
let form = document.querySelector('form');
let score = document.querySelector('#displayScore');

let readJeopardyData = async () => {
    let rawData = await fetch('jeopardy.json');
    let data = await rawData.json(); // still need to parse even those file is json
    //////////GROUP DATA BY VALUE////////
    //console.log(groupData)
    let groupData = _.groupBy(data,'value')
    console.log(groupData)
    let quest100 = groupData.$100;
    let quest200 = groupData.$200;
    let quest400 = groupData.$400;
    let quest600 = groupData.$600;
    let quest800 = groupData.$800;
    
    let currentAnswer = '';
    let currentValue = '';
    /////////MATH FOR ITERATION//////////
 function random(){
    let random1 = Math.floor(Math.random() * quest100.length);
    display.innerText = `FOR $100: ${quest100[random1].question}`;
    currentValue = quest100[random1].value
    console.log(currentValue)
    currentAnswer = quest100[random1].answer
    console.log(currentAnswer)
        return display.innerText
};
    function random2(){
      let random2 = Math.floor(Math.random() * quest200.length);
      display.innerText = `FOR $200: ${quest200[random2].question}`;
      currentValue = quest200[random2].value;
      console.log(currentValue);
      currentAnswer = quest200[random2].answer;
      console.log(currentAnswer)
        return display.innerText;
    }
    function random4(){
        let random4 = Math.floor(Math.random() * quest400.length);
        display.innerText = `FOR $400: ${quest400[random4].question}`;
        currentValue = quest400[random4].value;
        console.log(currentValue);
        currentAnswer = quest400[random4].answer;
        console.log(currentAnswer)
          return display.innerText;
      }
      function random6(){
        let random6 = Math.floor(Math.random() * quest600.length);
        display.innerText = `FOR $600: ${quest600[random6].question}`;
        currentValue = quest600[random6].value;
        console.log(currentValue);
        currentAnswer = quest600[random6].answer;
        console.log(currentAnswer)
          return display.innerText;
      }
      function random8(){
        let random8 = Math.floor(Math.random() * quest800.length);
        display.innerText = `FOR $800: ${quest800[random8].question}`;
        currentValue = quest800[random8].value;
        console.log(currentValue);
        currentAnswer = quest800[random8].answer;
        console.log(currentAnswer)
          return display.innerText;
      }
    let count = 0
    display.innerText = 'Please select an amount'
    score.innerText = '$0'
    ///////// BUTTON EVENT LISTENERS ///////////
    button100.forEach((event) => {
        event.addEventListener('click', () => {
            random();})
        })
     button200.forEach((event) => {
         event.addEventListener('click', () => {
            random2();
         })
        })
    button400.forEach((event) => {
        event.addEventListener('click', () => {
               random4();
            })
           })
    button600.forEach((event) => {
            event.addEventListener('click', () => {
               random6();
            })
           })
    button800.forEach((event) => {
            event.addEventListener('click', () => {
               random8();
            })
           })
     //////////////////INPUT SECTION////////////////////////////       
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                if (userInput.value === ''){
                    alert('Please enter an answer.')
                } if (userInput.value === currentAnswer && currentValue === '$100'){
                    count += 100
                    console.log(count)
                    display.innerText = "CORRECT! - Select next dollar amount"
                    score.innerText = `$${count}`
                } if (userInput.value === currentAnswer && currentValue === '$200'){
                    count += 200
                    console.log(count)
                    display.innerText = "CORRECT! - Select next dollar amount"
                    score.innerText = `$${count}`
                } if (userInput.value === currentAnswer && currentValue === '$400'){
                    count += 400
                    console.log(count)
                    display.innerText = "CORRECT! - Select next dollar amount"
                    score.innerText = `$${count}`
                } if (userInput.value === currentAnswer && currentValue === '$600'){
                    count += 600
                    console.log(count)
                    display.innerText = "CORRECT! - Select next dollar amount"
                    score.innerText = `$${count}`
                } if (userInput.value === currentAnswer && currentValue === '$800'){
                    count += 800
                    console.log(count)
                    display.innerText = `${currentAnswer} is CORRECT! \nSelect next dollar amount`
                    score.innerText = `$${count}`
                } else if(userInput.value !== currentAnswer){
                    display.innerText = `INCORRECT! 
                    Your Answer: ${userInput.value}
                    Correct Answer: ${currentAnswer}
                    Select a new amount`
                } userInput.value =  '' 
            })
};

readJeopardyData();

