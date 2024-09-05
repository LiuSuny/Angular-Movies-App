import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyCustomIf]'
})
export class MyCustomIfDirective {

  constructor(private templateRef: TemplateRef<any>,
   private viewContainer: ViewContainerRef){}

    @Input() set appMyCustomIf(condition: boolean){
      // if(condition){
      //   this.viewContainer.createEmbeddedView(this.templateRef)
      // }
      // else{
      //   this.viewContainer.clear();
      // }
       condition ? this.viewContainer.createEmbeddedView(this.templateRef)
       :this.viewContainer.clear();

    }
  
        

}
