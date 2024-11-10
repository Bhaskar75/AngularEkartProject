import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfStock: number = 0;

  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> =
    new EventEmitter<string>();

  selectedFilterRadoButton: string = 'All';

  OnselectedFilterRadioButtonChanged() {
    //as we are using Ngodel its a two way binding we are storing the value All, trur and false in selectedFilterRadoButton
    //console.log(this.selectedFilterRadoButton); //here displaying the value stored in selectedFilterRadoButton on change event
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadoButton); //using emit will raise the event emitter
  }
}
