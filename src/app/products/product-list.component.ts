import { Component} from '@angular/core';

@Component({
  selector : 'pm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent{
  pageTitle = 'Product List';
  listFilter  = 'cart';
  
  products : any[] = [
  {
    "productId": 1,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2019",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.9522,
    "starRating": 3.2,
    "imageUrl": "assets/images/leaf_rake.png"
  },
  {
    "productId": 2,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2019",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.99222,
    "starRating": 4.2,
    "imageUrl": "assets/images/garden_cart.png"
  }
  ];

  performFilter(filterBy: string): any[] {
    this.listFilter = filterBy;
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: any) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
