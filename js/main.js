
const contendorTareas=document.querySelector('.contenedorParaTareas')
const botonAgregar=document.querySelector('#boton-agregar')
const tarea=document.querySelector('#tarea')





botonAgregar.addEventListener('click',agregarTarea)


function agregarTarea(event){
    event.preventDefault();

    const texto=tarea.value;

    if(tarea.value !='' ){

        contendorTareas.classList.remove('disabled')

        const li=document.createElement('li');
        li.className='tareasPendientes';
        li.innerHTML=`
        <ul class="tareasRealizar" id="tareaLista"><i class="bi bi-caret-right"></i><p class="tareaAgregada" id="tareaLista">${texto}</p><i class="bi bi-trash3 icon" id='borrar'></i></ul>
        `
        
        contendorTareas.append(li)
        contendorTareas.classList.remove('disabled');
        tarea.value='';
    }
}

function tareaLista(element){
    element.classList.toggle('tareaTachada');
}



function tareaEliminada(element){
    element.parentNode.parentNode.remove(element.parentNode);
}



contendorTareas.addEventListener('click',function(event){
    const element=event.target;

    const elementData=element.attributes.id.value;

    if(elementData=='tareaLista'){

        tareaLista(element);

    }

    if(elementData=='borrar'){
        tareaEliminada(element);
    }

})

document.addEventListener('keyup',function(event){

    if(event.key=='Enter'){
        agregarTarea(event)
    }
})

const modoOscuro=document.querySelector('#icon')
const contenedorMdOscuro=document.querySelector('.container')

modoOscuro.addEventListener('click',()=>{
    contenedorMdOscuro.classList.toggle('claseOscuro')
})



