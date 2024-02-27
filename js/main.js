// Para ingresar, la contraseña correcta es "1234".
let contraseña = "1234";
let login = false; 




// funcion para logear.
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




// Declaración de los arr a utilizar. 
const productos = [
    {id: 1, producto: "PC Gamer armada", precio: 3000, cantidad: 0},
    {id: 2, producto: "PS5", precio: 2500, cantidad: 0},
    {id: 3, producto: "Procesador", precio: 1000, cantidad: 0},
    {id: 4, producto: "Memoria RAM", precio: 200, cantidad: 0},
    {id: 5, producto: "Joystick", precio: 500, cantidad: 0},
    {id: 6, producto: "Placa de video", precio: 1500, cantidad: 0},
    {id: 7, producto: "Fuente de alimentación", precio: 800, cantidad: 0},
    {id: 8, producto: "Disco sólido", precio: 200, cantidad: 0},
    {id: 9, producto: "Silla Gamer", precio: 300, cantidad: 0},
    {id: 10, producto: "Monitor", precio: 1200, cantidad: 0},
];
const carrito = [];




// Función para filtrar los productos del arr productos en base al precio que el usuario desee.
let precio;
let productosFiltrados; // Este será el arr con los productos filtrados por precio. Contendrá la invocación a la función "filtrar" en caso de que login sea true. 
function filtrar (arr, precio) {
    do {
    precio = parseInt(prompt("Ingrese el precio máximo que está dispuesto a pagar por un solo producto. Le mostraremos las opciones disponibles:"));
    if (precio > 0 && !isNaN(precio)){
        const productoFiltrado = arr.filter (producto => producto.precio <= precio);
        return productoFiltrado;
    } else {
        alert ("Ingrese un precio válido");
    }
} while (true);
}




// Función para mostrar los productos filtrados en la función anterior (filtrar)
let mensaje; 
function mostrarProdFiltrados (arr) {
    mensaje = "Productos disponibles:\n"
    arr.forEach(prodFiltrado => { 
        mensaje += prodFiltrado.id + "- " + prodFiltrado.producto + " - Precio: " + prodFiltrado.precio + "\n";
    });
}




// Función de compra. El usuario elige producto y cantidad de cada uno. Esto se pushea al arr vacío carrito.
let total = 0;
let productoElegido;
function comprar (){
    let cantidad = 0;
    do {
        productoElegido = prompt("Elija el producto que desea escribiendo su número: \n\n" + mensaje + "\n Para salir, ingrese X");
        let productoEncontrado = productosFiltrados.find ((producto) => {
            return producto.id == productoElegido;
        })
        if (productoEncontrado && productoEncontrado.id === parseInt(productoElegido)) {

                alert ("Usted eligió: " + productoEncontrado.producto);

                do {
                    cantidad = parseInt(prompt ("Cúantos desea comprar?"));
                } while (cantidad <= 0  || isNaN(cantidad));

                productoEncontrado.cantidad = cantidad;
                total += cantidad * productoEncontrado.precio;
                carrito.push (productoEncontrado);
            } else if (productoElegido != "x") {
                alert ("Ingrese una opción válida");
            } 
    } while (productoElegido != "x");
}




// Mostramos el arr carrito y un resumen de compra.
let mensaje2 
function mostrarCarrito () {
    if (carrito.length == 0) {
        alert ("El carrito está vacío. Gracias por su visita!");
        return;
    } else {
        mensaje2 = "Resumen de su compra:\n";
        carrito.forEach(producto => {
            mensaje2 += producto.producto + " - Precio: " + producto.precio + " - Cantidad: " + producto.cantidad + "\n"
        });
    }
    alert (mensaje2 + "\nEl total de su compra es: " +  total + " U$D.  ¡Gracias por elegirnos!");
}



logear();

if (login) {
    productosFiltrados = filtrar(productos, precio); // ESTE ES EL ARRAY CON LOS PRODUCTOS FILTRADOS POR PRECIO.
    mostrarProdFiltrados(productosFiltrados);  // Le pasamos como parámetro el arr productosFiltrados para ver el resultado de la búsqueda del usuario
    comprar();
    mostrarCarrito();
}
