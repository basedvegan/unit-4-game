$( document ).ready(function() {

    var Randall = Math.floor(Math.random() *101+19)
    $("#value").text(Randall);
console.log(Randall);
    //define all variables

    var crystal1 = Math.floor(Math.random() * 11 + 1)
    var crystal2 = Math.floor(Math.random() * 11 + 1)
    var crystal3 = Math.floor(Math.random() * 11 + 1)
    var crystal4 = Math.floor(Math.random() * 11 + 1)

    var win = 0;
    var loss = 0;
    var totalScore = 0;

    //link text to html

    $("#wins").text(win);
    $("#losses").text(loss);
    $("#score").text(totalScore);

    //function for wins

    function scorePoint() {
        win++;
        alert("ヽ(⌐■_■)ノ♪♬ score!");
        $("#wins").text(win);
        reset();
    }

    //function for losses

    function lost() {
        loss++;
        alert("✧*。ヾ(｡>﹏<｡)ﾉﾞ✧*。loser!");
        $("#losses").text(loss);
        reset();
    }

    //function for reset

    function reset() {
        crystal1 = Math.floor(Math.random() * 11 + 1);
        crystal2 = Math.floor(Math.random() * 11 + 1);
        crystal3 = Math.floor(Math.random() * 11 + 1);
        crystal4 = Math.floor(Math.random() * 11 + 1);
        totalScore = 0;
        $("#score").text(totalScore);
        Randall = Math.floor(Math.random() * 101 + 19);
        $("#value").text(Randall);

    }

    //function for random number for gems x4

    $("#crystal1").on("click", function() {
        totalScore = totalScore + crystal1;
        $("#score").text(totalScore);

        if (totalScore === Randall) {
            scorePoint();
        }

        else if (totalScore > Randall) {
            lost();
        }
    } )

    $("#crystal2").on("click", function() {
        totalScore = totalScore + crystal2;
        $("#score").text(totalScore);

        if (totalScore === Randall) {
            scorePoint();
        }

        else if (totalScore > Randall) {
            lost();
        }
    } )

    $("#crystal3").on("click", function() {
        totalScore = totalScore + crystal3;
        $("#score").text(totalScore);

        if (totalScore === Randall) {
            scorePoint();
        }

        else if (totalScore > Randall) {
            lost();
        }
    } )

    $("#crystal4").on("click", function() {
        totalScore = totalScore + crystal4;
        $("#score").text(totalScore);

        if (totalScore === Randall) {
            scorePoint();
        }

        else if (totalScore > Randall) {
            lost();
        }
   })
});