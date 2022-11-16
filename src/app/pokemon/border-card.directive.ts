import { Directive,ElementRef,HostListener, Input } from '@angular/core';//importation de la méthode HostListener

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {
  private initialColor: string = '#f5f3f5';
  private defaultColor: string = '#009688';
  private defaultheight: number = 180;

  constructor(private el: ElementRef) { 

    this.setBorder(this.initialColor);
    this.setHeight(this.defaultheight);
  }

  @Input('pkmnBorderCard') backgroundColor: string;

  @HostListener('mouseover') onMouseOver(){
    this.setBorder(this.backgroundColor || this.defaultColor);
  }

  @HostListener('mouseout') onMouseOut(){
    this.setBorder(this.initialColor);//retour à la bordure initial
  }

  private setBorder(color: string){
    let border = 'solid 4px' + color;
    this.el.nativeElement.style.border = border;
  }

  private setHeight(height: number){
    this.el.nativeElement.style.height = height + 'px';
  }

}
