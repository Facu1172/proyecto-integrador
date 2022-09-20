//CARGA DE FICHAS DE PERSONAS
let Personas= []


class persona{
    id
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
    let nombre = document.getElementById("nombre").value
    let edad = document.getElementById("edad").value
    let calle = document.getElementById("calle").value
    let numeracionCalle = document.getElementById("numeracion").value

    let OBJETO_PERSONA = new  persona(nombre,edad,calle,numeracionCalle)

    if (typeof parseInt(OBJETO_PERSONA.edad)==NaN){alert("Edad incorrecta")
return null;}

    return OBJETO_PERSONA
}

document.getElementById("formulario").onsubmit = (event) => validarFormulario(event);
function validarFormulario(event) {
    event.preventDefault();
    OBJETO_PERSONA = DatosPersona()
    if(OBJETO_PERSONA == null){
        return;
    }
OBJETO_PERSONA.id = Personas.length +1    
Personas.push(OBJETO_PERSONA) 
AgregarPersonas()}


function AgregarPersonas() {
    let ListaPersonas = document.getElementById("ListaPersonas");
    ListaPersonas.innerHTML = "";
    Personas.forEach((persona) => {
      let column = document.createElement("div");
      column.className = "col-md-4 mt-3";
      column.id = `columna-${persona.id}`;
      column.innerHTML = `
              <div class="card">
                  <div class="card-body">
                  <p class="card-text">ID:
                      <b>${persona.id}</b>
                  </p>
                  <p class="card-text">Nombre:
                      <b>
                      <div id= "nombrenuevo-${persona.id}">
                      ${persona.nombre}
                      </div>
                      </b>
                  </p>
                  <p class="card-text">Precio edad:
                      <b>${persona.edad}</b>
                  </p>
                  <p class="card-text">Precio calle:
                      <b>${persona.calle}</b>
                  </p>
                  <p class="card-text">Numeracion:
                      <b>${persona.numeracionCalle}</b>
                  </p>
                  </div>
                  <div class="card-footer">
                      <button class="btn btn-danger" id="botonEliminar-${persona.id}" >Eliminar</button>
                  </div>
                  <div class="card-footer">
                  <button class="btn btn-caution" id="botonmodificarNombre-${persona.id}" >modificar nombre</button>
              </div>
              </div>`;
              ListaPersonas.append(column);
              let botonEliminar = document.getElementById(`botonEliminar-${persona.id}`);
              botonEliminar.onclick = () => eliminarProducto(persona.id);

              let botonModificarNombre = document.getElementById(`botonmodificarNombre-${persona.id}`);
              botonModificarNombre.onclick = () => modificarNombre(persona.id);
            }
            )
             }
             
            function modificarNombre (id){
            let NombreModificado = prompt("Ingrese el nuevo nombre")
            
            let indicePersonaAbuscar = Personas.findIndex((persona => persona.id == id));

            Personas[indicePersonaAbuscar].nombre = NombreModificado
            document.getElementById ("nombrenuevo-"+id).innerHTML= NombreModificado
        }