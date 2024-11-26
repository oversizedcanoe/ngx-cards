import { CardValue, Suit } from "../shared/enums";
import { Joker } from "./joker";

export class Card {
    suit: Suit;
    value: number;

    constructor(value: number, suit: Suit) {
        if(value in CardValue == false){
            throw new Error(`Cannot create Card object with value: ${value}`)
        }

        if(suit in Suit == false){
            throw new Error(`Cannot create Card object with suit: ${suit}`)
        }

        if (suit == Suit.None && value != CardValue.Joker) {
            throw new Error(`Invalid value: ${value}, only CardValue.Joker can be created with Suit.None`)
        }

        this.value = value;
        this.suit = suit;
    }

    shorthandName() {
        let name: string = '';

        switch (this.value) {
            case CardValue.Joker:
                name += "W"; // wild
                break;
            case CardValue.Ace:
                name += "A";
                break;
            case CardValue.Jack:
                name += "J";
                break;
            case CardValue.Queen:
                name += "Q";
                break;
            case CardValue.King:
                name += "K";
                break;
            default:
                name += this.value.toString();
        }

        if (this instanceof Joker == false) {
            name += Suit[this.suit][0]; // first character of suit
        }

        return name;

    }
}

