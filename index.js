//Se declaran variables teniendo en cuenta los elementos del html
const displayValorAnterior = document.getElementById('valorAnterior'); //Aquí se esta indicando que la variable displayValorAnterior corresponde al valor indicado en todo el documento con un Id = valor-anterior
const displayValorActual = document.getElementById('valorActual'); //Aquí se esta indicando que la variable displayValorActual corresponde al valor indicado en todo el documento con un Id = valor-actual
const botonesNumeros = document.querySelectorAll('.numero'); //Aquí se esta indicando que la variable botonesNumeros corresponde al primer valor dentro del documento que coincida con la clase numero
const botonesOperadores = document.querySelectorAll('.operador'); //Aquí se esta indicando que la variable botonesOperadores corresponde al primer valor dentro del documento que coincida con la clase operador
const night = document.querySelector('#switch'); //Aquí se esta indicando que la variable night corresponde al id=switch en el documento
//Se crea el objeto display con sus debidos parametros
const display = new Display(displayValorAnterior, displayValorActual);

//Se crea un metodo para que el sistema escuche cada boton "Evento" 
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML)); //Se le indica que escuche el boton "addEventListener" al cual se le ha dado click e implemente el metodo agregarNumero del display, el número corresponde al valor que esta puesto en el botón en el HTML "boton.innerHTML"
});

//Se crea un metodo para que el sistema escucha cada boton "Evento"
botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))//Se le indica que escuche el boton "addEventListener" al cual se le ha dado click e implemente el metodo computar del display, el  valor corresponde al puesto en el botón en el HTML "boton.value"
});
//Se crea un metodo para activar el modo noche
night.addEventListener(('click'), () => {
    document.body.classList.toggle('dark');//Se le indica que escuche el boton "addEventListener" al cual se le ha dado click e implemente el modo noche, se filtra indicando en el documento, en el body, busque en la lista de clases, e implemente la clase dark, el toogle sirve para indicarle al sistema que implemente la clase dark pero si ya esta implementada la quite
});