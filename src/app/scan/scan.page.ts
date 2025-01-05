import { Component } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx'; 
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-scan',
    templateUrl: './scan.page.html',
    styleUrls: ['./scan.page.scss'],
  })
  export class ScanPage {

    constructor(
      private barcodeScanner: BarcodeScanner,
      private inAppBrowser: InAppBrowser,
      private navCtrl: NavController
    ) {}
  
    scanQRCode() {
        this.barcodeScanner.scan().then((barcodeData) => {
          console.log('Barcode data', barcodeData);
    
          if (barcodeData.text.startsWith('http://') || barcodeData.text.startsWith('https://')) {
            this.inAppBrowser.create(barcodeData.text, '_system');
          } else if (barcodeData.text.startsWith('geo:')) {
            const geoData = barcodeData.text.split(';');
            const latitude = parseFloat(geoData[0].replace('geo:', ''));
            const longitude = parseFloat(geoData[1]);
            
            this.navCtrl.navigateForward(['/map', { latitude, longitude }]);
          }
        }).catch((err) => {
          console.error('Error en el escaneo', err);
        });
      }
  }
  