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
        this.fileName = "";
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: NgxCardsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.12", type: NgxCardsComponent, isStandalone: true, selector: "ngx-card", inputs: { faceDown: "faceDown", deckRef: "deckRef", card: "card" }, ngImport: i0, template: "<div>\r\n    <img src=\"/assets/cards/R1.svg\"/>\r\n\r\n</div>", styles: ["div{height:10rem;width:10rem}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: NgxCardsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-card', standalone: true, imports: [], template: "<div>\r\n    <img src=\"/assets/cards/R1.svg\"/>\r\n\r\n</div>", styles: ["div{height:10rem;width:10rem}\n"] }]
        }], ctorParameters: () => [], propDecorators: { faceDown: [{
                type: Input
            }], deckRef: [{
                type: Input
            }], card: [{
                type: Input
            }] } });

/*
 * Public API Surface of ngx-cards
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxCardsComponent, NgxCardsService };
//# sourceMappingURL=ngx-cards.mjs.map
