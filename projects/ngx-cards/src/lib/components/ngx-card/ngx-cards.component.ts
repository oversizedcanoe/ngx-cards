import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Deck } from '../../models/deck';
import { Card } from '../../models/card';
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
   * Required parameter to specify an instance of a card.
   */
  @Input() card!: Card;

  /**
   * Optional parameter to reference a Deck instance.
   */
  @Input() deckRef: Deck | undefined;

  fileName: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.updateImageSource(this.card.state);
    this.card.flipped.subscribe((newFaceState) => {
      this.updateImageSource(newFaceState);
    })
  }

  ngOnDestroy(): void {
    this.card.flipped.unsubscribe();
  }

  updateImageSource(state: FaceState) {
    if (state == FaceState.FaceDown) {
      this.fileName = `/assets/cards/R1.svg`;
    }
    else if (state == FaceState.FaceUp) {
      this.fileName = `/assets/cards/${this.card.shorthandName()}.svg`;
    }
    else {
      throw Error(`Unknown Card FaceState: ${state}`)
    }
  }
}
