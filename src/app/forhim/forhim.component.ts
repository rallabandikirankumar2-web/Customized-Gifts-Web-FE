import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forhim',
  templateUrl: './forhim.component.html',
  styleUrls: ['./forhim.component.css']
})
export class ForhimComponent implements OnInit {

  products: any;
  cartProducts: any;



 constructor(private userService : UserService){
  
  this.cartProducts = [];

  this.products = [
    {id:5001, name:"Men's Combo",price:799.00,  imgsrc:"assets/Images/c24.jpeg"},
    {id:5002, name:"Combo Box", price:599.00,  imgsrc:"assets/Images/c26.jpeg"},
    {id:5003, name:"Name Locket",  price:399.00,  imgsrc:"assets/Images/c30.jpeg"},
    {id:5004, name:"Wallet",  price:399.00,  imgsrc:"assets/Images/c34.jpeg"},
    {id:5005, name:"Glass carving", price:599.00, imgsrc:"assets/Images/c36.jpeg"},
    {id:5006, name:"Wooden Carving",    price:399.00,  imgsrc:"assets/Images/c52.jpeg"},
    {id:5007, name:"Glass Carving", price:599.00, imgsrc:"assets/Images/c37.jpeg"},
    {id:5008, name:"LED Lamp", price:799.00, imgsrc:"assets/Images/c57.jpeg"},
    {id:5009, name:"Diary", price:499.00, imgsrc:"assets/Images/c60.jpeg"},
    {id:5010, name:"Men's combo", price:799.00, imgsrc:"assets/Images/c66.jpeg"},
    {id:5011, name:"Pencil Carving Frame", price:499.00, imgsrc:"assets/Images/c77.jpeg"},
    {id:5012, name:"Combo", price:599.00, imgsrc:"assets/Images/c90.jpeg"},
    {id:5013, name:"Combo", price:699.00, imgsrc:"assets/Images/c94.jpeg"},
    {id:5014, name:"Wooden Carving", price:699.00, imgsrc:"assets/Images/c96.jpeg"},
    {id:5015, name:"Mug", price:399.00, imgsrc:"assets/Images/c23.jpeg"},
    {id:5016, name:"Wallet Combo", price:799.00, imgsrc:"assets/Images/f1.jpeg"},
    {id:5017, name:"Pen Combo", price:299.00, imgsrc:"assets/Images/f2.jpeg"},
    {id:5018, name:"Wallet Combo", price:499.00, imgsrc:"assets/Images/f4.jpeg"},
    {id:5019, name:"Wallet Combo", price:699.00, imgsrc:"assets/Images/f5.jpeg"},
    {id:5020, name:"Wallet", price:299.00, imgsrc:"assets/Images/f6.jpeg"},
    {id:5021, name:"Wallet Combo", price:699.00, imgsrc:"assets/Images/f7.jpeg"},
    {id:5022, name:"Couple Frame", price:499.00, imgsrc:"assets/Images/n9.jpeg"}

    
  
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


