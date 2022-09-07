export class Usuario {
  // public correo = '';
  public correo = '';
  public password = '';
  public nombre = '';
  public preguntaSecreta = '';
  public respuestaSecreta = '';

  constructor(
    correo: string,
    password: string,
    nombre: string,
    preguntaSecreta: string,
    respuestaSecreta: string)
  {
    this.correo = correo;
    this.password = password;
    this.nombre = nombre;
    this.preguntaSecreta = preguntaSecreta;
    this.respuestaSecreta = respuestaSecreta;
  }

  public listaUsuariosValidos(): Usuario[] {
    const lista = [];
    lista.push(new Usuario('atorres@duocuc.cl', '1234', 'Ana Torres Leiva'
      , '¿Cual es el nombre de su mascota?', 'gato'));
    lista.push(new Usuario('avalenzuela@duocuc.cl', 'qwer', 'Alberto valenzuela nuñez'
      , '¿Cuál es el nombre de su mejor amigo?', 'juanito'));
    lista.push(new Usuario('cfuentes@duocuc.cl', 'asdf', 'Carla Fuentes González'
      , '¿Cuál es lugar de nacimiento de su madre?', 'valparaiso'));
    return lista;
  }

  public buscarUsuarioValido(correo: string, password: string): Usuario {
    return this.listaUsuariosValidos().find(
      usu => usu.correo === correo && usu.password === password);
  }

  public buscarCorreoValido(correo: string): Usuario {
    return this.listaUsuariosValidos().find(
      usu => usu.correo === correo
    );
  }

  public buscarRespuestaValido(correo: string, respuestaSecreta: string): Usuario {
    return this.listaUsuariosValidos().find(
      usu => usu.correo === correo && usu.respuestaSecreta === respuestaSecreta
    );
  }


  public validarcorreo(): string {
    if (this.correo.trim() === '') {
      return 'Para ingresar al sistema debe ingresar un nombre de usuario.';
    }
    if (this.correo.length < 3 || this.correo.length > 25) {
      return 'El nombre de usuario debe tener entre 3 y 25 caracteres.';
    }
    return '';
  }

  // public validarCorreoUsuario(): string {
  //   if(this.correo.trim() === ''){
  //     return 'Para iniciar debe ingresar un correo'
  //   }
  // }

  public validarPassword(): string {
    if (this.password.trim() === '') {
      return 'Para entrar al sistema debe ingresar la contraseña.';
    }
    for(let i = 0; i < this.password.length; i++) {
      if ('0123456789'.indexOf(this.password.charAt(i)) === -1) {
        return 'La contraseña debe ser numérica.';
      }
    }
    if (this.password.length !== 4) {
      return 'La contraseña debe ser numérica de 4 dígitos.';
    }
    return '';
  }

  // public validarUsuario(): string {
  //   return this.validarCorreoUsuario()
  //     || this.validarPassword();
  // }

  public validarUsuario(): string {
    return this.validarcorreo()
      || this.validarPassword();
  }

  public validarCorreo(): String{
    return this.validarCorreo();
  }

  public validarRespuesta(): String{
    return this.validarRespuesta();
  }
}
