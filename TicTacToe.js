var Player = "X";
var wX=0;
var wY=0;
function fillButton(lID) {

    if (document.getElementById(lID).innerHTML.trim() != "") {
        return;
    }
    if (Player == "X") {
        document.getElementById(lID).innerHTML = "X";
		wX=wX | ( 2 ** ( lID - 1 ) );
		console.log( wX );
		console.log( wX.toString(2) );
		console.log( 2 ** ( lID - 1 ) );
        Player = "O";
		if((wX & 7) ==7) {alert ("X WON");location.reload()};
		if((wX & 56) ==56) {alert ("X WON");location.reload()};
		if((wX & 448) ==448) {alert ("X WON");location.reload()};
		if((wX & 73) ==73) {alert ("X WON");location.reload()};
		if((wX & 146) ==146) {alert ("X WON");location.reload()};
		if((wX & 292) ==292) {alert ("X WON");location.reload()};
		if((wX & 273) ==273) {alert ("X WON");location.reload()};
		if((wX & 84) ==84) {alert ("X WON");location.reload()};
		
		
    } else {
        document.getElementById(lID).innerHTML = "O";
        Player = "X"; 
		wY=wY | ( 2 ** ( lID - 1 ) );
		console.log( wY );
		console.log( wY.toString(2) );
		console.log( 2 ** ( lID - 1 ) );
		if((wY & 7) ==7) {alert ("Y WON");location.reload()};
		if((wY & 56) ==56) {alert ("Y WON");location.reload()};
		if((wY & 448) ==448) {alert ("Y WON");location.reload()};
		if((wY & 73) ==73) {alert ("Y WON");location.reload()};
		if((wY & 146) ==146) {alert ("Y WON");location.reload()};
		if((wY & 292) ==292) {alert ("Y WON");location.reload()};
		if((wY & 273) ==273) {alert ("Y WON");location.reload()};
		if((wY & 84) ==84) {alert ("Y WON");location.reload()};
    } 
}
