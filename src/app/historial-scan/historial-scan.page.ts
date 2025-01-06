import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial-scan',
  templateUrl: './historial-scan.page.html',
  styleUrls: ['./historial-scan.page.scss'],
  standalone: false
})
export class HistorialScanPage implements OnInit {

  scanHistory: any[] = [];

  constructor() { }

  ngOnInit() {
    const history = localStorage.getItem('scanHistory');
  if (history) {
    this.scanHistory = JSON.parse(history);
  }
  }

}
