import {Component, Input} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'wb-loading-spinner',
  template: '<img *ngIf="loading" src="../../assets/images/loading.gif" />'
})
export class LoadingSpinnerComponent {
  @Input() loading: boolean;
}
