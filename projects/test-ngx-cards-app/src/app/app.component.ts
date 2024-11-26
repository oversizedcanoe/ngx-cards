import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxCardsComponent } from '../../../ngx-cards/src/lib/components/ngx-card/ngx-cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-ngx-cards-app';
}
