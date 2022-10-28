import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular";

///mios
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { QrComponent } from './qr/qr.component';
import { ClaseComponent } from './clase/clase.component';
import { ForoComponent } from './foro/foro.component';



@NgModule({
    declarations: [
      InicioComponent,
      QrComponent,
      ClaseComponent,
      ForoComponent
    ],
    imports: [
      CommonModule,
      IonicModule,
      FormsModule
    ],
    exports: [
      InicioComponent,
      QrComponent,
      ClaseComponent,
      ForoComponent
    ]
})
export class ComponentModule { }
