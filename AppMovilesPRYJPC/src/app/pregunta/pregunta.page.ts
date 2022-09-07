import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage {

  respuesta = '';
  
  constructor(private router: Router) {
    this.respuesta = '';
  }
  
  volverAlLogin() {
    this.router.navigate(['/login'])
  }
  
  recuperarPassword() {
    const usu = new Usuario('','','','','');
    const usuEncontrado = usu.buscarRespuestaValido(this.respuesta);
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