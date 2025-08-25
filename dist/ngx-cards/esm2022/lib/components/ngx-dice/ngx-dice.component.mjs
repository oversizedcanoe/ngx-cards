import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class NgxDiceComponent {
    /**
     * Required parameter to specify an instance of a die.
     */
    dice;
    fileName = '';
    constructor() {
    }
    ngOnInit() {
        this.updateImageSource(this.dice.value);
        this.dice.rolled.subscribe((newValue) => {
            this.updateImageSource(newValue);
        });
    }
    ngOnDestroy() {
        this.dice.rolled.unsubscribe();
    }
    updateImageSource(newValue) {
        this.fileName = `/assets/dice/d${newValue}.png`;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: NgxDiceComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.12", type: NgxDiceComponent, isStandalone: true, selector: "ngx-dice", inputs: { dice: "dice" }, ngImport: i0, template: "<div>\r\n    <img src=\"{{ fileName }}\"/>\r\n</div>", styles: [":host{height:inherit;width:inherit}div{height:inherit;width:inherit}img{height:inherit;width:inherit;object-fit:contain}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: NgxDiceComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-dice', standalone: true, imports: [], template: "<div>\r\n    <img src=\"{{ fileName }}\"/>\r\n</div>", styles: [":host{height:inherit;width:inherit}div{height:inherit;width:inherit}img{height:inherit;width:inherit;object-fit:contain}\n"] }]
        }], ctorParameters: () => [], propDecorators: { dice: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRpY2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWNhcmRzL3NyYy9saWIvY29tcG9uZW50cy9uZ3gtZGljZS9uZ3gtZGljZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtY2FyZHMvc3JjL2xpYi9jb21wb25lbnRzL25neC1kaWNlL25neC1kaWNlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7QUFZcEUsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQjs7T0FFRztJQUNNLElBQUksQ0FBUTtJQUVyQixRQUFRLEdBQVcsRUFBRSxDQUFDO0lBRXRCO0lBQ0EsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxRQUFnQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFpQixRQUFRLE1BQU0sQ0FBQztJQUNsRCxDQUFDO3dHQXhCVSxnQkFBZ0I7NEZBQWhCLGdCQUFnQiw4RkNaN0Isc0RBRU07OzRGRFVPLGdCQUFnQjtrQkFSNUIsU0FBUzsrQkFDRSxVQUFVLGNBQ1IsSUFBSSxXQUNQLEVBQUU7d0RBU0YsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmFjZVN0YXRlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2VudW1zJztcclxuaW1wb3J0IHsgRGljZSB9IGZyb20gJy4uLy4uL21vZGVscy9kaWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWRpY2UnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1kaWNlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybDogJy4vbmd4LWRpY2UuY29tcG9uZW50LmNzcydcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3hEaWNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8qKlxyXG4gICAqIFJlcXVpcmVkIHBhcmFtZXRlciB0byBzcGVjaWZ5IGFuIGluc3RhbmNlIG9mIGEgZGllLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRpY2UhOiBEaWNlO1xyXG5cclxuICBmaWxlTmFtZTogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUltYWdlU291cmNlKHRoaXMuZGljZS52YWx1ZSk7XHJcbiAgICB0aGlzLmRpY2Uucm9sbGVkLnN1YnNjcmliZSgobmV3VmFsdWUpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVJbWFnZVNvdXJjZShuZXdWYWx1ZSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpY2Uucm9sbGVkLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJbWFnZVNvdXJjZShuZXdWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmZpbGVOYW1lID0gYC9hc3NldHMvZGljZS9kJHtuZXdWYWx1ZX0ucG5nYDtcclxuICB9XHJcbn1cclxuIiwiPGRpdj5cclxuICAgIDxpbWcgc3JjPVwie3sgZmlsZU5hbWUgfX1cIi8+XHJcbjwvZGl2PiJdfQ==