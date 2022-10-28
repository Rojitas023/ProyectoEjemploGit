import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaseComponent } from 'src/app/components/clase/clase.component';
import { ForoComponent } from 'src/app/components/foro/foro.component';
import { InicioComponent } from 'src/app/components/inicio/inicio.component';
import { QrComponent } from 'src/app/components/qr/qr.component';


import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage,
    children:[
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'qr',
        component: QrComponent
      },
      {
        path: 'clase',
        component: ClaseComponent
      },
      {
        path: 'foro',
        component: ForoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
