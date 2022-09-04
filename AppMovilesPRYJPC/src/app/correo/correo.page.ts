import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
// La clase ToastController sirve para mostrar mensajes emergente que duran un par de segundos
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
})
export class CorreoPage implements OnInit {

  public usuario: Usuario;


  constructor(private router: Router, private toastController: ToastController) {
    this.usuario = new Usuario('','','','','');
    // this.usuario.correo = '';
    this.usuario.correo = '';
    this.usuario.password = '';
  }

  ngOnInit() {
  }

  login(): void{
    this.router.navigate(['/login'])
  }

  public recucontra(): void{
    if(!this.validarCorreo(this.usuario)) {
      return;
    }

    this.mostrarMensaje('¡Bienvenido!');

    const navigationExtras: NavigationExtras = {
      state: {
        usuario: this.usuario
      }
    };
    this.router.navigate(['/pregunta'], navigationExtras);
  }



  public validarCorreo(usuario: Usuario): boolean {

    const cor = this.usuario.buscarCorreoValido(
      this.usuario.correo);

    if (cor) {
      this.usuario = cor;
      return true;
    }
    else {
      this.mostrarMensaje('El correo es incorrecto');
      return false;
    }
  }

/**
 * Muestra un toast al usuario
 *
 * @param mensaje Mensaje a presentar al usuario
 * @param duracion Duración el toast, este es opcional
 */
async mostrarMensaje(mensaje: string, duracion?: number) {
  const toast = await this.toastController.create({
      message: mensaje,
      duration: duracion? duracion: 2000
    });
  toast.present();
}
}

