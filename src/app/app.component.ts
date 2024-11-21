import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Importez RouterModule ici
  template: `
    <router-outlet></router-outlet> <!-- Gère l'affichage des routes -->
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
