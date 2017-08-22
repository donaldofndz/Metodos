
function rightBubbleSort(arreglo) {

	var inArr = arreglo;
	
	for (var i = 0; i <= inArr.length; i++) {
		if(inArr[i]>inArr[i+1]){
			[inArr[i],inArr[i+1]]=[inArr[i+1],inArr[i]]
		}
	}
	return inArr
}

function leftBubbleSort(arreglo){

	var inArr = arreglo;
	var bandera = false

	for (var i = inArr.length; i > 0; i--) {
		if(inArr[i-1]>inArr[i]){
			[inArr[i-1],inArr[i]]=[inArr[i],inArr[i-1]]	
			bandera = true
		}
	}
	var bandArr = [inArr,bandera]
	return bandArr
}

function cocktailSort(arreglo){

	var finArr = arreglo
	var contador = 0

	do{
		finArr = rightBubbleSort(finArr);
		bandArr = leftBubbleSort(finArr);
		finArr = bandArr[0]
		contador++
	}while(bandArr[1] == true)
	
	console.log('El numero total de pasadas fue: ' + contador)
	console.log(finArr) 


}

cadena = [12,62,6,7,845,65,2,6,8,4,73,9,0,3,4]

cocktailSort(cadena)



