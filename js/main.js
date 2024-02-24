
/* // Para ingresar, la contraseña correcta es 1234 
let contraseña = "1234";
let login = false; 

// Variables inicializadas para la cantidad y el precio de cada producto, que se reasignarán dentro del bucle do..while para generar un TOTAL.
let precioPC = 2500;
let precioPlaca = 1500;
let precioProcesador = 1000;
let precioRam = 200;
let cantidadPC = 0;
let cantidadPlaca = 0;
let cantidadProcesador = 0;
let cantidadRam = 0;


// funcion para logear. No hace falta cambiarla. 
function logear () {
    for (let i=0; i <3; i++) {
        let contraseñaIgresada = prompt ("Por favor, escriba su clave");
        if (contraseña == contraseñaIgresada) {
            alert ("¡Bienvenido a GamingHouse!");
            login = true;
            break;
        } else {
            alert ("Datos no válidos. Máximo 3 intentos.");
        }
    }
    if (login == false) {
        alert ("Máximo de intentos realizado. Se te enviará un mail para verificar tu identidad.");
    }
}


// funcion para comprar
function comprar () {
    if (login) {
        let opcion;
        let total = 0;

        do {
            opcion = prompt("¿Qué producto desea comprar?\n1- PC Gamer Armada.\n2 - Placa de video.\n3 - Procesador.\n4 - Memoria Ram.\nPresione 'x' para terminar");
            
            if (opcion == "1") {
                alert("La PC Gamer Armada sale U$D 2500");
                cantidadPC = parseInt(prompt("¿Cuántas desea comprar?"));
                total += precioPC * cantidadPC;

            } else if (opcion == "2") {
                alert("La Placa de video sale U$D 1500");
                cantidadPlaca = parseInt(prompt("¿Cuántas desea comprar?"));
                total += precioPlaca * cantidadPlaca;

            } else if (opcion == "3") {
                alert("El Procesador sale U$D 1000");
                cantidadProcesador = parseInt(prompt("¿Cuántas desea comprar?"));
                total += precioProcesador * cantidadProcesador;
            
            } else if (opcion == "4") {
                alert("La Memoria Ram sale U$D 200");
                cantidadRam = parseInt(prompt("¿Cuántas desea comprar?"));
                total += precioRam * cantidadRam;
            
            } else if (opcion != "x") {
                alert("Opción no válida. Por favor, elija una opción correcta.");
            }
            
        } while (opcion != "x");
        alert ("Usted va a comprar " + cantidadPC + " PC Gamer Armada(s), " + cantidadPlaca + " Placa(s) de video, " + cantidadProcesador + " Procesador(es) y " + cantidadRam + " Memoria(s) RAM." + " El total es U$D " + total + ". Gracias por elegirnos!");
    }
} */



const productos = [
    {id: 1, producto: "PC Gamer armada", precio: 3000},
    {id: 2, producto: "PS5", precio: 2500},
    {id: 3, producto: "Procesador", precio: 1000},
    {id: 4, producto: "Memoria RAM", precio: 200},
    {id: 5, producto: "Joystick", precio: 500},
    {id: 6, producto: "Placa de video", precio: 1500},
    {id: 7, producto: "Fuente de alimentación", precio: 800},
    {id: 8, producto: "Disco sólido", precio: 200},
    {id: 9, producto: "Silla Gamer", precio: 300},
    {id: 10, producto: "Monitor", precio: 1200},
];


let precio = parseInt(prompt("Ingrese el precio máximo que está dispuesto a pagar por un solo producto. Le mostraremos las opciones disponibles:"));
function filtrar (arr, precio) {
    const productoFiltrado = arr.filter (producto => producto.precio <= precio);
    return productoFiltrado;
    }

let precioFiltrado = filtrar(productos, precio);


console.log(precioFiltrado);
let mensaje;
function mostrarProdFiltrados (arr) {
    mensaje = "Productos disponibles:\n"
    arr.forEach(prodFiltrado => { 
        mensaje += prodFiltrado.id + "- " + prodFiltrado.producto + " - Precio: " + prodFiltrado.precio + "\n";
    });
    return mensaje
}
mostrarProdFiltrados(precioFiltrado)
alert("Elija el producto que desea escribiendo su número: \n\n" + mensaje); // ACA HAY QUE MECHAR CON LA FN COMPRAR. Quizás esto puede ir dentro del do..while, vinculado con las nuevas fn y el arr. 



// logear();
// comprar();