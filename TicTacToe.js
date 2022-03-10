var Player = "X";

function fillButton(lID) {

    if (document.getElementById(lID).innerHTML.trim() != "") {
        return;
    }
    if (Player == "X") {
        document.getElementById(lID).innerHTML = "X";
        Player = "O";
    } else {
        document.getElementById(lID).innerHTML = "O";
        Player = "X";
    }
}