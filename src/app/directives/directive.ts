import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[modifyText]'
})
export class ModifyTextDirective {

    @Input('modifyText') variable:any;

    constructor(el: ElementRef) {
       console.log(this.variable);
    }
}
