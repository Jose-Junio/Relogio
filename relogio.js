var vHor = document.getElementById("pHor")
var vMin = document.getElementById("pMin")
var vSeg = document.getElementById("pSeg")

setInterval (() => {
	var dat = new Date()
	var hh = dat.getHours()
	var mm = dat.getMinutes()
	var ss = dat.getSeconds()

	//window.alert(""+hh+"/"+mm+"/"+ss+"")
	
	var aHor = 360*hh/12 + (30*mm/60)
	var aMin = 360*mm/60
	var aSeg = 360*ss/60
	
	vHor.style.transform = "rotateZ("+aHor+"deg)";
	vMin.style.transform = "rotateZ("+aMin+"deg)";
	vSeg.style.transform = "rotateZ("+aSeg+"deg)";
})