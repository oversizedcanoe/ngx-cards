import { OnDestroy, OnInit } from '@angular/core';
import { Deck } from '../../models/deck';
import { Card } from '../../models/card';
import { FaceState } from '../../shared/enums';
import * as i0 from "@angular/core";
export declare class NgxCardsComponent implements OnInit, OnDestroy {
    /**
     * Required parameter to specify an instance of a card.
     */
    card: Card;
    /**
     * Optional parameter to reference a Deck instance.
     */
    deckRef: Deck | undefined;
    fileName: string;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    updateImageSource(state: FaceState): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxCardsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxCardsComponent, "ngx-card", never, { "card": { "alias": "card"; "required": false; }; "deckRef": { "alias": "deckRef"; "required": false; }; }, {}, never, never, true, never>;
}
