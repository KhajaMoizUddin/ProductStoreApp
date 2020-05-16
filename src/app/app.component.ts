import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Products Store App';
  products: IProduct[] = [];
  Width: number = 50;
  Margin: number = 2;
  showImage = false;
  searchByName = '';
  searchByPrice;

  ngOnInit(){
    this.products = this.getProducts();
  }

  onImageBtnClick(){
   this.showImage = !this.showImage;
  }

  showBackImage(event, imagepath) {
    debugger;
    event.currentTarget.src  = event.currentTarget.baseURI + imagepath;
  }

  showFrontImage(event, imagepath) {
    event.currentTarget.src  = event.currentTarget.baseURI + imagepath;
  }
 getProducts(): IProduct[] {
   return [
     {
       "ProductId": 1001,
       "ProductName": 'Nike',
       "ProductCode": 'NIK-02-462',
       "releaseDate": 'March 15, 1960',
       "Price": 1200,
       "Description":'Nike Brand',
       "Quantity": 50,
       "FrontImageUrl":'assets/Images/nikefront.jpg',
       "BackImageUrl":'assets/Images/nikeback.jpg'
     },
     {
       "ProductId": 1002,
       "ProductName": 'Adidas',
       "ProductCode":'ADI-002-451',
       "releaseDate": 'April 1, 1890',
       "Price": 1500,
       "Description": "Adidas Brand",
       "Quantity": 80,
       "FrontImageUrl":'assets/Images/adidasfront.jpg',
        "BackImageUrl" : 'assets/Images/adidasback.jpg'
     },
     {
       "ProductId":1003,
       "ProductName": 'UCB',
       "ProductCode": 'UCB-462-001',
       "releaseDate": 'July 12, 1860',
       "Price":680,
       "Description": 'UCB Brand',
       "Quantity": 140,
       "FrontImageUrl": 'assets/Images/ucbfront.jpg',
       "BackImageUrl" : 'assets/Images/ucbback.jpg'
     },
     {
      "ProductId":1004,
      "ProductName": 'PUMA',
      "ProductCode": 'PMA-860-007',
      "releaseDate": 'April 12, 1850',
      "Price":500,
      "Description": 'PUMA Brand',
      "Quantity": 150,
      "FrontImageUrl": 'assets/Images/pumafront.jpg',
      "BackImageUrl":'assets/Images/pumaback.jpg'
     }
   ]
 }
}
