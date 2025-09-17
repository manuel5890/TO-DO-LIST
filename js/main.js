// creamos las constantes globales para los elementos principales 

const input = document.getElementById('to-do-input');
const addBtn = document.getElementById('addBtn');
const toDoList = document.getElementById('to-do');
const completedList = document.getElementById('completed');


// creamos la funcion que nos permite crear una nueva tarea a partir del formulario

// toda etiqueta que vamos a crear es partir de la maqueta html preexistente
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