import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {} from 'src/app/product.model';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  } 

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  addCart(){
    console.log("Añadir al carrito"); 
    this.productClicked.emit(this.product.id); 
  }

}
