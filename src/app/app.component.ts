import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private splashScreen: typeof SplashScreen) {
    this.splashScreen.show();
    // Realiza alguna inicialización aquí
    this.splashScreen.hide();
  }  
}
