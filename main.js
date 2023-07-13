/* Mi proyecto será una market web de una casa de insumos médicos, la cual tendrá los productor que se irán agregando al carrito de compras */

/* Algoritmo con un condicional. */

/* Esta función determina si el usuario es mayor de edad o no mediante un condicional y permite o no el ingreso */

function mayorMenor(edad){
    
    if(edad >= 18){
        return alert("👍 Eres mayor de edad, puedes ingresar.  💪")
    }else{
        return alert("🤨 Eres menor de edad, no puedes ingresar. ⛔")
    }
}

mayorMenor(prompt("Ingresa tu edad"));

/* Algoritmo con un bucle. */

/* Esta función pide un saludo y devuelve un saludo */

function saludo() {

    let nombre = prompt("ingresa tu nombre")
    let entrada = prompt("Di hola o adios.")

    while (entrada !== "ESC") {

        let saludo = entrada.toLowerCase();

        switch (saludo) {
            case "hola":
                alert("🙋‍♂️" + " " + "Hola." + " " + "Bienvenid@" + " " + nombre + " " + "🙋‍♀️");
                break;
            case "adios":
                alert("🙋‍♂️" + " " + "Adios" + " " + nombre + " " + "🙋‍♀️");
                break;
            default:
                alert("🙋‍♂️" + " " + "¿QUISISTE DECIR HOLA O ADIOS?" + " " + "🏃‍♀️")
                break;
        }

        nombre = prompt("ingresa tu nombre")
        entrada = prompt("Di hola o adios. (ESC para salir)")
    }
}

saludo();


/* Esta función me dice cualquier porcentaje de cualquier número.
 */

function porcentaje(num, porcentaje){
    return alert("El "+porcentaje+"% de "+num+" es "+(num * porcentaje)/100)
}

porcentaje(parseFloat(prompt("Ingresa un número")), parseFloat(prompt("Ingresa un %")))

