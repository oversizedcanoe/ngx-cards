import { Subject } from "rxjs";
export declare class Dice {
    minValue: number;
    maxValue: number;
    value: number;
    rolled: Subject<number>;
    constructor(maxValue?: number);
    roll(): void;
}
