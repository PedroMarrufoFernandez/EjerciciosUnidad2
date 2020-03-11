//Pedro Marrufo Fernández.

var numDatos = 5, resultadoSuma = 0
var numeros = [0,0,0,0,0]
for (let index = 0; index < numDatos; index++) 
{
    numeros[index] = 2
}

var sumarNumeros = function(datos)
{
    for (let index = 0; index < datos.length; index++)
    {
        resultadoSuma += datos[index]
    }
    console.log("La suma es: "+resultadoSuma)
}
sumarNumeros(numeros)