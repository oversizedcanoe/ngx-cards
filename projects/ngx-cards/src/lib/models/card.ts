import { Subject } from "rxjs";
import { CardValue, FaceState, Suit } from "../shared/enums";

export class Card {
    public suit: Suit;
    public value: number;
    public state: FaceState;
    public flipped: Subject<FaceState> = new Subject<FaceState>();

    constructor(value: number, suit: Suit, state: FaceState = FaceState.FaceDown) {
        if (value in CardValue == false) {
            throw new Error(`Cannot create Card object with value: ${value}`)
        }

        if (suit in Suit == false) {
            throw new Error(`Cannot create Card object with suit: ${suit}`)
        }

        if (state in FaceState == false) {
            throw new Error(`Cannot create Card object with state: ${state}`)
        }

        if (suit == Suit.None && value != CardValue.Joker) {
            throw new Error(`Invalid value: ${value}, only CardValue.Joker can be created with Suit.None`)
        }

        this.value = value;
        this.suit = suit;
        this.state = state;
    }

    public isFaceUp(): boolean {
        return this.state == FaceState.FaceUp;
    }

    public isFaceDown(): boolean {
        return this.isFaceUp() == false;
    }

    public flip() {
        if (this.state == FaceState.FaceDown) {
            this.state = FaceState.FaceUp
        }
        else if (this.state == FaceState.FaceUp) {
            this.state = FaceState.FaceDown;
        }

        this.flipped.next(this.state);
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

