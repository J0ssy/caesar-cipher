##### Sprint n°1 - Productos Finales 
### Código de César  
*Enunciado Ejercicio n°1*

Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo  
mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33  
espacios hacia la derecha.

------------------------- 

**[Diagrama de Flujo](https://github.com/J0ssy/caesar-cipher/blob/master/diagrama-flujo-caesar-cipher.png)**    

------------------------- 

**Función askTheUser** 
**Por medio de un prompt le preguntamos al usuario si quiere cifrar o descifrar su palabra,**    
**solicitando que ingrese una opción 1) ó 2)**    
Si responde algo distinto de un espacio en blanco, pasa a la siguiente condición   
Si ingresa la opción n°1 Cifrar    
- Se llama a la función **cipher**    
Si ingresa la opción n°2 Descifrar  
- Se llama a la función **decipher**  
Si ingresa una opción No válida  
- Le enviamos un alert con el error  
Se repite la pregunta inicial, hasta que el usuario ingrese una opción válida

**Función Cifrar (cipher)**   
**Le solicitamos por medio de un prompt que ingrese la palabra a cifrar**  
*Creamos una variable [] vacía para contener el valor de las letras en ASCII*  
*Creamos otra variable [] vacía para contener el valor anterior multiplicado por la cantidad de*  
*espacios solicitados*    
*Creamos otra variable para contener el resultado del valor anterior vuelto a caracter en ASCII*  
Por medio de una expresión regular analizamos si lo ingresado por el usuario corresponde solamente  
a caracteres del alfabeto  
- Si cumple lo anterior, la palabra ingresa a un bucle para ir analizando caracter por caracter  
-- Cada caracter se convierte a su valor en ASCII y es almacenado en una variable    
-- Al valor anterior se le aplica la fórmula correspondiente para obtener el valor con los 33  
espacios adicionales y se almacena en otra variable     
-- Transformamos el valor anterior a su equivalente en ASCII y se almacena en una variable  
- Enviamos el resultado al usuario por medio de una alerta  
- Adicionalmente imprimimos el resultado en la web  
Si el usuario ingresa un caracter no válido  
- Emerge un alert con el mensaje de error  
Se repite la pregunta inicial, hasta que el usuario ingrese caracteres válidos

**Función Descifrar (decipher)**   
**Le solicitamos por medio de un prompt que ingrese la palabra a descifrar**  
*Creamos una variable [] vacía para contener el valor de las letras en ASCII*  
*Creamos otra variable [] vacía para contener el valor anterior multiplicado por la cantidad de*  
*espacios necesarios para ververtir el proceso de Cifrar*        
*Creamos otra variable para contener el resultado del valor anterior vuelto a caracter en ASCII*  
Por medio de una expresión regular analizamos si lo ingresado por el usuario corresponde solamente  
a caracteres del alfabeto    
- Si cumple lo anterior, la palabra ingresa a un bucle para ir analizando caracter por caracter  
-- Cada caracter se convierte a su valor en ASCII y es almacenado en una variable    
-- Al valor anterior se le aplica la fórmula correspondiente para obtener el valor de los espacios  
en reversa y se almacena en otra variable      
-- Transformamos el valor anterior a su equivalente en ASCII y se almacena en una variable  
- Enviamos el resultado al usuario por medio de una alerta  
- Adicionalmente imprimimos el resultado en la web  
Si el usuario ingresa un caracter no válido  
- Emerge un alert con el mensaje de error  
Se repite la pregunta inicial, hasta que el usuario ingrese caracteres válidos

**Llamamos a la función askTheUser**




