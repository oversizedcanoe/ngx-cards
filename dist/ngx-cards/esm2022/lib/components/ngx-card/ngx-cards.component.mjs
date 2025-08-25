import { Component, Input } from '@angular/core';
import { FaceState } from '../../shared/enums';
import * as i0 from "@angular/core";
export class NgxCardsComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNhcmRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jYXJkcy9zcmMvbGliL2NvbXBvbmVudHMvbmd4LWNhcmQvbmd4LWNhcmRzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1jYXJkcy9zcmMvbGliL2NvbXBvbmVudHMvbmd4LWNhcmQvbmd4LWNhcmRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUdwRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBVS9DLE1BQU0sT0FBTyxpQkFBaUI7SUFFNUI7O09BRUc7SUFDTSxJQUFJLENBQVE7SUFFckI7O09BRUc7SUFDTSxPQUFPLENBQW1CO0lBRW5DLFFBQVEsR0FBVyxFQUFFLENBQUM7SUFFdEI7SUFDQSxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQWdCO1FBQ2hDLElBQUksS0FBSyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLHNCQUFzQixDQUFDO1FBQ3pDLENBQUM7YUFDSSxJQUFJLEtBQUssSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDO1FBQ25FLENBQUM7YUFDSSxDQUFDO1lBQ0osTUFBTSxLQUFLLENBQUMsMkJBQTJCLEtBQUssRUFBRSxDQUFDLENBQUE7UUFDakQsQ0FBQztJQUNILENBQUM7d0dBdENVLGlCQUFpQjs0RkFBakIsaUJBQWlCLGtIQ2I5QixzREFFTTs7NEZEV08saUJBQWlCO2tCQVI3QixTQUFTOytCQUNFLFVBQVUsY0FDUixJQUFJLFdBQ1AsRUFBRTt3REFVRixJQUFJO3NCQUFaLEtBQUs7Z0JBS0csT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGVjayB9IGZyb20gJy4uLy4uL21vZGVscy9kZWNrJztcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uL21vZGVscy9jYXJkJztcclxuaW1wb3J0IHsgRmFjZVN0YXRlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2VudW1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWNhcmQnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1jYXJkcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL25neC1jYXJkcy5jb21wb25lbnQuY3NzJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5neENhcmRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAvKipcclxuICAgKiBSZXF1aXJlZCBwYXJhbWV0ZXIgdG8gc3BlY2lmeSBhbiBpbnN0YW5jZSBvZiBhIGNhcmQuXHJcbiAgICovXHJcbiAgQElucHV0KCkgY2FyZCE6IENhcmQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wdGlvbmFsIHBhcmFtZXRlciB0byByZWZlcmVuY2UgYSBEZWNrIGluc3RhbmNlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRlY2tSZWY6IERlY2sgfCB1bmRlZmluZWQ7XHJcblxyXG4gIGZpbGVOYW1lOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlSW1hZ2VTb3VyY2UodGhpcy5jYXJkLnN0YXRlKTtcclxuICAgIHRoaXMuY2FyZC5mbGlwcGVkLnN1YnNjcmliZSgobmV3RmFjZVN0YXRlKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlSW1hZ2VTb3VyY2UobmV3RmFjZVN0YXRlKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FyZC5mbGlwcGVkLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJbWFnZVNvdXJjZShzdGF0ZTogRmFjZVN0YXRlKSB7XHJcbiAgICBpZiAoc3RhdGUgPT0gRmFjZVN0YXRlLkZhY2VEb3duKSB7XHJcbiAgICAgIHRoaXMuZmlsZU5hbWUgPSBgL2Fzc2V0cy9jYXJkcy9SMS5zdmdgO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc3RhdGUgPT0gRmFjZVN0YXRlLkZhY2VVcCkge1xyXG4gICAgICB0aGlzLmZpbGVOYW1lID0gYC9hc3NldHMvY2FyZHMvJHt0aGlzLmNhcmQuc2hvcnRoYW5kTmFtZSgpfS5zdmdgO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRocm93IEVycm9yKGBVbmtub3duIENhcmQgRmFjZVN0YXRlOiAke3N0YXRlfWApXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXY+XHJcbiAgICA8aW1nIHNyYz1cInt7IGZpbGVOYW1lIH19XCIvPlxyXG48L2Rpdj4iXX0=