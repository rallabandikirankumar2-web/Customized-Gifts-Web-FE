import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-essentials',
  templateUrl: './essentials.component.html',
  styleUrls: ['./essentials.component.css']
})
export class EssentialsComponent implements OnInit {

  products: any;
  cartProducts: any;

constructor(private userService : UserService){
  
  this.cartProducts = [];

  this.products = [
    {id:2001, name:"E Combo",price:799.00,  imgsrc:"assets/Images/e1.jpeg"},
    {id:2002, name:"E Combo", price:799.00,  imgsrc:"assets/Images/e2.jpeg"},
    {id:2003, name:"Pen Combo", price:299.00,  imgsrc:"assets/Images/e3.jpeg"},
    {id:2004, name:"E Combo", price:799.00,  imgsrc:"assets/Images/e4.jpeg"},
    {id:2005, name:"Bottle Combo", price:699.00,  imgsrc:"assets/Images/e5.jpeg"},
    {id:2006, name:"Flask", price:299.00,  imgsrc:"assets/Images/e6.jpeg"},
    {id:2007, name:"Calender", price:299.00,  imgsrc:"assets/Images/e7.jpeg"},
    {id:2008, name:"Calender", price:299.00,  imgsrc:"assets/Images/e8.jpeg"},
    {id:2009, name:"Calender", price:299.00,  imgsrc:"assets/Images/e9.jpeg"}
    

    





  
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
