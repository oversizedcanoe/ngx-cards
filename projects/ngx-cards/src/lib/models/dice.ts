import { Subject } from "rxjs";

export class Dice {
    public minValue: number = 1;
    public maxValue: number;
    public value: number = 1;
    public rolled: Subject<number> = new Subject<number>();

    constructor(maxValue: number = 6){
        if (maxValue < 1){
            throw new Error(`Parameter ${maxValue} must be greater than or equal to 1`)
        }
        else if (maxValue > 6){
            throw new Error('Currently only up to D6 is supported.')
        }

        this.maxValue = maxValue;
    }

    public roll(){
        this.value = Math.ceil(Math.random() * this.maxValue);
        this.rolled.next(this.value);
    }
}