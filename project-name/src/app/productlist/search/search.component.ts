import { Component, EventEmitter, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchText: string = '';

  //Create an event
  @Output()
  SearchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  updateSearchText(inputEL:HTMLInputElement) {
      this.searchText = inputEL.value;
      this.SearchTextChanged.emit(this.searchText);
      //alert(inputEL.value);
  }

  onSearchTextChanged() {
      this.SearchTextChanged.emit(this.searchText);
  }
}
