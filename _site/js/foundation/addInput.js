var counter = 1;
var limit = 30;
function addInput(what) {
	if (counter == limit)  {
		alert("You have reached the limit of adding " + counter + " inputs");
	}
	else {
	var container = document.getElementById(what);
	var clone = container.cloneNode(true);
	clone.setAttribute('id','div_'+document.getElementById(what).getElementsByTagName('div').length);
	container.appendChild (clone);
	counter++;
	}
}
