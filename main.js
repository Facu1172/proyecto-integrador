//CARGA DE FICHAS DE PERSONAS
let Personas= []

alert("Bienvenido al sistema de carga de perfiles, ud podra cargar los datos de una persona y modificarlos")

class persona{
    constructor(nombre,edad,calle,numeracionCalle){
    this.nombre=nombre
    this.edad=edad
    this.calle=calle
    this.numeracionCalle=numeracionCalle
}
modificarNombre = (nuevonombre) => (this.nombre = nuevonombre)
modificarEdad = (nuevaedad) => (this.edad = nuevaedad)
modificarCalle = (nuevacalle) => (this.calle = nuevacalle)
modificarNumeracion = (nuevanumeracion) => (this.numeracionCalle = nuevanumeracion)
}
function DatosPersona (){
    let nombre = prompt("ingrese el nombre de la persona a registrar")
    let edad = parseInt(prompt("ingrese la edad de la persona"))
    let calle = prompt("ingrese el nombre de la calle")
    let numeracionCalle = parseInt(prompt("ingrese el numero de la calle"))

    let OBJETO_PERSONA = new  persona(nombre,edad,calle,numeracionCalle)
    return OBJETO_PERSONA
}
function mostrarPersonas() {
    for (let index = 0; index < Personas.length; index++) {
        alert("Nombre: " + Personas[index].nombre + " Edad: " + Personas[index].edad + " Calle: " + Personas[index].calle + " " + Personas[index].numeracionCalle);
    }
}
function menu (){
    OPCION = parseInt(prompt("1- Agregar persona \n 2- Modificar nombre \n 3- modificar calle \n 4- modificar edad \n 5-modificar numeracion de calle  \n 6- Imprimir datos" ))
    return OPCION
}

function opcionMenu (){
    let seleccion = menu()
    if (seleccion==1){Personas.push(DatosPersona())
        opcionMenu() }
if (seleccion==2){
    let mensajeAMostrar = ""
    
    Personas.forEach((persona,index)=>{
    mensajeAMostrar += index + "- " + persona.nombre + "\n"
    })
    
    let numeroPersona = parseInt(prompt(mensajeAMostrar + "\n Ingrese el numero de la persona a modificar"))
    Personas[numeroPersona].modificarNombre(nuevonombre = prompt("ingrese el nuevo nombre"))

    opcionMenu()}
if(seleccion==3) {
    let mensajeAMostrar = ""
    
    Personas.forEach((persona,index)=>{
    mensajeAMostrar += index + "- " + persona.calle + "\n"
})
    let numeroPersona =(prompt(mensajeAMostrar + "\n Ingrese el numero de la calle a modificar"))
Personas[numeroPersona].modificarCalle(nuevacalle = prompt("ingrese la nueva calle"))

opcionMenu()
}
if(seleccion==4) {
    let mensajeAMostrar = ""
    
    Personas.forEach((persona,index)=>{
    mensajeAMostrar += index + "- " + persona.edad + "\n"
})
    let numeroPersona =(prompt(mensajeAMostrar + "\n Ingrese la edad a modificar"))
Personas[numeroPersona].modificarEdad(nuevaedad = prompt("ingrese la nueva edad"))

opcionMenu()
}
if(seleccion==5) {
    let mensajeAMostrar = ""
    
    Personas.forEach((persona,index)=>{
    mensajeAMostrar += index + "- " + persona.numeracionCalle + "\n"
})
    let numeroPersona =(prompt(mensajeAMostrar + "\n Ingrese la numeracion a modificar"))
Personas[numeroPersona].modificarNumeracion(nuevanumeracion = prompt("ingrese la nueva numeracion"))

opcionMenu()
}
if(seleccion==6){(mostrarPersonas())
    opcionMenu()}
 }
opcionMenu()