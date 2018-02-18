var words = ["javascript","hangman", "monkey","amazing","pancake",'pennsylvania',"philadelphia","neighborhood"]

var randomnumber = Math.floor(Math.random()*words.length);
var ranWord = words[randomnumber].split('');
console.log(ranWord)
var s;
var count = 6;
var answerArray = [];

function startUp() {
    for (var i = 0; i < ranWord.length; i++) {
        answerArray[i] = "_"; 

    }
    return console.log(answerArray);
}
console.log(startUp());
console.log(ranWord);

// var remainingLetters = word.length;

    s = answerArray.join(" ");
    document.getElementById("answer").innerHTML = s;


    document.onkeypress = function() {
        var letter = event.key;
    
        for (var i = 0; i < ranWord.length; i++) {
            if (ranWord[i] === letter) {
                answerArray[i] = letter;
            }

        }

        if (!answerArray.includes("_")) {
            document.getElementById("counter").innerHTML = 'You Win';
        } else {
            if (ranWord.includes(letter) === false) {

                if (count > 1) {
                    count--;
                    document.getElementById("counter").innerHTML = "Guesses " + count;
                }
    
                else  {
                    document.getElementById("counter").innerHTML = `<p class='red'>GAME OVER</p>`;
                }
            }
        }
        
        document.getElementById("answer").innerHTML = answerArray.join(" ");
        
    }

