//Funciones utilizadas :


const charactCount = (text) =>{
    let count = text.length;
        while(count < 5){
            text = prompt("debe escribir una contraseña superior a los 5 caracteres para continuar");
            count = text.length;
        }
        alert("Contraseña permitida");
        return text;
}

const checkUser = (user) =>{
    for(let i = 2; i >= 0; i--){
        if (user == saveUser){
            alert("bienvenido " + user + " ahora es necesario que ingrese su contraseña");
            break;
        }else {
            alert("usuario no registrado, intente nuevamente");
        }
        user = prompt("ingrese su usuario registrado");
    }
}

const checkPass =  () =>{
    for(let i = 2; i >= 0; i--){
        let password = prompt("ingrese su contraseña");
        if(pass == password){
            alert("Logueado correctamente");
            login = true;
            break;
        } else {
            alert("contraseña incorrecta");
            alert("Te quedan " + i + " intentos");
            if(i === 0){
                alert("superaste el numero de intentos, prueba de nuevo mas tarde.");
            }
        }
    }
}

let costoTotal = function(c){
    let valor = 150000;

    let impuesto = (valor*0.30) + valor;

    let cuota = impuesto / c;

    return cuota;
}

//logueado de pagina web.

alert("Bievenido a nuestra pagina web")
alert("Para continuar es necesario la creacion de un nombre de usuario y contraseña");

// variables que van a guardar los datos del usuario.

let saveUser = prompt("Ingrese un nombre de usuario");

let savePass = prompt("Ingrese una contraseña, debe tener como minimo 5 caracteres para mayor seguridad");

//Aqui controlaremos que el usuario cree una contraseña mayor a 5 caracteres, caso contrario, no podra continuar(luego podra modificarla).

let pass = charactCount(savePass);

//variable que determinara que se produjo el logueado correctamente.

let login = false;

//Comprobacion de usuario.

let user = prompt("ingrese su usuario registrado");

checkUser(user);

//Comprobacion de password

checkPass();


//Logueado de forma correcta. Se inicia el menu.

if(login){
    alert("Mostraremos el menu de opciones de cuenta");
    let menu = prompt(" 1- Cambiar nombre de usuario \n 2- Modificar contraseña \n 3- Agregar direccion \n 4- Elegir forma de pago de suscripcion \n presiona x para salir");

while(menu != "x"){
    switch (menu){
        case "1":
            let newUser = prompt("ingrese nuevo nombre de usuario");
            if(newUser == saveUser){
                alert("El nombre de usuario es el mismo que el registrado")
            }else {
                saveUser = newUser;
             alert("el cambio se produjo correctamente el nuevo usuario es " + saveUser);
            }
            break;
            
        case "2":
            let newPass = prompt("Ingrese su nueva contraseña");
            if(newPass == savePass){
                alert("la contraseña nueva, no puede ser igual a la anterior");
            } else{
                savePass = newPass;
             alert("Su contraseña se cambio correctamente");
             //este console, es solo para comprobar que se cambio la contraseña, pero por seguridad no lo mostramos en pantalla
            console.log(savePass);
            }
            break;
        case "3":
            let adress = prompt("Ingreso de informacion de Domicilio");
            alert("Direccion guardada correctamente");
            console.log(adress);
            break;
            case "4":
                alert("Elige el plan de pago de la suscripcion anual, su valor total es de $150.000 \n Puedes optar entre 3, 6 y 9 cuotas s/ interes \n *El costo total incluira el impuesto PAIS (30%)");
                let price;
                let finalPrice;
                let option = parseInt(prompt("Cuota de preferencia: \n - 3 \n - 6 \n - 9"))
                if (option == 3){
                    price = costoTotal(option);
                    finalPrice = alert("Seleccionaste el pago de " + option+ " cuotas" +  "\n El costo total de cada cuota sera de: $" + price + " mensual");
                }
                else if (option == 6){
                    price = costoTotal(option);
                    finalPrice = alert("Seleccionaste el pago de " + option+ " cuotas" +  "\n El costo total de cada cuota sera de: $" + price + " mensual");
                }
                else if (option == 9){
                    price = Math.floor(costoTotal(option));
                    finalPrice = alert("Seleccionaste el pago de " + option+ " cuotas" +  "\n El costo total de cada cuota sera de: $" + price + " mensual");
                }
                else {
                    alert("Opcion de cuota no valida");
                }
            break;
        default:
            alert("opcion no valida");
    }
    menu = prompt(" 1- Cambiar nombre de usuario \n 2- Modificar contraseña \n 3- Agregar direccion \n 4- Elegir forma de pago de suscripcion \n presiona x para salir");
}
}

alert("¡Gracias por utilizar nuestra pagina!");