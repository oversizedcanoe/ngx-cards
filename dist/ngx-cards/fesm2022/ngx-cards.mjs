import * as i0 from '@angular/core';
import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

var Suit;
(function (Suit) {
    Suit[Suit["None"] = 0] = "None";
    Suit[Suit["Club"] = 1] = "Club";
    Suit[Suit["Diamond"] = 2] = "Diamond";
    Suit[Suit["Heart"] = 3] = "Heart";
    Suit[Suit["Spade"] = 4] = "Spade";
})(Suit || (Suit = {}));
var CardValue;
(function (CardValue) {
    CardValue[CardValue["Joker"] = 0] = "Joker";
    CardValue[CardValue["Ace"] = 1] = "Ace";
    CardValue[CardValue["Two"] = 2] = "Two";
    CardValue[CardValue["Three"] = 3] = "Three";
    CardValue[CardValue["Four"] = 4] = "Four";
    CardValue[CardValue["Five"] = 5] = "Five";
    CardValue[CardValue["Six"] = 6] = "Six";
    CardValue[CardValue["Seven"] = 7] = "Seven";
    CardValue[CardValue["Eight"] = 8] = "Eight";
    CardValue[CardValue["Nine"] = 9] = "Nine";
    CardValue[CardValue["Ten"] = 10] = "Ten";
    CardValue[CardValue["Jack"] = 11] = "Jack";
    CardValue[CardValue["Queen"] = 12] = "Queen";
    CardValue[CardValue["King"] = 13] = "King";
})(CardValue || (CardValue = {}));
var FaceState;
(function (FaceState) {
    FaceState[FaceState["FaceDown"] = 1] = "FaceDown";
    FaceState[FaceState["FaceUp"] = 2] = "FaceUp";
})(FaceState || (FaceState = {}));

class NgxCardsComponent {
    /**
     * Required parameter to specify an instance of a card.
     */
    card;
    /**
     * Optional parameter to reference a Deck instance.
     */
    deckRef;
    fileName = '';
    constructor() {
    }
    ngOnInit() {
        this.updateImageSource(this.card.state);
        this.card.flipped.subscribe((newFaceState) => {
            this.updateImageSource(newFaceState);
        });
    }
    ngOnDestroy() {
        this.card.flipped.unsubscribe();
    }
    updateImageSource(state) {
        if (state == FaceState.FaceDown) {
            this.fileName = `/assets/cards/R1.svg`;
        }
        else if (state == FaceState.FaceUp) {
            this.fileName = `/assets/cards/${this.card.shorthandName()}.svg`;
        }
        else {
            throw Error(`Unknown Card FaceState: ${state}`);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: NgxCardsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.12", type: NgxCardsComponent, isStandalone: true, selector: "ngx-card", inputs: { card: "card", deckRef: "deckRef" }, ngImport: i0, template: "<div>\r\n    <img src=\"{{ fileName }}\"/>\r\n</div>", styles: [":host{height:inherit;width:inherit}div{height:inherit;width:inherit}img{height:inherit;width:inherit;object-fit:contain}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: NgxCardsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-card', standalone: true, imports: [], template: "<div>\r\n    <img src=\"{{ fileName }}\"/>\r\n</div>", styles: [":host{height:inherit;width:inherit}div{height:inherit;width:inherit}img{height:inherit;width:inherit;object-fit:contain}\n"] }]
        }], ctorParameters: () => [], propDecorators: { card: [{
                type: Input
            }], deckRef: [{
                type: Input
            }] } });

class NgxDiceComponent {
    /**
     * Required parameter to specify an instance of a die.
     */
    dice;
    fileName = '';
    constructor() {
    }
    ngOnInit() {
        this.updateImageSource(this.dice.value);
        this.dice.rolled.subscribe((newValue) => {
            this.updateImageSource(newValue);
        });
    }
    ngOnDestroy() {
        this.dice.rolled.unsubscribe();
    }
    updateImageSource(newValue) {
        this.fileName = `/assets/dice/d${newValue}.png`;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: NgxDiceComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.12", type: NgxDiceComponent, isStandalone: true, selector: "ngx-dice", inputs: { dice: "dice" }, ngImport: i0, template: "<div>\r\n    <img src=\"{{ fileName }}\"/>\r\n</div>", styles: [":host{height:inherit;width:inherit}div{height:inherit;width:inherit}img{height:inherit;width:inherit;object-fit:contain}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: NgxDiceComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-dice', standalone: true, imports: [], template: "<div>\r\n    <img src=\"{{ fileName }}\"/>\r\n</div>", styles: [":host{height:inherit;width:inherit}div{height:inherit;width:inherit}img{height:inherit;width:inherit;object-fit:contain}\n"] }]
        }], ctorParameters: () => [], propDecorators: { dice: [{
                type: Input
            }] } });

class Card {
    suit;
    value;
    state;
    flipped = new Subject();
    constructor(value, suit, state = FaceState.FaceDown) {
        if (value in CardValue == false) {
            throw new Error(`Cannot create Card object with value: ${value}`);
        }
        if (suit in Suit == false) {
            throw new Error(`Cannot create Card object with suit: ${suit}`);
        }
        if (state in FaceState == false) {
            throw new Error(`Cannot create Card object with state: ${state}`);
        }
        if (suit == Suit.None && value != CardValue.Joker) {
            throw new Error(`Invalid value: ${value}, only CardValue.Joker can be created with Suit.None`);
        }
        this.value = value;
        this.suit = suit;
        this.state = state;
    }
    isFaceUp() {
        return this.state == FaceState.FaceUp;
    }
    isFaceDown() {
        return this.isFaceUp() == false;
    }
    flip() {
        if (this.state == FaceState.FaceDown) {
            this.state = FaceState.FaceUp;
        }
        else if (this.state == FaceState.FaceUp) {
            this.state = FaceState.FaceDown;
        }
        this.flipped.next(this.state);
    }
    shorthandName() {
        let name = '';
        let addFirstCharOfSuit = true;
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

class Joker extends Card {
    constructor() {
        super(0, Suit.None);
    }
}

class Deck {
    cards = [];
    cardCount = this.cards.length;
    constructor(jokersIncluded = false, shuffled = true) {
        for (let suitIndex = 1; suitIndex < 5; suitIndex++) {
            for (let cardIndex = 1; cardIndex < 14; cardIndex++) {
                this.cards.push(new Card(cardIndex, suitIndex));
            }
        }
        this.cards.reverse();
        if (jokersIncluded) {
            this.cards.push(new Joker());
            this.cards.push(new Joker());
        }
        if (shuffled) {
            this.shuffle();
        }
    }
    printDeck() {
        this.cards.forEach(element => {
            console.log(element.shorthandName());
        });
    }
    shuffle() {
        let currentIndex = this.cards.length;
        let randomIndex;
        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // Swap current index with random index
            [this.cards[currentIndex], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[currentIndex]];
        }
    }
    drawCardFromTop() {
        return this.cards.pop();
    }
    drawCardFromBottom() {
        return this.cards.shift();
    }
    addCardToTop(card) {
        this.cards.push(card);
    }
    addCardToMiddle(card) {
        let randomIndex = Math.floor(Math.random() * this.cards.length);
        this.cards.splice(randomIndex, 0, card);
    }
    addCardToBottom(card) {
        this.cards.unshift(card);
    }
}

class Dice {
    minValue = 1;
    maxValue;
    value = 1;
    rolled = new Subject();
    constructor(maxValue = 6) {
        if (maxValue < 1) {
            throw new Error(`Parameter ${maxValue} must be greater than or equal to 1`);
        }
        else if (maxValue > 6) {
            throw new Error('Currently only up to D6 is supported.');
        }
        this.maxValue = maxValue;
    }
    roll() {
        this.value = Math.ceil(Math.random() * this.maxValue);
        this.rolled.next(this.value);
    }
}

/*
 * Public API Surface of ngx-cards
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Card, CardValue, Deck, Dice, FaceState, Joker, NgxCardsComponent, NgxDiceComponent, Suit };
//# sourceMappingURL=ngx-cards.mjs.map
