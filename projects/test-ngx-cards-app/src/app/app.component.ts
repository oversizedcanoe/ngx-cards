import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxCardsComponent } from '../../../ngx-cards/src/lib/components/ngx-card/ngx-cards.component';
import { Card } from '../../../ngx-cards/src/lib/models/card';
import { Suit } from '../../../ngx-cards/src/lib/shared/enums';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-ngx-cards-app';

  public card: Card = new Card(4, Suit.Club);
}
