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
  @Input() die!: Die;

  fileName: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.updateImageSource(this.die.value);
    this.die.rolled.subscribe((newValue) => {
      this.updateImageSource(newValue);
    })
  }

  ngOnDestroy(): void {
    this.die.rolled.unsubscribe();
  }

  updateImageSource(newValue: number) {
    this.fileName = `/assets/dice/d${newValue}.png`;
  }
}
