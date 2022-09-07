import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
})
export class CorreoPage {

  correo = '';

  constructor(private router: Router) {
    this.correo = '';
  }

  volverAlLogin() {
    this.router.navigate(['/login'])
  }

  recuperarPassword() {
    const usu = new Usuario('','','','','');
    const usuEncontrado = usu.buscarCorreoValido(this.correo);
    if (usuEncontrado) {
      const navigationExtras: NavigationExtras = {
        state: {
          usuario: usuEncontrado
        }
      };
      this.router.navigate(['/pregunta'], navigationExtras);
    }
    else {
      this.router.navigate(['/incorrecto']);
    }
    this.correo = '';
  }
}
