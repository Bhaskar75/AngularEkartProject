import { Component, EventEmitter, input, Output, ViewChild,ElementRef } from '@angular/core';
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

  @ViewChild('searchInput',{static:true}) searchInputEl: ElementRef;
  //@ViewChild('searchInput',{static:false}) searchInputEl: ElementRef; => Search Input element will not be assigned initially
  //whwnever there will be any change only then it will be valled

  updateSearchText() {
      this.searchText = this.searchInputEl.nativeElement.value;
      this.SearchTextChanged.emit(this.searchText);
      //alert(inputEL.value);
  }

  onSearchTextChanged() {
      this.SearchTextChanged.emit(this.searchText);
  }
}
