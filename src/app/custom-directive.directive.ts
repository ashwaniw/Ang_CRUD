import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private eleRef :  ElementRef) { 
    //console.log(eleRef);
    //eleRef.nativeElement.style.backgroundColor = 'red';
  }




}
