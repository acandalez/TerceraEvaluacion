

var celdasSelect = 0;
var idCeldaSelect;
var parejaCeldaSelect;

function iniciarJuego(){
	
	var tabla = document.getElementById("marco");
	tabla.removeAttribute("style");
	
	var divBoton = document.getElementById("divBoton");
	divBoton.setAttribute("style","display:none")
	
	colorearCeldas();
}

function colorAleatorio(){
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function colorearCeldas(){
	
	var celda1 = document.getElementById("1");
	var celda2 = document.getElementById("2");
	var celda3 = document.getElementById("3");
	var celda4 = document.getElementById("4");
	var celda5 = document.getElementById("5");
	var celda6 = document.getElementById("6");
	var celda7 = document.getElementById("7");
	var celda8 = document.getElementById("8");
	var celda9 = document.getElementById("9");
	var celda10 = document.getElementById("10");
	var celda11 = document.getElementById("11");
	var celda12 = document.getElementById("12");
	var celda13 = document.getElementById("13");
	var celda14 = document.getElementById("14");
	var celda15 = document.getElementById("15");
	var celda16 = document.getElementById("16");
	var celda17 = document.getElementById("17");
	var celda18 = document.getElementById("18");
	var celda19 = document.getElementById("19");
	var celda20 = document.getElementById("20");
	
	var celdas = new Array (celda1,celda2,celda3,celda4,celda5,celda6,celda7,celda8,celda9,celda10,
			celda11,celda12,celda13,celda14,celda15,celda16,celda17,celda18,celda19,celda20);
	
	for (var i = 0; i < 10; i++) {
		var aleatorio1 = Math.floor(Math.random() * (celdas.length-1));
		var par1 = celdas[aleatorio1];
		celdas.splice(aleatorio1, 1);
		var aleatorio2 = Math.floor(Math.random() * (celdas.length-1));
		var par2 = celdas[aleatorio2];
		celdas.splice(aleatorio2, 1);
		
		var color = colorAleatorio();
		
		par1.style.backgroundColor = color;
		var id1 = par1.getAttribute("id");
		par1.setAttribute("onclick", "compararCelda(" + i + "," + id1 + ");");
		par2.style.backgroundColor = color;
		var id2 = par2.getAttribute("id");
		par2.setAttribute("onclick", "compararCelda(" + i + "," + id2 + ");");
		
	}
	
}

function compararCelda (pareja, id){
	
	if (celdasSelect == 0){
		var celdaSelect1 = document.getElementById(id);
		celdaSelect1.style.opacity = "0.7"; 
		idCeldaSelect = id;
		parejaCeldaSelect = pareja;
		celdasSelect++;
	}
	else if (celdasSelect == 1){
		if (parejaCeldaSelect == pareja && idCeldaSelect != id) {
			var celdaSelect1 = document.getElementById(idCeldaSelect);
			celdaSelect1.style.backgroundColor = "black";
			celdaSelect1.style.opacity = "1";
			
			var celdaSelect2 = document.getElementById(id);
			celdaSelect2.style.backgroundColor = "black";
			celdaSelect2.style.opacity = "1";
			
			celdasSelect = 0;
			idCeldaSelect = -1;
			parejaCeldaSelect = -1;
		}
		else{
			celdasSelect = 0;
			var celdaSelect1 = document.getElementById(idCeldaSelect);
			celdaSelect1.style.opacity = "1";
			
			idCeldaSelect = -1;
			parejaCeldaSelect = -1;
		}
		
	}
}
