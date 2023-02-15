function ejercicio1()
{
	//Es la variable del dni
	var dni=26897187;
	//Un lista con las letras
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	//Una condicion que si dni es mayor que 0 y menor que 99999999 entre y si no que de una alerta
	if(dni>0&&dni<99999999)
	{
		//Creamos una variable que nos de el modulo del dni entre 23
		var letra=dni%23;
		//Mostrar por consola el dni y la letra en lineas diferentes
		console.log(dni);
		console.log(letras[letra]);
		//Mostrar por pantalla el dni con la letra 
		document.write("Su dni es: "+dni+"-"+letras[letra])
	}
	else
	{
		alert("Lo siento el numero introducido no esta dentro de los caracteres permitidos")
	}
}