
// Para ingresar, la contraseña correcta es 1234 
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


// funcion para logear 
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
        alert ("Máximo de intentos realizado. Se te enviará un mail para verificar tu identidad.")
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
        alert ("Usted va a comprar " + cantidadPC + " PC Gamer Armada(s), " + cantidadPlaca + " Placa(s) de video, " + cantidadProcesador + " Procesador(es) y " + cantidadRam + " Memoria(s) RAM." + " El total es U$D " + total + ". Gracias por elegirnos!")
    }
}

logear()
comprar()