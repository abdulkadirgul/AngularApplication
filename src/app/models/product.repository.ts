import { Product } from "./product";

export class ProductRepository {
    private products:Product[] = [
        {
       id: 1,
       name:"Iphone 15 Pro",
       imageUrl:"71T5NVOgbpL._SL1500_.jpg",
       price:20000,
       isActive : true,
       description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit illo, voluptatem sit excepturi cumque deserunt numquam nemo quaerat officiis?"
     },{
       id: 2,
       name:"Iphone 16 Pro",
       imageUrl:"71T5NVOgbpL._SL1500_.jpg",
       price:26000,
       isActive : true,
       description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit illo, voluptatem sit excepturi cumque deserunt numquam nemo quaerat officiis?"
     },
     {
       id: 3,
       name:"Iphone 17 Pro",
       imageUrl:"71T5NVOgbpL._SL1500_.jpg",
       price:26000,
       isActive : true,
       description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit illo, voluptatem sit excepturi cumque deserunt numquam nemo quaerat officiis?"
     }
   ];

   
getProducts() 
{
  return this.products.filter(p=>p.isActive);
}

getProductById(id:number) : Product | undefined 
{
  return this.products.find(p=>p.id == id);
}
}