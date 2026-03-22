import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css']
})
export class WeddingComponent implements OnInit{

  products: any;
  cartProducts: any;



 constructor(private userService : UserService){
  
  this.cartProducts = [];

  this.products = [
    {id:11001, name:"LED Bottle Lamp",price:799.00,  imgsrc:"assets/Images/m1.jpeg"},
    {id:11002, name:"Pencil Carving", price:1299.00,  imgsrc:"assets/Images/m2.jpeg"},
    {id:11003, name:"Door Plaque",  price:699.00,  imgsrc:"assets/Images/m24.jpeg"},
    {id:11004, name:"Hoop Frame",  price:1199.00,  imgsrc:"assets/Images/m4.jpeg"},
    {id:11005, name:"Wine Glasses", price:899.00, imgsrc:"assets/Images/m5.jpeg"},
    {id:11006, name:"Wax Statue",  price:2899.00,  imgsrc:"assets/Images/m6.jpeg"},
    {id:11007, name:"Photo Frame", price:1199.00, imgsrc:"assets/Images/m15.jpeg"},
    {id:11008, name:"Wedding badge", price:499.00, imgsrc:"assets/Images/m8.jpeg"},
    {id:11009, name:"Wall Hanging", price:499.00, imgsrc:"assets/Images/m17.jpeg"},
    {id:11010, name:"Moziac Frame", price:899.00, imgsrc:"assets/Images/m18.jpeg"},
    {id:11011, name:"Hoop Frame", price:1199.00, imgsrc:"assets/Images/m11.jpeg"},
    {id:11012, name:"Photo Frame", price:1299.00, imgsrc:"assets/Images/m12.jpeg"},
    {id:11013, name:"Heart Cusion", price:499.00, imgsrc:"assets/Images/m13.jpeg"},
    {id:11014, name:"Anniversary Frame", price:899.00, imgsrc:"assets/Images/m14.jpeg"},
    {id:11015, name:"Wedding Badge", price:399.00, imgsrc:"assets/Images/m7.jpeg"},
    {id:11016, name:"Heart Lamp", price:999.00, imgsrc:"assets/Images/m16.jpeg"},
    {id:11017, name:"Wedding badge", price:299.00, imgsrc:"assets/Images/m9.jpeg"},
    {id:11018, name:"Hoop Frame", price:1199.00, imgsrc:"assets/Images/m10.jpeg"},
    {id:11019, name:"Cusion", price:599.00, imgsrc:"assets/Images/m19.jpeg"},
    {id:11020, name:"String Art", price:1199.00, imgsrc:"assets/Images/m20.jpeg"},
    {id:11021, name:"LED Cusion", price:699.00, imgsrc:"assets/Images/m21.jpeg"},
    {id:11022, name:"Teddy Frame", price:799.00, imgsrc:"assets/Images/m22.jpeg"},
    {id:11023, name:"Wax Statue", price:1899.00, imgsrc:"assets/Images/m23.jpeg"},
    {id:11024, name:"Hoop Frame", price:1199.00, imgsrc:"assets/Images/m3.jpeg"},
    {id:11025, name:"Photo Collection", price:799.00, imgsrc:"assets/Images/n16.jpeg"},
    {id:11026, name:"Clock Frame", price:799.00, imgsrc:"assets/Images/n19.jpeg"}

    
  
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




