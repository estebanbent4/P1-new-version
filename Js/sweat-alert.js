

document.getElementById('boton-correo').addEventListener("click", (event) => {
  event.preventDefault();
  
 
 
  const nombreInput = document.getElementById('nombre-form');
  const nombre = nombreInput.value;

  const correoInput = document.getElementById('email');
  const correo = correoInput.value;

  const mensajeInput = document.getElementById('mensaje');
  const mensaje = mensajeInput.value;

  if (nombre === "") {
    Swal.fire({
      icon: "error",
      title: "Algo salió mal.",
      text: "Necesitas completar todos los campos para enviar tu mensaje.",
      confirmButtonColor: "#d50b0b",
      background: "#141414",
      customClass: 'alert-border',
      backdrop: false,
      iconColor:'#d50b0b'
    });
  } else if (mensaje === "") {
    Swal.fire({
      icon: "error",
      title: "Algo salió mal.",
      text: "Necesitas completar todos los campos para enviar tu mensaje.",
      confirmButtonColor: "#d50b0b",
      background: "#141414",
      titleColor: "#a3a3a3",
      textColor: "#a3a3a3",
      customClass: "alert-border",
      backdrop: false,
      iconColor:'#d50b0b',

    });
  } else if (correo === "") {
    Swal.fire({
      icon: "error",
      title: "Algo salió mal.",
      text: "Necesitas completar todos los campos para enviar tu mensaje.",
      confirmButtonColor: "#d50b0b",
      background: "#141414",
      titleColor: "#a3a3a3",
      textColor: "#a3a3a3",
      customClass: "alert-border",
      iconColor:'#d50b0b',
      backdrop: false,

    });
  } else if (!correo.includes("@")) {
    Swal.fire({
      icon: "error",
      title: "correo electrónico no válido",
      text: "Necesitas proporcionar un correo electrónico válido para enviar tu mensaje.",
      confirmButtonColor: "#d50b0b",
      background: "#141414",
      titleColor: "#a3a3a3",
      textColor: "#a3a3a3",
      iconColor:'#d50b0b',
      customClass: "alert-border",
      backdrop: false,

    });
  } else {

    const formulario = document.getElementById('formulario'); 
    formulario.submit();

    Swal.fire({
      icon: "success",
      title: "Envio exitoso",
      text: "Su correo fue enviado exitosamente!",
      confirmButtonColor: "#2cd40a",
      background: "#141414",
      titleColor: "#a3a3a3",
      textColor: "#a3a3a3",
      customClass: "alert-border1",
      iconColor:'#2cd40a',
      backdrop: false,
  

    }).then(() => {
      document.getElementById('nombre-form').value = "";
      document.getElementById('email').value = "";
      document.getElementById('mensaje').value = "";
      
    });
  }
});