// <!-- The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 
// Here's how the app works:

// There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.
// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.
// The game restarts whenever the player wins or loses.
// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.


// Option 1 Game design notes


// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12. -->

// // classes in html to load randomNumber, totalScore, wins, losses, crystalImg & id crystalOne, crystalTwo, crystalThree, crystalFour

$(document).ready(function () {

    // create variable for the randomNumber to be selected. This should be a random number b/t 19-120. math random will need to be used to generate this variable and load it to the randomNumber class in html

    var randomNumber = Math.floor(Math.random() * 102) + 19;
    $(".randomNumber").html(randomNumber);

    // create variables for totalScore, wins, losses starting at 0. Use jQuery to write to html

    var totalScore = 0;
    $(".totalScore").html(totalScore);
    var wins = 0;
    $(".wins").html("Wins: " + wins);
    var losses = 0;
    $(".losses").html("Losses: " + losses);

    // in the example in class we created a for loop that would create a crystal image for each number loaded to the array.  In this game there are 4 different crystal images that need a random number generated between 1 and 12. I will need to use math random to determine the value for each crystal.

    // var numberOptionsArray = [];
    // 	for (i = 0 ; i < numberOptionsArray.length ; i++) {
    //     }

    var crystalOne = Math.floor(Math.random() * 12) + 1;
    $("#crystalOne").attr("data-crystalvalue", crystalOne);
    var crystalTwo = Math.floor(Math.random() * 12) + 1;
    $("#crystalTwo").attr("data-crystalvalue", crystalTwo);
    var crystalThree = Math.floor(Math.random() * 12) + 1;
    $("#crystalThree").attr("data-crystalvalue", crystalThree);
    var crystalFour = Math.floor(Math.random() * 12) + 1;
    $("#crystalFour").attr("data-crystalvalue", crystalFour);

    //I already added the images and applied the class name crystalImg and ids for each crystal in html but I will still need to add the data attribute. Added to the mathfloor var above.


    function reset() {
        randomNumber = Math.floor(Math.random() * 102) + 19;
        $(".randomNumber").html(randomNumber);
        totalScore = 0;
        $(".totalScore").html(totalScore);
        crystalOne = Math.floor(Math.random() * 12) + 1;
        $("#crystalOne").attr("data-crystalvalue", crystalOne);
        crytsalTwo = Math.floor(Math.random() * 12) + 1;
        $("#crystalTwo").attr("data-crystalvalue", crystalTwo);
        crystalThree = Math.floor(Math.random() * 12) + 1;
        $("#crystalThree").attr("data-crystalvalue", crystalThree);
        crystalFour = Math.floor(Math.random() * 12) + 1;
        $("#crystalFour").attr("data-crystalvalue", crystalFour);
    }
    // apply the click event to the crystalImg class to apply to all crystals

    $(".crystalImg").on("click", function () {

        // extract the value from the data attribute using the $(this) keyword which specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // parseInt converts it to an integer before adding to the totalScore

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        // We then add the crystalValue to the user's "totalScore" which is a global variable.
        // Every click, from every crystal adds to the global totalScore.
        totalScore += crystalValue;

        // load total score to html with score conditions to signify win/loss.   Went back up before click event to define reset function since it should be executed once a win or a loss is indicated
        $(".totalScore").html(totalScore);

        if (totalScore === randomNumber) {
            wins++;
            $(".wins").html("Wins: " + wins);
            reset();
        }
        else if (totalScore > randomNumber) {
            losses++;
            $(".losses").html("Losses: " + losses);
            reset();
        }

    });
});
