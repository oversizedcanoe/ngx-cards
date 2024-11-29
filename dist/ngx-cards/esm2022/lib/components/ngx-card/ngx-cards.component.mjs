import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxCardsComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNhcmRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jYXJkcy9zcmMvbGliL2NvbXBvbmVudHMvbmd4LWNhcmQvbmd4LWNhcmRzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jYXJkcy9zcmMvbGliL2NvbXBvbmVudHMvbmd4LWNhcmQvbmd4LWNhcmRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVlqRCxNQUFNLE9BQU8saUJBQWlCO0lBQ25CLFFBQVEsR0FBWSxJQUFJLENBQUM7SUFFbEM7O09BRUc7SUFDTSxPQUFPLENBQW1CO0lBRW5DOztPQUVHO0lBQ00sSUFBSSxDQUFtQjtJQUV6QixRQUFRLENBQVM7SUFFeEI7UUFFRSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO3dHQWxCVSxpQkFBaUI7NEZBQWpCLGlCQUFpQix3SUNaOUIsZ0VBR007OzRGRFNPLGlCQUFpQjtrQkFSN0IsU0FBUzsrQkFDRSxVQUFVLGNBQ1IsSUFBSSxXQUNQLEVBQUU7d0RBTUYsUUFBUTtzQkFBaEIsS0FBSztnQkFLRyxPQUFPO3NCQUFmLEtBQUs7Z0JBS0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEZWNrIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RlY2snO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NhcmQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtY2FyZCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LWNhcmRzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybDogJy4vbmd4LWNhcmRzLmNvbXBvbmVudC5jc3MnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmd4Q2FyZHNDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGZhY2VEb3duOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogT3B0aW9uYWwgcGFyYW1ldGVyIHRvIHJlZmVyZW5jZSBhIERlY2sgaW5zdGFuY2UuXHJcbiAgICovXHJcbiAgQElucHV0KCkgZGVja1JlZjogRGVjayB8IHVuZGVmaW5lZDtcclxuXHJcbiAgLyoqXHJcbiAgICogT3B0aW9uYWwgcGFyYW1ldGVyIHRvIHNwZWNpZnkgYSBzcGVjaWZpYyBjYXJkLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGNhcmQ6IENhcmQgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyBmaWxlTmFtZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIFxyXG4gICAgdGhpcy5maWxlTmFtZSA9IFwiXCI7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxufVxyXG4iLCI8ZGl2PlxyXG4gICAgPGltZyBzcmM9XCIvYXNzZXRzL2NhcmRzL1IxLnN2Z1wiLz5cclxuXHJcbjwvZGl2PiJdfQ==