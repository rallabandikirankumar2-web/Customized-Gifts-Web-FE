import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-couples',
  templateUrl: './couples.component.html',
  styleUrls: ['./couples.component.css']
})
export class CouplesComponent  implements OnInit{

  products: any;
  cartProducts: any;

constructor(private userService : UserService){
  
  this.cartProducts = [];

  this.products = [
    {id:3001, name:"String Art",price:799.00,  imgsrc:"assets/Images/c21.jpeg"},
    {id:3002, name:"LED Bottle Lamp", price:1199.00,  imgsrc:"assets/Images/c31.jpeg"},
    {id:3003, name:"Mug",  price:399.00,  imgsrc:"assets/Images/c23.jpeg"},
    {id:3004, name:"Couple Combo",  price:1299.00,  imgsrc:"assets/Images/c25.jpeg"},
    {id:3005, name:"Combo For Women", price:1899.00, imgsrc:"assets/Images/c28.jpeg"},
    {id:3006, name:"LED Bottle Lamp",    price:1199.00,  imgsrc:"assets/Images/c29.jpeg"},
    {id:3007, name:"Wallet Combo", price:1299.00, imgsrc:"assets/Images/c22.jpeg"},
    {id:3008, name:"LED Bottle Lamp", price:1199.00, imgsrc:"assets/Images/c32.jpeg"},
    {id:3009, name:"Photo puzzle", price:799.00, imgsrc:"assets/Images/c33.jpeg"},
    {id:3010, name:"Wallet", price:299.00, imgsrc:"assets/Images/c34.jpeg"},
    {id:3011, name:"Photo Lamp", price:999.00, imgsrc:"assets/Images/c35.jpeg"},
    {id:3012, name:"Mugs For Couples", price:699.00, imgsrc:"assets/Images/c38.jpeg"},
    {id:3013, name:"Mugs For Couples", price:699.00, imgsrc:"assets/Images/c39.jpeg"},
    {id:3014, name:"Glass Bottle Combo", price:499.00, imgsrc:"assets/Images/c40.jpeg"},
    {id:3015, name:"Glass Bottle Combo", price:499.00, imgsrc:"assets/Images/c41.jpeg"},
    {id:3016, name:"Secrete Box", price:499.00, imgsrc:"assets/Images/c42.jpeg"},
    {id:3017, name:"Photo Frame", price:799.00, imgsrc:"assets/Images/c43.jpeg"},
    {id:3018, name:"LED Frame", price:599.00, imgsrc:"assets/Images/c44.jpeg"},
    {id:3019, name:"Chocolate Box", price:799.00, imgsrc:"assets/Images/b16.jpg"},
    {id:3020, name:"Couple Diary", price:499.00, imgsrc:"assets/Images/c47.jpeg"},
    {id:3021, name:"Couple Diary", price:499.00, imgsrc:"assets/Images/c48.jpeg"},
    {id:3022, name:"Couple Diary", price:499.00, imgsrc:"assets/Images/c49.jpeg"},
    {id:3023, name:"Photo Frame", price:799.00, imgsrc:"assets/Images/c51.jpeg"},
    {id:3024, name:"Bottle Combo", price:499.00, imgsrc:"assets/Images/c54.jpeg"},
    {id:3025, name:"Photo Frame", price:399.00, imgsrc:"assets/Images/c55.jpeg"},
    {id:3026, name:"LED Keychain", price:499.00, imgsrc:"assets/Images/c56.jpeg"},
    {id:3027, name:"LED Photo Collection", price:499.00, imgsrc:"assets/Images/c58.jpeg"},
    {id:3028, name:"LED Photo Collection", price:499.00, imgsrc:"assets/Images/c59.jpeg"},
    {id:3029, name:"Photo Frame", price:599.00, imgsrc:"assets/Images/c61.jpeg"},
    {id:3030, name:"Scrap Book Key Chain", price:599.00, imgsrc:"assets/Images/c62.jpeg"},
    {id:3029, name:"Photo Frame", price:799.00, imgsrc:"assets/Images/c63.jpeg"},
    {id:3029, name:"Photo Frame", price:899.00, imgsrc:"assets/Images/c64.jpeg"},
    {id:3029, name:"Couple Photo Frame", price:1199.00, imgsrc:"assets/Images/c65.jpeg"},
    {id:3029, name:"Couplde Photo Frame", price:999.00, imgsrc:"assets/Images/c68.jpeg"},
    {id:3029, name:"LED Photo Frame", price:999.00, imgsrc:"assets/Images/c71.jpeg"},
    {id:3029, name:"Pencil Carving Frame", price:899.00, imgsrc:"assets/Images/c72.jpeg"},
    {id:3029, name:"Photo Frame", price:799.00, imgsrc:"assets/Images/c73.jpeg"},
    {id:3029, name:"Pencil Carving", price:799.00, imgsrc:"assets/Images/c74.jpeg"},
    {id:3029, name:"Pencil Carving", price:799.00, imgsrc:"assets/Images/c75.jpeg"},
    {id:3029, name:"Heart Photo Frame", price:1199.00, imgsrc:"assets/Images/n1.jpeg"},
    {id:3029, name:"Clock Photo Frame", price:1199.00, imgsrc:"assets/Images/n13.jpeg"},
    {id:3029, name:"Clock Photo Frame", price:1199.00, imgsrc:"assets/Images/n14.jpeg"},
    {id:3029, name:"Clock Photo Frame", price:1199.00, imgsrc:"assets/Images/n15.jpeg"},
    {id:3029, name:"Clock Photo Frame", price:1199.00, imgsrc:"assets/Images/n17.jpeg"},
    {id:3029, name:"Clock Photo Frame", price:1199.00, imgsrc:"assets/Images/n18.jpeg"}


    





  
  ];
  this.products.forEach((a:any) => {
    Object.assign(a,{quantity:1,total:a.price});
    
  });

}




  ngOnInit(): void {
  
  }
  addToCart(product:any){
    this.userService.addToCart(product);
  }



}
