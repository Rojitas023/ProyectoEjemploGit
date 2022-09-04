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

-----------



import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
// Las clases Router y NavigationExtras son necesarias para que la página login le pase
// el nombre de usuario a la página home
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
// La clase ToastController sirve para mostrar mensajes emergente que duran un par de segundos
import { ToastController } from '@ionic/angular';
import { Respuesta } from 'src/app/model/Pre';
import { Correo } from '../model/Correo';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage implements OnInit {

  public correo: Correo;
  public respuesta: Respuesta;

  constructor(private router: Router, private toastController: ToastController, private activeroute: ActivatedRoute) {
    this.respuesta = new Respuesta('');
    this.respuesta.respuesta= '';
    this.correo = new Correo();
    this.correo.CorreoUsuario = '';

    this.activeroute.queryParams.subscribe(params => {       // Utilizamos expresión lambda
      if (this.router.getCurrentNavigation().extras.state) { // Validar que tenga datos extras

        // Si tiene datos extra, se rescatan y se asignan a una propiedad
        this.correo= this.router.getCurrentNavigation().extras.state.usuario;

      } else {
        /*
          Si no vienen datos extra desde la página anterior, quiere decir que el usuario
          intentó entrar directamente a la página home sin pasar por el login,
          de modo que el sistema debe enviarlo al login para que inicie sesión.
        */
        this.router.navigate(['/correo']);
      }
    })
  }
 

  public ngOnInit(): void {

  }

  public ingresar(): void{
    if(!this.validarUsuario(this.respuesta)){
      return;
    }

}

public validarUsuario(respuesta:Respuesta): boolean {

  const navigationExtras: NavigationExtras = {
    state: {
    respuesta: this.respuesta

    }
  }
  this.router.navigate(['/pregunta'], navigationExtras); 

    if (this.correo.CorreoUsuario.trim() === 'atorres@duocuc.cl'){
      if (this.respuesta.respuesta.trim() === 'gato'){
        this.router.navigate(['/correcto'], navigationExtras);

        return false;
      }}
    if (this.correo.CorreoUsuario.trim() === 'avalenzuela@duocuc.cl'){
      if (this.respuesta.respuesta.trim() === 'juanito'){
        this.router.navigate(['/correcto'], navigationExtras);
        return false;
      }}
    if (this.correo.CorreoUsuario.trim() === 'cfuentes@duocuc.cl'){
      if (this.respuesta.respuesta.trim() === 'Valparaiso'){
        this.router.navigate(['/correcto'], navigationExtras);
        return false;
      }}
    if (this.respuesta.respuesta.trim() !== ''){
      this.router.navigate(['/incorrecto']);
      return false;}
    else{
      this.mostrarMensaje('Ingrese informacion porfavor');
      return true;
    }
  }
  
  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
        message: mensaje,
        duration: duracion? duracion: 2000
      });
    toast.present();
  }
  public nombres(): string {
    if (this.correo.CorreoUsuario.trim() === 'atorres@duocuc.cl'){
      return 'Ana Torres Leiva'
    }
    if (this.correo.CorreoUsuario.trim() === 'avalenzuela@duocuc.cl'){
      return 'Alberto Valenzuela Nuñez'   
    }
    if (this.correo.CorreoUsuario.trim() === 'cfuentes@duocuc.cl'){
      return 'Carla Fuentes Gonzalez'
    }
  }

  public valPregunta(): string {
    if (this.correo.CorreoUsuario.trim() === 'atorres@duocuc.cl'){
      return '¿nombre de su mascota?'
    }
    if (this.correo.CorreoUsuario.trim() === 'avalenzuela@duocuc.cl'){
      return '¿nombre de su mejor amigo/a?'   
    }
    if (this.correo.CorreoUsuario.trim() === 'cfuentes@duocuc.cl'){
      return '¿Lugar de nacimiento de su madre?'
    }
  }
}