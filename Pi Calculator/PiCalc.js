i = 0;
var r = 500;
var inCirclePoints = 0;
var pi;
var res = setInterval(calculate, 1);

function calculate()
{
	for(n = 0; n < 10; n++)
	{
		i++;
		var randX = Math.random() * r;
		var randY = Math.random() * r;
	
		if(Math.abs(randX) < 380 || Math.abs(randY) < 380)
		{
			var dist = (randX * randX) + (randY * randY);
			if(Math.sqrt(dist) < 500)
			{
				inCirclePoints++;
			}
		}
	}



	var ratio = inCirclePoints / i;
	pi = ratio * 4;
	document.getElementById("pi").innerHTML = "Pi = 4 * " + inCirclePoints + " / " + i + "<br/><br/>" + "Pi is approximately: " + pi;
}