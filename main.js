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
/*modificarNombre = (nuevonombre) => (this.nombre = nuevonombre)
modificarEdad = (nuevaedad) => (this.edad = nuevaedad)
modificarCalle = (nuevacalle) => (this.calle = nuevacalle)
modificarNumeracion = (nuevanumeracion) => (this.numeracionCalle = nuevanumeracion)
*/}
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

function eliminarProducto(idPersona) {
    let columnaBorrar = document.getElementById(`columna-${idPersona}`);
    let indiceBorrar = Personas.findIndex(
      (persona) => Number(persona.id) === Number(idPersona)
    );
  
    Personas.splice(indiceBorrar, 1);
    columnaBorrar.remove();
  }

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
                  <p class="card-text">Edad:
                      <b><div id= "edadnuevo-${persona.id}">
                      ${persona.edad}
                      </div></b>
                  </p>
                  <p class="card-text">Precio calle:
                      <b><div id= "callenuevo-${persona.id}">
                      ${persona.calle}
                      </div></b>
                  </p>
                  <p class="card-text">Numeracion:
                      <b><div id= "callenumeronuevo-${persona.id}">
                      ${persona.numeracionCalle}
                      </div></b>
                  </p>
                  </div>
                  <div class="card-footer">
                      <button class="btn btn-danger" id="botonEliminar-${persona.id}" >Eliminar</button>
                  </div>
                  <div class="card-footer">
                  <button class="btn btn-caution" id="botonmodificarNombre-${persona.id}" >modificar nombre</button>
              </div>
              <div class="card-footer">
              <button class="btn btn-caution" id="botonmodificarEdad-${persona.id}" >modificar edad</button>
          </div>
          <div class="card-footer">
          <button class="btn btn-caution" id="botonmodificarCalle-${persona.id}" >modificar calle</button>
      </div>
      <div class="card-footer">
          <button class="btn btn-caution" id="botonmodificarNumeroCalle-${persona.id}" >modificar Numeracion de calle</button>
      </div>
              </div>`;
              ListaPersonas.append(column);
              let botonEliminar = document.getElementById(`botonEliminar-${persona.id}`);
              botonEliminar.onclick = () => eliminarProducto(persona.id);

              let botonModificarNombre = document.getElementById(`botonmodificarNombre-${persona.id}`);
              botonModificarNombre.onclick = () => modificarNombre(persona.id);
            
              let botonModificarEdad = document.getElementById(`botonmodificarEdad-${persona.id}`);
              botonModificarEdad.onclick = () => modificarEdad(persona.id);
            
              let botonModificarCalle = document.getElementById(`botonmodificarCalle-${persona.id}`);
              botonModificarCalle.onclick = () => modificarCalle(persona.id);

              let botonModificarNumeroCalle = document.getElementById(`botonmodificarNumeroCalle-${persona.id}`);
              botonModificarNumeroCalle.onclick = () => modificarNumeracion(persona.id);
            }
            )
             }
             
            function modificarNombre (id){
            let NombreModificado = prompt("Ingrese el nuevo nombre")
            
            let indicePersonaAbuscar = Personas.findIndex((persona => persona.id == id));

            Personas[indicePersonaAbuscar].nombre = NombreModificado
            document.getElementById ("nombrenuevo-"+id).innerHTML= NombreModificado
        }
        function modificarEdad (id){
            let EdadModificado = prompt("Ingrese la nuevo edad")
            
            let indicePersonaAbuscar = Personas.findIndex((persona => persona.id == id));

            Personas[indicePersonaAbuscar].nombre = EdadModificado
            document.getElementById ("edadnuevo-"+id).innerHTML= EdadModificado
        }
        function modificarCalle (id){
            let CalleModificado = prompt("Ingrese la nueva calle")
            
            let indicePersonaAbuscar = Personas.findIndex((persona => persona.id == id));

            Personas[indicePersonaAbuscar].calle = CalleModificado
            document.getElementById ("callenuevo-"+id).innerHTML= CalleModificado
        }
        function modificarNumeracion (id){
            let CalleNumeroModificado = prompt("Ingrese la nueva numeracion")
            
            let indicePersonaAbuscar = Personas.findIndex((persona => persona.id == id));

            Personas[indicePersonaAbuscar].calle = CalleNumeroModificado
            document.getElementById ("callenumeronuevo-"+id).innerHTML= CalleNumeroModificado
        }