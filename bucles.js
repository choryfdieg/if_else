function enviarCorreo(usuario){
   
    let correoEnviado = enviar(usuario);

    if(correoEnviado == true){
        alert("Correo enviado con exito")
    }else{
        alert("No se pudo enviar el correo");
    }

}

function enviar(email){

    if(email.includes("@")){
        // envio el correo
        return true;
    }

    return false;

}

let estudiantes = ["Juana@gmail.com", "Pedro", "Francisco"];

enviarCorreo(estudiantes[0]);


