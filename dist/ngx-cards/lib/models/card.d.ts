import { Suit } from "../shared/enums";
export declare class Card {
    suit: Suit;
    value: number;
    constructor(value: number, suit: Suit);
    shorthandName(): string;
}
