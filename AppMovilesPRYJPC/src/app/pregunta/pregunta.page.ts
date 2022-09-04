import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
// La clase ToastController sirve para mostrar mensajes emergente que duran un par de segundos
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage implements OnInit {

  public usuario: Usuario;

  constructor(private router: Router, private toastController: ToastController, private activeroute: ActivatedRoute, private alertController: AlertController) {
    this.usuario = new Usuario('','','Ana Torres Leiva','¿Cual es el nombre de su mascota?','');
    // this.usuario.correo = '';
    this.usuario.correo = 'atorres@duocuc.cl';
    this.usuario.password = '1234';
  }

  ngOnInit() {
  }


  login(): void{
    this.router.navigate(['/login'])
  }


  public respuesta(): void{
    if(!this.validarRespuesta(this.usuario)) {
      return;
    }

    this.mostrarMensaje('¡Bienvenido!');

    const navigationExtras: NavigationExtras = {
      state: {
        usuario: this.usuario
      }
    };
    this.router.navigate(['/correcto'], navigationExtras);


  }

  public validarRespuesta(usuario: Usuario): boolean {

    const res = this.usuario.buscarCorreoValido(
      this.usuario.correo);

    if (res) {
      this.usuario = res;
      return true;
    }
    else {
      this.mostrarMensaje('La respuesta es incorrecta');
      this.router.navigate(['/incorrecto']);
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
