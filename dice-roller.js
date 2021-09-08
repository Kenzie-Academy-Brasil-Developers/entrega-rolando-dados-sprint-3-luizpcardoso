const div02 = document.getElementById("lance02");
const div03 = document.getElementById("lance03");
const div04 = document.getElementById("lance04");
const div05 = document.getElementById("lance05");
const div06 = document.getElementById("lance06");
const div07 = document.getElementById("lance07");
const div08 = document.getElementById("lance08");
const div09 = document.getElementById("lance09");
const div10 = document.getElementById("lance10");
const div11 = document.getElementById("lance11");
const div12 = document.getElementById("lance12");


const body = document.getElementsByTagName("body")[0]

const rollOfDice = [0,0,0,0,0,0,0,0,0,0,0,0,0]

dice();

inFrequence(div02, 2);
inFrequence(div03, 3);
inFrequence(div04, 4);
inFrequence(div05, 5);
inFrequence(div06, 6);
inFrequence(div07, 7);
inFrequence(div08, 8);
inFrequence(div09, 9);
inFrequence(div10, 10);
inFrequence(div11, 11);
inFrequence(div12, 12);




function inFrequence(div, dicePosition) {

    const paragraph = document.createElement("p")

    paragraph.innerText = rollOfDice[dicePosition];

    div.appendChild(paragraph);

    div.style.width = `${rollOfDice[dicePosition]*3}px`

}






function dice() {
    
    for (i = 0 ; i<1000; i++) {

        let num1 = getRandomNumber();

        let num2 = getRandomNumber();

        let sum = num1 + num2;

        rollOfDice[sum] = rollOfDice[sum] +1;

    }

}



function getRandomNumber() {

    let number = 0

    while (number<1 || number>6){

    number = Math.floor( Math.random() * 10);

    }

    return number;   

}
