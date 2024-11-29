import { Card } from "./card";
import { Joker } from "./joker";

export class Deck {
    private cards: Card[] = [];
    cardCount: number = this.cards.length;

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

    printDeck(): void {
        this.cards.forEach(element => {
            console.log(element.shorthandName());
        });
    }

    shuffle(): void {
        let currentIndex: number = this.cards.length;
        let randomIndex: number;

        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // Swap current index with random index
            [this.cards[currentIndex], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[currentIndex]];
        }
    }

    drawCardFromTop(): Card | undefined {
        return this.cards.pop();
    }

    drawCardFromBottom(): Card | undefined {
        return this.cards.shift();
    }

    addCardToTop(card: Card): void {
        this.cards.push(card);
    }

    addCardToMiddle(card: Card): void {
        let randomIndex = Math.floor(Math.random() * this.cards.length);
        this.cards.splice(randomIndex, 0, card);
    }

    addCardToBottom(card: Card): void {
        this.cards.unshift(card);
    }
}
