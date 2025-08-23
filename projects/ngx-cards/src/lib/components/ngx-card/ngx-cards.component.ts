import { Component, Input, OnInit } from '@angular/core';
import { Deck } from '../../models/deck';
import { Card } from '../../models/card';

@Component({
  selector: 'ngx-card',
  standalone: true,
  imports: [],
  templateUrl: './ngx-cards.component.html',
  styleUrl: './ngx-cards.component.css'
})

export class NgxCardsComponent implements OnInit {
  @Input() faceDown: boolean = true;

  /**
   * Optional parameter to reference a Deck instance.
   */
  @Input() deckRef: Deck | undefined;

  /**
   * Optional parameter to specify a specific card.
   */
  @Input() card: Card | undefined;

  public fileName: string;

  constructor() {
    this.fileName = `/assets/cards/R1.svg`;
   }
  ngOnInit(): void {
    if (this.card != undefined){
      this.fileName = `/assets/cards/${this.card.shorthandName()}.svg`;
    } 
  }

  test() {
    alert(this.card?.shorthandName());
  }

}
