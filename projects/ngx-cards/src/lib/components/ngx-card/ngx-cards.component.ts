import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Deck } from '../../models/deck';
import { Card } from '../../models/card';
import { Subject } from 'rxjs';
import { FaceState } from '../../shared/enums';

@Component({
  selector: 'ngx-card',
  standalone: true,
  imports: [],
  templateUrl: './ngx-cards.component.html',
  styleUrl: './ngx-cards.component.css'
})

export class NgxCardsComponent implements OnInit, OnDestroy {

  /**
   * Required parameter to specify a specific card.
   */
  @Input() card!: Card;

  /**
   * Optional parameter to reference a Deck instance.
   */
  @Input() deckRef: Deck | undefined;

  public fileName: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.updateImageSource();
    this.card.flipped.subscribe((_) => {
      this.updateImageSource();
    })
  }

  ngOnDestroy(): void {
    this.card.flipped.unsubscribe();
  }

  updateImageSource() {
    if (this.card.state == FaceState.FaceDown) {
      this.fileName = `/assets/cards/R1.svg`;
    }
    else if (this.card.state == FaceState.FaceUp) {
      this.fileName = `/assets/cards/${this.card.shorthandName()}.svg`;
    }
    else {
      throw Error(`Unknown Card FaceState: ${this.card.state}`)
    }
  }
}
