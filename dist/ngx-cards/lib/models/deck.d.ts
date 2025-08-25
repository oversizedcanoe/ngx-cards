import { Card } from "./card";
export declare class Deck {
    private cards;
    cardCount: number;
    constructor(jokersIncluded?: boolean, shuffled?: boolean);
    printDeck(): void;
    shuffle(): void;
    drawCardFromTop(): Card | undefined;
    drawCardFromBottom(): Card | undefined;
    addCardToTop(card: Card): void;
    addCardToMiddle(card: Card): void;
    addCardToBottom(card: Card): void;
}
