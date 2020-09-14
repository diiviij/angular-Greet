import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <h2>Welcome{{name}}
</h2>
 <button (click)="onClick($event)">Greet</button>
 {{greeting}}
 `,
  styles: [`h2 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
public name ="codevolution";
public greeting="";
constructor(){}
ngOnit(){

}
onClick(event){
    console.log(event);
    this.greting= event.type;
}

}
