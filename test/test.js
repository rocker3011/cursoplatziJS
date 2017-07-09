
const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom',function(){

	it('Si termina con "ar" se quitan esas letras',function(){ //- Si termina con "ar" se quitan esas letras
		const translation = platzom("Programar")
 		expect(translation).to.equal("Program")
	})

	it('si inicia con Z , se le a;ade "pe"  al final',function(){ // si inicia con Z , se le a;ade "pe"  al final
		const translation = platzom("Zorro")
		const translation2 = platzom("Zarpar")

		expect(translation).to.equal("Zorrope")
		expect(translation2).to.equal("Zarppe")
	})
	
	it('si la palabra traducida tiene 10 o mas letras, debe partir a la mitad incluir guion',function(){ //si la palabra traducida tiene 10 o mas letras, debe partir a la mitad
//y colocar un guion en el medio
		const translation = platzom("abecedario")
		expect(translation).to.equal("abece-dario")
	})
	
	it('por ultimo, si la palabra original es un palindromo, ninguna regla anterior aplica y se devuelve la misma palabra intercalando mayusculas y minusculas.',function(){ //por ultimo, si la palabra original es un palindromo, ninguna regla anterior aplica y se devuelve la misma palabra intercalando mayusculas y minusculas.

		const translation = platzom("ana")
		expect(translation).to.equal("AnA")
		const translation2 = platzom("sometemos")
		expect(translation2).to.equal("SoMeTeMoS")
	})
})