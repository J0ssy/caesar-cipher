/*
Primero le pregunto al usuario si quiere 
cifrar o descifrar

Por lo cual llamo a la función askTheUser
*/

function askTheUser() { // Le preguntamos al usuario la opción que desea
	do {
		var answer = prompt('Favor ingresar el número que corresponda a lo que desea hacer: \n1) Cifrar \n2) Descifrar');
		if(answer != '') {
			if(answer == '1') { // Si selecciona 1) Cifrar se llama a la función cipher
				cipher();
			} else if (answer == '2') { // Si selecciona 2) Descifrar se llama a la función decipher
				decipher();
			} else { // Si no ingresa una opción válida, le enviamos un alert con el error
				alert('Ingresar una opción válida: 1 ó 2');
			}
		}
	} while(answer == '' || (answer != '1' && answer != '2'));
}

function cipher() { // Función Cifrar
	do {
		var answerCipher = prompt('Ingresa la frase que deseas cifrar'); // Le preguntamos la frase a cifrar
		var text = [];
		var convert = [];
		var result = '';

		if(/^[a-zA-Z]*$/.test(answerCipher)) { // Si ingresa caracteres del alfabeto solamente
			for(var i = 0; i < answerCipher.length; i++){
				text[i] = answerCipher[i].charCodeAt(); // Convertimos a valor ASCII
				convert[i] = ((((text[i] - 65 + 33) % 26) + 65)); 
				result += String.fromCharCode(convert[i]);
			}
			alert('Tu palabra cifrada es: ' + result); 
			document.write(result); // Imprimimos resultado
			
		} else { // Mensaje de error si ingresa cualquier caracter que no sea el alfabeto
			alert('Solamente se permiten letras del alfabeto');
		}
	} while(!/^[a-zA-Z]*$/.test(answerCipher));
}

function decipher() { // Función Descifrar
	do {
		var answerDecipher = prompt('Ingresa la frase que deseas descifrar'); // Le preguntamos la frase a descifrar
		var text = [];
		var convert = [];
		var result = '';

		if(/^[a-zA-Z]*$/.test(answerDecipher)) { // Si ingresa caracteres del alfabeto solamente
			for(var i = 0; i < answerDecipher.length; i++){
				text[i] = answerDecipher[i].charCodeAt(); //Convertimos a valor ASCII
				convert[i] = ((((text[i] - 65 - 7 + 52) % 26) + 65)); 
				result += String.fromCharCode(convert[i]); 
			}
			alert('Tu palabra descifrada es: ' + result);
			document.write(result); // Imprimimos resultado
		} else { // Mensaje de error si ingresa cualquier caracter que no sea el alfabeto
			alert('Solamente se permiten letras del alfabeto');
		}
	} while(!/^[a-zA-Z]*$/.test(answerDecipher));
}

askTheUser(); // Le preguntamos al usuario que opción desea































