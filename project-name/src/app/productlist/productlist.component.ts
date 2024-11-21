import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { NgFor } from '@angular/common';
import { ProductListNewComponent } from "./product-list-new/product-list-new.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [SearchComponent, NgFor, ProductListNewComponent, ProductDetailComponent],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css',
})
export class ProductlistComponent {
  addToCart: number = 0;
  name = 'Bhaskar Manna';
  listOfString:string[]=['Bhaskar','Kalyan','Manna'];
  product = {
    name: 'iPhone X',
    price: 789,
    color: 'Black',
    discount: 8.5,
    inStock: 5,
    pImage: 'iphone.webp',
  };

  getDiscountedPrice() {
    return this.product.price * (1 - this.product.discount / 100);
  }
  onNameChange(event: any) {
    this.name = event.target.value;
  }
  decrementCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }
  incrementCartValue() {
    if (this.addToCart < this.product.inStock) {
      this.addToCart++;
    }
  }

  searchText:string = ' ';

  setSearchText(event: any): void{
      this.searchText = event ;
  }
}
