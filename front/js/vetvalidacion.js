function validar(formulario) {
    if (formulario.nombreContacto.value.length <= 3) {
      alert("Favor de ingresar más de tres caracteres en el campo nombre.");
      formulario.nombreContacto.focus();
      return false;
    }
  
    let email = formulario.correoContacto.value;
    // Agrega aquí más validaciones para el formulario de contacto si es necesario
    return true;
  }
  
  function validar2(formulario2) {
    if (formulario2.nombre.value.length <= 3) {
      alert("Favor de ingresar más de tres caracteres en el campo nombre.");
      formulario2.nombre.focus();
      return false;
    }
  
    let email = formulario2.correo.value;
    // Agrega aquí más validaciones para el formulario de registro de usuario si es necesario
    return true;
  }
  
  function validar3(formulario3) {
    if (formulario3.nombreMascota.value.length <= 3) {
      alert("Favor de ingresar más de tres caracteres en el campo nombre de la mascota.");
      formulario3.nombreMascota.focus();
      return false;
    }
  
    if (formulario3.especie.value.length <= 3) {
      alert("Favor de ingresar más de tres caracteres en el campo especie.");
      formulario3.especie.focus();
      return false;
    }
  
    if (formulario3.raza.value.length <= 3) {
      alert("Favor de ingresar más de tres caracteres en el campo raza.");
      formulario3.raza.focus();
      return false;
    }
  
    if (formulario3.edad.value < 0) {
      alert("Favor de ingresar un valor válido en el campo edad.");
      formulario3.edad.focus();
      return false;
    }
  
    // Agrega aquí más validaciones para el formulario de registro de mascota si es necesario
    return true;
  }