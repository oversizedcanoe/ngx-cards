import { Subject } from "rxjs";
import { FaceState, Suit } from "../shared/enums";
export declare class Card {
    suit: Suit;
    value: number;
    state: FaceState;
    flipped: Subject<FaceState>;
    constructor(value: number, suit: Suit, state?: FaceState);
    isFaceUp(): boolean;
    isFaceDown(): boolean;
    flip(): void;
    shorthandName(): string;
}
