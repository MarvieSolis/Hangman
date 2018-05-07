

  // initialize variables
    var wins = 0;
    var guessesleft = 0;
    var yourguesses = [];
    var words = ["chrisbrown", "cardib", "lilyachty", "migos", "drake", "kanyewest", "kendricklamar", "postmalone", "snoopdogg", "chance"];
    var wordString = "";
    var wordString2 = "";
    var unknown = "";
    var blanks = [];
    var letterGuess = "";
    var correctletters = [];





// game functions

    function gameStart() {
      yourguesses = [];
      guessesleft = 3 + words.length;
      blanks = [];
      correctletters = [];
      unknown = words [Math.floor ((Math.random()*words.length))];

        for (var i=0; i < unknown.length; i++){
          blanks.push("_");
        }

      document.querySelector(".blankword").innerHTML = blanks.join(' ');
    }


    function changeImage() {
        if (unknown === "chrisbrown") {
            document.getElementById("imageid").src="./assets/images/cb.jpg";
            document.getElementById("song").src="./assets/audio/chrisbrown.mp3";
        }

        if (unknown === "cardib") {
            document.getElementById("imageid").src="./assets/images/c.jpg";
            document.getElementById("song").src="./assets/audio/cardib.mp3";

        }

        if (unknown === "lilyachty") {
            document.getElementById("imageid").src="./assets/images/ly.jpg";
            document.getElementById("song").src="./assets/audio/lilyatchy.mp3";

        }

        if (unknown === "migos") {
            document.getElementById("imageid").src="./assets/images/m.jpg";
            document.getElementById("song").src="./assets/audio/migos.mp3";

        }

        if (unknown === "drake") {
            document.getElementById("imageid").src="./assets/images/d.jpg";
            document.getElementById("song").src="./assets/audio/drake.mp3";

        }

        if (unknown === "kanyewest") {
            document.getElementById("imageid").src="./assets/images/kw.jpg";
            document.getElementById("song").src="./assets/audio/kanyewest.mp3";

        }

        if (unknown === "kendricklamar") {
            document.getElementById("imageid").src="./assets/images/kl.jpg";
            document.getElementById("song").src="./assets/audio/kendricklamar.mp3";

        }

        if (unknown === "snoopdogg") {
            document.getElementById("imageid").src="./assets/images/sd.jpg";
            document.getElementById("song").src="./assets/audio/snoopdogg.mp3";

        }

        if (unknown === "postmalone") {
            document.getElementById("imageid").src="./assets/images/pm.jpg";
            document.getElementById("song").src="./assets/audio/postmalone.mp3";

        }

        if (unknown === "chance") {
            document.getElementById("imageid").src="./assets/images/ctr.jpg";
            document.getElementById("song").src="./assets/audio/chance.mp3";

        }
    }







// ONKEY START UP

    gameStart();
    
    document.onkeyup = function(event) {
      var userGuess = event.key;
      letterGuess = userGuess;
      wordString = blanks.join('');
      wordString2 = blanks.join(' ')
      

      // Reset
      if (event.keyCode === 13) {
          gameStart();
      }
      
      // INCORRECT LETTER GUESS
      if (unknown.indexOf(userGuess) === -1){
        if (yourguesses.indexOf(userGuess) === -1) {
          guessesleft--;
          yourguesses.push(userGuess);
        }
      }


      // CORRECT LETTER GUESS
      if (unknown.indexOf(userGuess) > -1){
        for (var i = 0; i < unknown.length; i++) {
          if (letterGuess === unknown.charAt(i)) {
            blanks[i] = letterGuess;
            wordString = blanks.join('');
            wordString2 = blanks.join(' ');
          }
        }
      }


      // WORD COMPLETE
      if (unknown === wordString) {
        wins++;
        document.querySelector(".message").innerHTML = "GOOD JOB!";
        document.querySelector(".artist").innerHTML = wordString2;
        changeImage();
        gameStart();
      }

      // OUT OF GUESSES
      if (guessesleft === 0) {
        document.querySelector(".message").innerHTML = "Try again ):";
        gameStart();
      }



        // DOCUMENT OVERWRITES
        document.querySelector(".wins").innerHTML = "Wins: " + wins;
        document.querySelector(".blankword").innerHTML = wordString2;
        document.querySelector(".gleft").innerHTML = "Guesses Left: " + guessesleft;
        document.querySelector(".yguess").innerHTML = "Your guesses so far: " + yourguesses + " ";
        





      
    
    }
