import { CardValue, Suit } from "../shared/enums";

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

