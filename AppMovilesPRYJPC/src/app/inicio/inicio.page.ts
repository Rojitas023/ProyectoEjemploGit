import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public usuario: Usuario;

  constructor(
    private activeroute: ActivatedRoute
  , private router: Router
  , private alertController: AlertController) {

// Se llama a la ruta activa y se obtienen sus parámetros mediante una subscripcion
this.activeroute.queryParams.subscribe(params => {       // Utilizamos expresión lambda
  if (this.router.getCurrentNavigation().extras.state) { // Validar que tenga datos extras

    // Si tiene datos extra, se rescatan y se asignan a una propiedad
    this.usuario = this.router.getCurrentNavigation().extras.state.usuario;

  } else {
    /*
      Si no vienen datos extra desde la página anterior, quiere decir que el usuario
      intentó entrar directamente a la página home sin pasar por el login,
      de modo que el sistema debe enviarlo al login para que inicie sesión.
    */
    this.router.navigate(['/login']);
  }
});
}
validarqr(): void{
  this.router.navigate(['/qrreader'])
}
  ngOnInit() {
  }

}
