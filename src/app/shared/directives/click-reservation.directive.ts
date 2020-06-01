import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appClickReservation]'
})
export class ClickReservationDirective {

  constructor(el: ElementRef) {
    el.nativeElement.addEventListener('click', this.onClick.bind(this));
  }

  onClick(event) {
    console.log(event);
  }

}
