import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductRepository } from 'src/app/models/product.repository';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // @Input() prod: Product; //içeri koyuyor yani dışardan alıyor
  // @Output() unSelectEvent = new EventEmitter <string>(); //dışarı çıkarıyor (productlist'e) yani içerden veriyor
  product : Product | undefined
  productRepository : ProductRepository
  
  constructor(  private route : ActivatedRoute) {
    this.productRepository = new ProductRepository();
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      // console.log(params["productId"])
      const id = params["productId"];
      this.product = this.productRepository.getProductById(id);
    })
  }

  // unselectProduct(){
  //   this.unSelectEvent.emit('test');
  // }

}
