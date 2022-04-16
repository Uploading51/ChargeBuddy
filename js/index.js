// JavaScript Document
let reportBtn = document.getElementById("report-prices")
let l2Price = document.getElementById("L2-Price")
let dcPrice = document.getElementById("DC-Price")
let chargeType = document.getElementById("charge-type")
let price = document.getElementById("price")
let searcher2 = document.getElementById("searcher2")
let stationName2 = document.getElementById("stationName2")
let description2 = document.getElementById("description2")
let address2 = document.getElementById("address2")
let image2 = document.getElementById("image2")


reportBtn.addEventListener("click", function(){
	let selectedChargeType = chargeType.value
	let enteredPrice = price.value
	if (selectedChargeType==="L2"){
		l2Price.innerHTML = enteredPrice
	}
	else {
	dcPrice.innerHTML = enteredPrice
	}
})


searcher2.addEventListener("click", function(){
	stationName2.innerHTML = "Chargepoint Charging Station (4200 Springdale Rd.)"
	description2.innerHTML = "Dolor sit amet consectetur adipisicing elit. Molestiae modi cum ipsam ad, illo possimus laborum reiciendis."
	address2.innerHTML = "4200 Springdale Rd, Cincinnati, OH 45251"
	image2.src = "images/CP_logo.jpg"
	
})


