// creamos las constantes globales para los elementos principales 

const input = document.getElementById('to-do-input');
const addBtn = document.getElementById('add-btn');
const toDoList = document.getElementById('cont-to-do-list');
const completedList = document.getElementById('cont-completed-list');


// creamos la funcion que nos permite crear una nueva tarea a partir del formulario

// toda etiqueta que vamos a crear es partir de la maqueta html preexistente

// esta funcion solo crea la estructura del html y la deja en un limbo, aun no la inserta en la pagina
function createToDoItem(textoItem){

    // creamos el nodo o elemento padre 
    const item = document.createElement('div');
        item.classList.add('item-to-do');

    const checkbox = document.createElement('input');
    // creamos el nodo hijo del input y le agregamos el type checkbox
        checkbox.type="checkbox";

    // creamos el siguiente nodo hijo parrafo a este parrafo le asigno el valor del argumento de la funcion
    const p = document.createElement('p');
        p.textContent= textoItem;

    // creamos el ultimo nodo hijo, el boton de eliminar 
    const deleteBtn = document.createElement('button');
        deleteBtn.textContent= 'X';

    // ensamblamos dentro del nodo padre sus nodos hijos, es decir la estructura de la tarea

    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);

    // utilizamos el return para retornar o dar respuesta del elemento creado ya que lo usaremos en otra funcion
    return item;    
}  


// detectamos el click o evento click sobre el boton agregar con un evento de escucha o listener para que a partir de este evento se agregue la tarea dentro del contenedor cont-to-do-list

addBtn.addEventListener('click' , ()=>{
    const textoItem = input.value.trim();

    if (textoItem=="") {
        alert("no se puede crear una tarea vacia")
    }else{
        const newItem = createToDoItem(textoItem);
        toDoList.appendChild(newItem);
        input.value="";
        eventsToItems(newItem)

    }
})


// la sguiente funcion nos permitira agregar el funcionamiento principal sobre las tareas es decir masrcar la tarea como completada o en dado caso eliminarla

function eventsToItems(item){
    // utilizamos querySelector para capturar el  input y el button que estan dentro del item
    const checkbox = item.querySelector('input');
    const deleteBtn = item.querySelector('button');


    // completar la tarea o marcarla como completada
    checkbox.addEventListener('change' , ()=>{
        if (checkbox.checked) {
            completedList.appendChild(item);
        }else{
            toDoList.appendChild(item);
        }
    })


    // evento de eliminar
    deleteBtn.addEventListener('click', () =>{
        item.remove();
    })
}

const btnStyles = document.getElementById('change-styles');
    btnStyles.addEventListener('click' , ()=>{

        const linkCss = document.getElementById('enlace-estilos');

        if (linkCss.getAttribute('href') === 'css/styles.css') {
                linkCss.setAttribute('href' , 'css/styles-noche.css');
                btnStyles.textContent='modo dia'
        }else{
            linkCss.setAttribute('href' , 'css/styles.css');
            btnStyles.textContent='modo secso'
        }
})

// Detectar cuando el usuario presiona Enter en el input
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { // ⬅️ Verifica si fue Enter
        event.preventDefault(); // Evita que se recargue la página

        const textoItem = input.value.trim();

        if (textoItem === "") {
            alert("No se puede crear una tarea vacía");
        } else {
            const newItem = createToDoItem(textoItem);
            toDoList.appendChild(newItem);
            input.value = ""; 
            eventsToItems(newItem);
            input.focus(); // ⬅️ vuelve a enfocar el input para seguir escribiendo
        }
    }
});
