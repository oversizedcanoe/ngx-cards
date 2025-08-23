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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNhcmRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jYXJkcy9zcmMvbGliL2NvbXBvbmVudHMvbmd4LWNhcmQvbmd4LWNhcmRzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jYXJkcy9zcmMvbGliL2NvbXBvbmVudHMvbmd4LWNhcmQvbmd4LWNhcmRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOztBQVl6RCxNQUFNLE9BQU8saUJBQWlCO0lBQ25CLFFBQVEsR0FBWSxJQUFJLENBQUM7SUFFbEM7O09BRUc7SUFDTSxPQUFPLENBQW1CO0lBRW5DOztPQUVHO0lBQ00sSUFBSSxDQUFtQjtJQUV6QixRQUFRLENBQVM7SUFFeEI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLHNCQUFzQixDQUFDO0lBQ3hDLENBQUM7SUFDRixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFNBQVMsRUFBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQztRQUNuRSxDQUFDO1FBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSTtRQUNGLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQzt3R0E1QlUsaUJBQWlCOzRGQUFqQixpQkFBaUIsd0lDWjlCLDZFQUdNOzs0RkRTTyxpQkFBaUI7a0JBUjdCLFNBQVM7K0JBQ0UsVUFBVSxjQUNSLElBQUksV0FDUCxFQUFFO3dEQU1GLFFBQVE7c0JBQWhCLEtBQUs7Z0JBS0csT0FBTztzQkFBZixLQUFLO2dCQUtHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEZWNrIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RlY2snO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NhcmQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtY2FyZCcsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LWNhcmRzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybDogJy4vbmd4LWNhcmRzLmNvbXBvbmVudC5jc3MnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmd4Q2FyZHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGZhY2VEb3duOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogT3B0aW9uYWwgcGFyYW1ldGVyIHRvIHJlZmVyZW5jZSBhIERlY2sgaW5zdGFuY2UuXHJcbiAgICovXHJcbiAgQElucHV0KCkgZGVja1JlZjogRGVjayB8IHVuZGVmaW5lZDtcclxuXHJcbiAgLyoqXHJcbiAgICogT3B0aW9uYWwgcGFyYW1ldGVyIHRvIHNwZWNpZnkgYSBzcGVjaWZpYyBjYXJkLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGNhcmQ6IENhcmQgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyBmaWxlTmFtZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZmlsZU5hbWUgPSBgL2Fzc2V0cy9jYXJkcy9SMS5zdmdgO1xyXG4gICB9XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jYXJkICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgIHRoaXMuZmlsZU5hbWUgPSBgL2Fzc2V0cy9jYXJkcy8ke3RoaXMuY2FyZC5zaG9ydGhhbmROYW1lKCl9LnN2Z2A7XHJcbiAgICB9IFxyXG5cclxuICAgIGFsZXJ0KHRoaXMuZmlsZU5hbWUpO1xyXG4gIH1cclxuXHJcbiAgdGVzdCgpIHtcclxuICAgIGFsZXJ0KHRoaXMuY2FyZD8uc2hvcnRoYW5kTmFtZSgpKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXY+XHJcbiAgICA8aW1nIChjbGljayk9XCJ0ZXN0KClcIiBzcmM9XCJ7eyBmaWxlTmFtZSB9fVwiLz5cclxuXHJcbjwvZGl2PiJdfQ==