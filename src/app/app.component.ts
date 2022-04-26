import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig) {}

  date : any;

  ngOnInit() {
      this.primengConfig.ripple = true;
      this.date = "23/04/2022 23:39:32";
  }
}