//CARGA DE FICHAS DE PERSONAS
let miPersona
alert("Bienvenido al sistema de carga de perfiles, ud podra cargar los datos de una persona y modificarlos")

class persona{
    constructor(nombre,edad,calle,numeracionCalle){
    this.nombre=nombre
    this.edad=edad
    this.calle=calle
    this.numeracionCalle=numeracionCalle
}
modificarNombre = (nuevonombre) => (this.nombre = nuevonombre)
}
function DatosPersona (){
    let nombre = prompt("ingrese el nombre de la persona a registrar")
    let edad = parseInt(prompt("ingrese la edad de la persona"))
    let calle = prompt("ingrese el nombre de la calle")
    let numeracionCalle = parseInt(prompt("ingrese el numero de la calle"))

    let OBJETO_PERSONA = new  persona(nombre,edad,calle,numeracionCalle)
    return OBJETO_PERSONA
}
miPersona= DatosPersona()
alert("Ud ha ingresado a " +miPersona.nombre + " de "+miPersona.edad +" años " + " ,vive en la calle "+ miPersona.calle + " al " + miPersona.numeracionCalle)

function menu (){
    OPCION = parseInt(prompt("1- Modificar Nombre \n 2- Modificar edad \n 3- modificar calle \n 4- modificar numeración de calle \n 5- Imprimir datos" ))
    return OPCION
}

function opcionMenu (){
    let seleccion = menu()
    if (seleccion=1){persona.modificarNombre(nuevonombre = prompt("ingrese el nuevo nombre"))
return persona.modificarNombre}

}