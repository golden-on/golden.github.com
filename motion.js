/*function toggle(){
	var hello = document.querySelector(".bigcart");
	hello.classList.toggle('open')
}

function opas(){
	var opps = document.querySelector(".back");
	opps.classList.opas('openup')
}*/



document.querySelector(".carte").addEventListener('click', function ad(){
	
	var input = document.querySelector(".bigcart");
 	input.classList.add("open");
 	var input = document.querySelector(".back");
 	input.classList.add("openup");
});

document.querySelector(".close").addEventListener('click', function ad(){
	
	var input = document.querySelector(".bigcart");
 	input.classList.remove("open");
 	var input = document.querySelector(".back");
 	input.classList.remove("openup");
});
#   a m i n e  
 