import { OnInit } from '@angular/core';
import { Deck } from '../../models/deck';
import { Card } from '../../models/card';
import * as i0 from "@angular/core";
export declare class NgxCardsComponent implements OnInit {
    faceDown: boolean;
    /**
     * Optional parameter to reference a Deck instance.
     */
    deckRef: Deck | undefined;
    /**
     * Optional parameter to specify a specific card.
     */
    card: Card | undefined;
    fileName: string;
    constructor();
    ngOnInit(): void;
    test(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxCardsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxCardsComponent, "ngx-card", never, { "faceDown": { "alias": "faceDown"; "required": false; }; "deckRef": { "alias": "deckRef"; "required": false; }; "card": { "alias": "card"; "required": false; }; }, {}, never, never, true, never>;
}
