import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-valentines',
  templateUrl: './valentines.component.html',
  styleUrls: ['./valentines.component.css']
})
export class ValentinesComponent implements OnInit{

  products: any;
  cartProducts: any;



 constructor(private userService : UserService){
  
  this.cartProducts = [];

  this.products = [
    {id:10001, name:"Photo Frame",price:999.00,  imgsrc:"assets/Images/n2.jpeg"},
    {id:10002, name:"String Frame", price:499.00,  imgsrc:"assets/Images/n20.jpeg"},
    {id:10003, name:"String Frame",  price:499.00,  imgsrc:"assets/Images/n21.jpeg"},
    {id:10004, name:"String Frame",  price:499.00,  imgsrc:"assets/Images/n24.jpeg"},
    {id:10005, name:"Wine Glasses", price:499.00, imgsrc:"assets/Images/c81.jpeg"},
    {id:10006, name:"Heart Cusion",    price:599.00,  imgsrc:"assets/Images/c82.jpeg"},
    {id:10007, name:"Name Frame", price:599.00, imgsrc:"assets/Images/c83.jpeg"},
    {id:10008, name:"LED Globe", price:799.00, imgsrc:"assets/Images/c84.jpeg"},
    {id:10009, name:"LED Globe", price:799.00, imgsrc:"assets/Images/c85.jpeg"},
    {id:10010, name:"LED Globe", price:799.00, imgsrc:"assets/Images/c86.jpeg"},
    {id:10011, name:"String Art", price:499.00, imgsrc:"assets/Images/c87.jpeg"},
    {id:10012, name:"Lighting Photo Collection", price:399.00, imgsrc:"assets/Images/c59.jpeg"},
    {id:10013, name:"Family Tree Frame", price:799.00, imgsrc:"assets/Images/c92.jpeg"},
    {id:10014, name:"Wooden Carving Combo", price:999.00, imgsrc:"assets/Images/c93.jpeg"},
    {id:10015, name:"Wooden Carving", price:499.00, imgsrc:"assets/Images/c95.jpeg"},
    {id:10016, name:"LED Photo Frame", price:699.00, imgsrc:"assets/Images/c97.jpeg"},
    {id:10017, name:"Calender", price:299.00, imgsrc:"assets/Images/c98.jpeg"},
    {id:10018, name:"Pocket Diary", price:299.00, imgsrc:"assets/Images/c99.jpeg"},
    {id:10019, name:"Pocket Diary", price:299.00, imgsrc:"assets/Images/c100.jpeg"},
    {id:10020, name:"Pocket Diary", price:299.00, imgsrc:"assets/Images/c101.jpeg"},
    {id:10021, name:"Flask Combo", price:599.00, imgsrc:"assets/Images/c102.jpeg"},
    {id:10022, name:"Flask Combo", price:599.00, imgsrc:"assets/Images/c103.jpeg"},
    {id:10023, name:"Couple Combo", price:499.00, imgsrc:"assets/Images/c104.jpeg"},
    {id:10024, name:"Couple Combo", price:499.00, imgsrc:"assets/Images/c105.jpeg"},
    {id:10025, name:"Wallet", price:299.00, imgsrc:"assets/Images/c106.jpeg"},
    {id:10026, name:"LED Frame", price:699.00, imgsrc:"assets/Images/c107.jpeg"}

    
  
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



