import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: NgxCardsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.12", type: NgxCardsComponent, isStandalone: true, selector: "ngx-card", ngImport: i0, template: "<div class=\"test\">\r\n    <p>\r\n        ngx-cards works!\r\n    </p>\r\n</div>\r\n", styles: [".test{background-color:#ff0;height:4rem;width:4rem}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: NgxCardsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-card', standalone: true, imports: [], template: "<div class=\"test\">\r\n    <p>\r\n        ngx-cards works!\r\n    </p>\r\n</div>\r\n", styles: [".test{background-color:#ff0;height:4rem;width:4rem}\n"] }]
        }] });

/*
 * Public API Surface of ngx-cards
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxCardsComponent, NgxCardsService };
//# sourceMappingURL=ngx-cards.mjs.map
