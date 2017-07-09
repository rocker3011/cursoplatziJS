//import {platzom} from 'platzom' sin default
//import platzom from 'platzom' con default

export default function platzom(str){
	let translation = str

	//si la palabra original es capicua
	// ninguna regla anterior cuenta y se devuelve la misma palabra
	//intercalando mayusculas y minusculas


	const reverse = (str) => str.split("").reverse().join("")

	function minMay(str){
		const length = str.length
		let translation = ''
		for (let i=0;i<length;i++){
			const char = str.charAt(i)
			translation += i%2==0 ? char.toUpperCase() : char.toLowerCase()
		}

		return translation
	}

	if (str == reverse(str)){
		return minMay(str)
	}

	// si la palabra termina en "ar" se le quitan esos dos caracteres

	if (str.toLowerCase().endsWith("ar")){
		translation = str.slice(0,-2)
	}
	// si la palabra inicia con Z, se le a;ade "pe" al final

	if (str.toLowerCase().startsWith("z")){
		translation += "pe"
	}

	//si la palabra traducida tiene 10 o mas letras
	// se debe partir a la mitad y unirlos con un guion
	const length = translation.length
	if (length>=10){
		const firstHalf = translation.slice(0,Math.round(length/2))
		const secondHalf = translation.slice(Math.round(length/2))
		translation = `${firstHalf}-${secondHalf}`
	}

	return translation
}

console.log(platzom("Programar")) // Program
console.log(platzom("Zorro")) // Zorrope
console.log(platzom("Zarpar")) // Zarppe
console.log(platzom("abecedario")) //abece-dario
console.log(platzom("sometemos")) // SoMeTeMoS