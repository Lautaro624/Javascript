let nombreUsuario = prompt("Bienvenido! Indica tu nombre:")
let apellidoUsuario = prompt("Indica tu apellido:")

if(nombreUsuario !== "" && apellidoUsuario !== ""){
    alert(`Hola! ${nombreUsuario} ${apellidoUsuario}`)
}else{
    alert("No indicó su nombre correctamente.")
}

alert("Vamos a practicar las tablas")

let numero = prompt("¿De que número le gustaría practicar la tabla?")
let i = 0
do{
    console.log(`${numero} X ${(i+1)} = ${numero*(i+1)}`)
    i++
}while(i<10)
alert("Podrá visualizar la tabla en la consola del navegador")
