import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repository';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  products: Product[];
  selectedProduct :Product | null ;
  productRepository: ProductRepository;
  constructor() {

    this.productRepository = new ProductRepository(); 
    this.products = this.productRepository.getProducts();

  }

  ngOnInit(): void {
  }

  selectProduct(product : Product){
      this.selectedProduct = product;
  }
  unselectProduct(message:string){
    console.log(message)
    this.selectedProduct = null;
}

  // productList = ["ipHone9","ipHone8"];

  // product = {                                         ==> product.repository.ts içine taşındı ve product.ts içerisindeki interface aracılığıyla propertyleri aktarıldı.
  //   Id: 1,
  //   name:"Iphone 15 Pro",
  //   imageUrl:"71T5NVOgbpL._SL1500_.jpg",
  //   price:20000,
  //   isActive : true,
  //   description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit illo, voluptatem sit excepturi cumque deserunt numquam nemo quaerat officiis?"
  // }

//   private products:Product[] = [
//      {
//     id: 1,
//     name:"Iphone 15 Pro",
//     imageUrl:"71T5NVOgbpL._SL1500_.jpg",
//     price:20000,
//     isActive : true,
//     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit illo, voluptatem sit excepturi cumque deserunt numquam nemo quaerat officiis?"
//   },{
//     id: 2,
//     name:"Iphone 16 Pro",
//     imageUrl:"71T5NVOgbpL._SL1500_.jpg",
//     price:26000,
//     isActive : true,
//     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit illo, voluptatem sit excepturi cumque deserunt numquam nemo quaerat officiis?"
//   },
//   {
//     id: 3,
//     name:"Iphone 17 Pro",
//     imageUrl:"71T5NVOgbpL._SL1500_.jpg",
//     price:26000,
//     isActive : true,
//     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit illo, voluptatem sit excepturi cumque deserunt numquam nemo quaerat officiis?"
//   }
// ];


// getProducts() 
// {
//   return this.products.filter(p=>p.isActive);
// }

// getProductById(id:number) : Product | undefined 
// {
//   return this.products.find(p=>p.id == id);
// }

}
