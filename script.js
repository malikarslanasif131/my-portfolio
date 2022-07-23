document.getElementById('stop').disabled = true;
document.getElementById('reverse').disabled = true;
document.getElementById('speed').disabled = true;
document.getElementById('speedx2').disabled = true;
m=0;
var y;
var t=20;

function start()
{
	
 	y=setInterval(run,t);
 	document.getElementById('start').disabled = true;
	document.getElementById('stop').disabled = false;
 	document.getElementById('reverse').disabled = true;
 	document.getElementById('speed').disabled = false;
 	document.getElementById('speedx2').disabled = false;

	function run() 
	{
		if (m>=1200) {
			clearInterval(y);
			t=20;
			document.getElementById('start').disabled = true;
			document.getElementById('stop').disabled = true;
			document.getElementById('reverse').disabled = false;
			document.getElementById('speed').disabled = true;
			document.getElementById('speedx2').disabled = true;

		}else{
		m+=3;
		var x=document.getElementById('img');
		x.style.marginLeft=m+'px';
		}
	}

}

function stop()
{
	clearInterval(y);
	document.getElementById('start').disabled = false;
	document.getElementById('stop').disabled = true;
	document.getElementById('reverse').disabled = false;
	document.getElementById('speed').disabled = true;
	document.getElementById('speedx2').disabled = true;

}
function reverse()
{
	t=20;
 	y=setInterval(back,t);
 	document.getElementById('start').disabled = true;
	document.getElementById('stop').disabled = false;
 	document.getElementById('reverse').disabled = true;
 	document.getElementById('speed').disabled = true;
 	document.getElementById('speedx2').disabled = true;

	function back() 
	{
		if (m>=0) {

			t=20;
			
		m-=3;
		var x=document.getElementById('img');
		x.style.marginLeft=m+'px';	
			document.getElementById('start').disabled = true;
			document.getElementById('stop').disabled = false;
			document.getElementById('reverse').disabled = true;
			document.getElementById('speed').disabled = true;
			document.getElementById('speedx2').disabled = true;

		}else{
			clearInterval(y);
		document.getElementById('start').disabled = false;
			document.getElementById('stop').disabled = true;
			document.getElementById('reverse').disabled = true;
			document.getElementById('speed').disabled = true;
			document.getElementById('speedx2').disabled = true;

		}
	}

}

function speed()
{ 	
	clearInterval(y);
	t=13;
	y=setInterval(run,t)
 	document.getElementById('start').disabled = true;
	document.getElementById('stop').disabled = false;
 	document.getElementById('reverse').disabled = true;
 	document.getElementById('speed').disabled = true;
 	document.getElementById('speedx2').disabled = false;

	function run() 
	{
		if (m>=1200) {
			clearInterval(y);
			t=20;
			document.getElementById('start').disabled = true;
			document.getElementById('stop').disabled = true;
			document.getElementById('reverse').disabled = false;
			document.getElementById('speed').disabled = true;
			document.getElementById('speedx2').disabled = true;

		}else{
		m+=3;
		var x=document.getElementById('img');
		x.style.marginLeft=m+'px';
		}
	}
}

function speedx2()
{	
	clearInterval(y);
	t=5;
	y=setInterval(run,t)
 	document.getElementById('start').disabled = true;
	document.getElementById('stop').disabled = false;
 	document.getElementById('reverse').disabled = true;
 	document.getElementById('speed').disabled = true;
 	document.getElementById('speedx2').disabled = true;

	function run() 
	{
		if (m>=1200) {
			clearInterval(y);
			t=20;
			document.getElementById('start').disabled = true;
			document.getElementById('stop').disabled = true;
			document.getElementById('reverse').disabled = false;
			document.getElementById('speed').disabled = true;
			document.getElementById('speedx2').disabled = true;

		}else{
		m+=3;
		var x=document.getElementById('img');
		x.style.marginLeft=m+'px';
		}
	}


}