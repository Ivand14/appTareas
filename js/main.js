let nombre= prompt('Ingresa tu nombre')

while(nombre==''){
    alert('Ingresa un nombre valido')
    nombre=prompt('Vuelve a ingresar el nombre')
}

do {
    alert(nombre+' Bienvenido a todo list app ')
    nombre=prompt('¿ Desea Continuar? Presione enter')
} while (nombre!='');

let alarma=prompt('¿Desea configurar una alarma? Si/No ')

while(alarma=='Si'){
    alarma=prompt('¿A que hora desea su alarma?')
    alert('Su alarma fue programada a las '+ alarma)
}





