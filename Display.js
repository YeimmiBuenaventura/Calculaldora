//Se declara la clase display, allí es donde se vera la interacción con el usuario
class Display {
    //Se declara un constructor que indica los aspectos que si o si debe tener nuestra clase, en este caso el valorAnterior y el valorActual lo que permitira actualizar los valores del display
    constructor(displayValorAnterior, displayValorActual) {
        //El this nos permite indicar que la variable sea propiedad de la clase
        this.displayValorActual = displayValorActual;
        //El this nos permite indicar que la variable sea propiedad de la clase
        this.displayValorAnterior = displayValorAnterior;
        //El this nos permite indicar que la variable sea propiedad de la clase, aqui le estamos indicando que la propiedad calculadora es igual a una nueva calculadora de la cual se tiene sus caracteristicas en el js Calculadora
        this.calculadora = new Calculadora();
        //Permite guardar el tipo de operacion que esta ejecutando el usuario
        this.tipoOperacion = undefined;
        //El this nos permite indicar que la variable sea propiedad de la clase, en este caso el valorActual corresponde al número como tal que el usuario ingrese
        this.valorActual = '';
         //El this nos permite indicar que la variable sea propiedad de la clase, en este caso el valorAnterior corresponde al número que va actualizandose al realizar una nueva operación
        this.valorAnterior = '';
        //Se agregan para poderlos ver reflejados en el display
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-', 
        }
    }
    //Nos permite borrar un numero a la vez
    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);//Se indica que el valor actual es igual al valor actual pasado a string, pero aplicandole slice, le indicamos que se lo corte en su ultimo número
        this.imprimirValores(); //Se implementa para que el display se actualice
    }
    //Permite setear todo colocando todas las instancias desde 0
    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();//Se esta indicando que si el ultimo evento realizado es diferente de igual ejecute la función calcular
        this.tipoOperacion = tipo;//Se indica que se esta actualizando la operacion al tipo que se acaba de ingresar
        this.valorAnterior = this.valorActual || this.valorAnterior; //Debemos setear el valor anterior,  con el valorActual que esta definido en la función calcular si no hay valorActual
        this.valorActual = ''; //Se setea el valor actual, pues cuando terminamos la operación el espacio debe quedar en blanco para poder realizar nuevamente una operación
        this.imprimirValores();
    }
    //
    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return //Se esta indicando que si el numero ingresado es igual a un punto y si el valor actual ya tiene un punto no se agregue un nuevo punto si no que devuelva el mismo es decir no lo marque
        this.valorActual = this.valorActual.toString() + numero.toString(); //Se esta indicando que el valor actual sera igual a el valor actual pasado a string concatenado con el numero tambien pasado a string
        this.imprimirValores(); //Se agrega el metodo para poder imprimir los valores y verlos en el display
    }
    //textContent indica que se va a setear el valor intrinseco en el HTML
    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;//Se esta indicando que el valor anterior que se mostrara en el display es el valorAnterior junto con el tipo de operación que se esta llevando acabo y que esta identificada por un signo expecifico (implementado en el constructor)
    }
    //Tomara los valores que tenga el display y lo pase a la calculadora para ejecutar la funcion
    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior); //Se declara la variable valorAnterior y se le adjudica valorAnterior pero convertido de nuevo a numero
        const valorActual = parseFloat(this.valorActual);//Se declara la variable valorActualy se le adjudica valorActual pero convertido de nuevo a numero
        //isNAN es una función que intenta convertir un parametro a numero, responde true cuando no puede ejecutarse
        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return //Se indica que si el valorActual o el valorAnterior no pueden ser convertidos a número no realice ninguna función "puede que esten vacios"
        //En caso de que si hayan numeros se debe realizar una actualización acorder a operación y valores
        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual);//el valorActual sera igual a, se llama la calculadora, se llama el tipoOperacion y los valores 
    }
}