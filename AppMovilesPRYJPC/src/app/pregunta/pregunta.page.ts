import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage {

  usuario: Usuario = new Usuario('','','','','');
  respuesta = '';

  constructor(private router: Router) {
    this.respuesta = '';

    if (this.router.getCurrentNavigation().extras.state) {
      this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
    }
    else {
      this.volverAlLogin();
    }
  }

  volverAlLogin() {
    this.router.navigate(['/login'])
  }



  recuperarPassword() {

    const usuEncontrado = this.usuario.buscarRespuestaValido(this.usuario.correo, this.respuesta);
    if (usuEncontrado) {
      const navigationExtras: NavigationExtras = {
        state: {
          usuario: usuEncontrado
        }
      };
      this.router.navigate(['/correcto'], navigationExtras);
    }
    else {
      this.router.navigate(['/incorrecto']);
    }
    this.respuesta = '';
  }
}
