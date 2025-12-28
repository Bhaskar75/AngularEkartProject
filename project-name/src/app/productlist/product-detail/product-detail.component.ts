import { NgIf, NgFor } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductlistComponent } from '../productlist.component';
import { ProductListNewComponent } from '../product-list-new/product-list-new.component';
import { SetBackground } from '../../CustomDirectives/SetBackground.directive';
import { AppHoverDirective } from "../../CustomDirectives/app-hover.directive";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, NgFor, SetBackground, AppHoverDirective],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  @Input() productListComp: ProductListNewComponent = undefined;
  product: Product;

  ngOnInit() {
    this.product = this.productListComp.selectedProduct;
  }
}
