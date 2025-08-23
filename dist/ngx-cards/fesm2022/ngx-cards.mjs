import * as i0 from '@angular/core';
import { Injectable, Component, Input } from '@angular/core';

class NgxCardsService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: NgxCardsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: NgxCardsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: NgxCardsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class NgxCardsComponent {
    faceDown = true;
    /**
     * Optional parameter to reference a Deck instance.
     */
    deckRef;
    /**
     * Optional parameter to specify a specific card.
     */
    card;
    fileName;
    constructor() {
        this.fileName = `/assets/cards/R1.svg`;
    }
    ngOnInit() {
        if (this.card != undefined) {
            this.fileName = `/assets/cards/${this.card.shorthandName()}.svg`;
        }
        alert(this.fileName);
    }
    test() {
        alert(this.card?.shorthandName());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: NgxCardsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.12", type: NgxCardsComponent, isStandalone: true, selector: "ngx-card", inputs: { faceDown: "faceDown", deckRef: "deckRef", card: "card" }, ngImport: i0, template: "<div>\r\n    <img (click)=\"test()\" src=\"{{ fileName }}\"/>\r\n\r\n</div>", styles: ["div{height:10rem;width:10rem}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: NgxCardsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-card', standalone: true, imports: [], template: "<div>\r\n    <img (click)=\"test()\" src=\"{{ fileName }}\"/>\r\n\r\n</div>", styles: ["div{height:10rem;width:10rem}\n"] }]
        }], ctorParameters: () => [], propDecorators: { faceDown: [{
                type: Input
            }], deckRef: [{
                type: Input
            }], card: [{
                type: Input
            }] } });

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

class Card {
    suit;
    value;
    constructor(value, suit) {
        if (value in CardValue == false) {
            throw new Error(`Cannot create Card object with value: ${value}`);
        }
        if (suit in Suit == false) {
            throw new Error(`Cannot create Card object with suit: ${suit}`);
        }
        if (suit == Suit.None && value != CardValue.Joker) {
            throw new Error(`Invalid value: ${value}, only CardValue.Joker can be created with Suit.None`);
        }
        this.value = value;
        this.suit = suit;
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

/*
 * Public API Surface of ngx-cards
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Card, CardValue, Deck, Joker, NgxCardsComponent, NgxCardsService, Suit };
//# sourceMappingURL=ngx-cards.mjs.map
