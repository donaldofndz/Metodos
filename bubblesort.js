/**
 *@param {arr} [arr] [arreglo de entrada]
 *
 * Esta funcion esta encargada realizar el ordenamiento por medio de 
 * bubble sort con JavaScript
 * 
 */


function bubbleSort(arr){

	ret = Array.from(arr)
	var bandera = false
	do{
		var bandera = false
		for (var i = 1; i < ret.length ; i++){
			if(ret[i]>ret[i+1]){
				[ret[i],ret[i+1]] = [ret[i+1],ret[i]]
				bandera=true
			}
		}
	}while(bandera)

	return ret
}

arreglo = [1,236,6,34,3,6,84,2,5,6,723,35,6,7,34,67,3,2,12,1,4,6,73];

var order = bubbleSort(arreglo);
console.log(arreglo);
console.log(order);