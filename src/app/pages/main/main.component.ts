import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit  {
 imageWidth:number=50;
 imageMargin: number=2;
 showImage: boolean=false;
  
  _listFilter:any;
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter=value;
    this.filteredProducts= this.listFilter ? this.performFilter(this.listFilter) :this.products;
  }

  filteredProducts: Iproduct[];
  products: Iproduct[]=[
    {
      "productId":2,
      "productName":"iphone12",
      "productCode":"TBX-0048",
      "description":"ble bler ble",
      "price":32.99,
      "Rating":4.2,
      "imageUrl": "assets/images/ip12pro.png",
    },
  
    {
      "productId":5,
      "productName":"iphone13",
      "productCode":"TBX-0049",
      "description":"ble bler ble",
      "price":1000,
      "Rating":4.5,
      "imageUrl": "assets/images/ip11.png",
    },
  
    {
      "productId":3,
      "productName":"iphone12",
      "productCode":"TBX-0050",
      "description":"ble bler ble",
      "price":899,
      "Rating":4.5,
      "imageUrl": "assets/images/ip12.png",
    }, {
      "productId":4,
      "productName":"Airpods",
      "productCode":"TBX-0051",
      "description":"ble bler ble",
      "price":99.99,
      "Rating":4.5,
      "imageUrl": "assets/images/airpods.png",
    }, {
      "productId":6,
      "productName":"headphone",
      "productCode":"JBL-0049",
      "description":"ble bler ble",
      "price":89.99,
      "Rating":4.5,
      "imageUrl": "assets/images/c100.png",
    }, {
      "productId":7,
      "productName":"Bluethooth Spiker",
      "productCode":"JBL-Flip5",
      "description":"ble bler ble",
      "price":100,
      "Rating":4.5,
      "imageUrl": "assets/images/flip5.png",
    }, {
      "productId":8,
      "productName":"Sumsung-s20 ultra",
      "productCode":"TBX-0049",
      "description":"ble bler ble",
      "price":1000,
      "Rating":4.5,
      "imageUrl": "assets/images/s20.png",
    }, {
      "productId":9,
      "productName":"Sumsung s20",
      "productCode":"TBX-0049",
      "description":"ble bler ble",
      "price":2000,
      "Rating":4.5,
      "imageUrl": "assets/images/s20u.png",
    }, {
      "productId":10,
      "productName":"buds headphone",
      "productCode":"TBX-0049",
      "description":"ble bler ble",
      "price":99.99,
      "Rating":4.5,
      "imageUrl": "assets/images/buds.png",
    }, {
      "productId":11,
      "productName":"iphone13",
      "productCode":"TBX-0049",
      "description":"ble bler ble",
      "price":99.99,
      "Rating":4.5,
      "imageUrl": "assets/images/ip12.png",
    }, {
      "productId":12,
      "productName":"iphone13",
      "productCode":"TBX-0049",
      "description":"ble bler ble",
      "price":99.99,
      "Rating":4.5,
      "imageUrl": "assets/images/ip12.png",
    },
  ];
   constructor(){
     this.filteredProducts=this.products;
     this.listFilter= '';
   }

performFilter(filterBy: string ): Iproduct[]{
filterBy=filterBy.toLocaleLowerCase();
return this.products.filter((product:Iproduct)=>
product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}
 
  toggleImage(): void
  {
    this.showImage= !this.showImage;
  }

ngOnInit():void{
  console.log()
}

}
   