import { Component } from '@angular/core';
import { BarcodeScanner, SupportedFormat } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss'],
})
export class QrComponent {

  escaneando: boolean = false;

  constructor() {}

  async checkPermission() {
    return new Promise(async (resolve) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        resolve(true);
      } else if (status.denied) {
        BarcodeScanner.openAppSettings();
        resolve(false);
      }
    });
  }

  async comenzarEscaneo() {
    const allowed = await this.checkPermission();
    if (allowed) {
      this.escaneando = true;
      BarcodeScanner.hideBackground();
      const result = await BarcodeScanner.startScan({ targetedFormats: [SupportedFormat.QR_CODE] });
      if (result.hasContent) {
        this.escaneando = false;
        alert(result.content);
      } 
      else {
        alert('No fue posible encontrar datos de código QR');
      }
    } 
    else {
      alert('No fue posible escanear, verifique que la aplicación tenga permiso para la cámara');
    }
  }

  detenerEscaneo() {
    BarcodeScanner.stopScan();
    this.escaneando = false;
  }

  ionViewWillLeave() {
    this.detenerEscaneo();
  }
}
