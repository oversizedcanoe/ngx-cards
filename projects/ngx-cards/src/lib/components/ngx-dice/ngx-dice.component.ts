import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FaceState } from '../../shared/enums';
import { Die } from '../../models/die';

@Component({
  selector: 'ngx-dice',
  standalone: true,
  imports: [],
  templateUrl: './ngx-dice.component.html',
  styleUrl: './ngx-dice.component.css'
})

export class NgxDiceComponent implements OnInit, OnDestroy {
  /**
   * Required parameter to specify an instance of a die.
   */
  @Input() dice!: Die;

  fileName: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.updateImageSource(this.dice.value);
    this.dice.rolled.subscribe((newValue) => {
      this.updateImageSource(newValue);
    })
  }

  ngOnDestroy(): void {
    this.dice.rolled.unsubscribe();
  }

  updateImageSource(newValue: number) {
    this.fileName = `/assets/dice/d${newValue}.png`;
  }
}
