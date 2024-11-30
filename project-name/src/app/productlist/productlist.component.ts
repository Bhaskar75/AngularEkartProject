import { Component,ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { NgFor,NgIf } from '@angular/common';
import { ProductListNewComponent } from "./product-list-new/product-list-new.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { FeaturedBrandsComponent } from "./featured-brands/featured-brands.component";

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [SearchComponent, NgFor, NgIf, ProductListNewComponent, ProductDetailComponent, FeaturedBrandsComponent],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css',
})
export class ProductlistComponent {

  searchText:string = ' ';

  @ViewChild(ProductListNewComponent) productListComponent : ProductListNewComponent;

  setSearchText(event: any): void{
      this.searchText = event ;
  }
}
