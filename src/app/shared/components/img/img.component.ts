import {Component, Input} from '@angular/core';

@Component({
  selector: 'shared-img',
  imports: [],
  template: `
  <div class="container-fluid p-0">
    <img [src]="url"
         class="img-fluid"
         alt="..."
         [style.width]="w"
         [style.height]="h">
  </div>
  `,
})
export class ImgComponent {

  @Input() url: string = " ";
  @Input() w: string = " ";
  @Input() h: string = " ";

}
