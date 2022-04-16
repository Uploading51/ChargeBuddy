// JavaScript Document
let searcher = document.getElementById("searcher")
let stationName = document.getElementById("stationName")
let description = document.getElementById("description")
let address = document.getElementById("address")
let image = document.getElementById("image")


searcher.addEventListener("click", function(){
	stationName.innerHTML = "Chargepoint Charging Station (4200 Springdale Rd.)"
	description.innerHTML = "Dolor sit amet consectetur adipisicing elit. Molestiae modi cum ipsam ad, illo possimus laborum reiciendis."
	address.innerHTML = "4200 Springdale Rd, Cincinnati, OH 45251"
	image.src = "images/CP_logo.jpg"
	
})