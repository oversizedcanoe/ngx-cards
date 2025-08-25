import { OnDestroy, OnInit } from '@angular/core';
import { Dice } from '../../models/dice';
import * as i0 from "@angular/core";
export declare class NgxDiceComponent implements OnInit, OnDestroy {
    /**
     * Required parameter to specify an instance of a die.
     */
    dice: Dice;
    fileName: string;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    updateImageSource(newValue: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxDiceComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxDiceComponent, "ngx-dice", never, { "dice": { "alias": "dice"; "required": false; }; }, {}, never, never, true, never>;
}
