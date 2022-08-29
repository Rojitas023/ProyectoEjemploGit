export class Usuario {
  public correo = '';
  public nombreUsuario = '';
  public password = '';



  public validarCorreoUsuario(): string {
    if(this.correo.trim() === ''){
      return 'Para iniciar debe ingresar un correo'
    }
  }

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

  public validarUsuario(): string {
    return this.validarCorreoUsuario()
      || this.validarPassword();
  }


}
