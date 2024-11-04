import { Component } from '@angular/core';

@Component({
  selector: 'top-header',
  //selector: 'top-header', //Treats the selector as a custom HTML element.
  //selector: '#top-header', //Treats the selector as a id.
  //selector: '[top-header]',//Treats the selector as an attribute applied to an existing HTML element.
  //selector: '.top-header',// Treats the selector as a class applied to an existing HTML element.
  standalone: true,
  imports: [],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.css'
})
export class TopHeaderComponent {

}
