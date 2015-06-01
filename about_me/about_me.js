	function toggleButton() 
	{
		var bubs = document.getElementsByName("bubblepic");
		if (document.getElementById('theButton').innerHTML == "Let's take a spin!") {
			for (var i = bubs.length - 1; i >= 0; i--)	{
		  		bubs[i].className = "photobubble";
		  		document.getElementById('theButton').innerHTML = "Stop this crazy spinning!!!";
			}
		}
		else {
			for (var i = bubs.length - 1; i >= 0; i--)	{
			  bubs[i].className = "nobubble";
			  document.getElementById('theButton').innerHTML = "Let's take a spin!";
			}
		}

	}