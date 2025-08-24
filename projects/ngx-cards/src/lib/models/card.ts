import { Subject } from "rxjs";
import { CardValue, Suit } from "../shared/enums";

export class Card {
    public suit: Suit;
    public value: number;
    public isFaceDown: boolean;
    public flipped: Subject<boolean> = new Subject<boolean>();

    constructor(value: number, suit: Suit, isFaceDown: boolean = true) {
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
        this.isFaceDown = isFaceDown;
    }

    public flip() {
        this.isFaceDown = !this.isFaceDown;
        this.flipped.next(this.isFaceDown);
    }

    public shorthandName() {
        let name: string = '';
        let addFirstCharOfSuit: boolean = true;

        switch (this.value) {
            case CardValue.Joker:
                name += "W"; // wild
                addFirstCharOfSuit = false;
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

        if (addFirstCharOfSuit) {
            name += Suit[this.suit][0]; // first character of suit
        }

        return name;

    }
}

