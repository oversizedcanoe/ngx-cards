import { Suit } from "../shared/enums";
import { Card } from "./card";

export class Joker extends Card {
    constructor() {
        super(0, Suit.None);
    }
}