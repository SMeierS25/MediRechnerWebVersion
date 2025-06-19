import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [IonApp, IonRouterOutlet, CommonModule],
})
export class AppComponent {
  showSplash = true;

  splashBeendet() {
    this.showSplash = false;
  }
}
