import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-homedecors',
  templateUrl: './homedecors.component.html',
  styleUrls: ['./homedecors.component.css']
})
export class HomedecorsComponent implements OnInit {

  products: any;
  cartProducts: any;



 constructor(private userService : UserService){
  
  this.cartProducts = [];

  this.products = [
    {id:6001, name:"Kiddy Bank",price:399.00,  imgsrc:"assets/Images/h1.jpeg"},
    {id:6002, name:"Calender", price:299.00,  imgsrc:"assets/Images/h20.jpeg"},
    {id:6003, name:"Cusion",  price:499.00,  imgsrc:"assets/Images/h19.jpeg"},
    {id:6004, name:"Door Plaque",  price:799.00,  imgsrc:"assets/Images//h4.jpeg"},
    {id:6005, name:"Door Plaque", price:1199.00, imgsrc:"assets/Images/h18.jpeg"},
    {id:6006, name:"Door Plaque",    price:799.00,  imgsrc:"assets/Images/h6.jpeg"},
    {id:6007, name:"Wall Hanging", price:599.00, imgsrc:"assets/Images/h17.jpeg"},
    {id:6008, name:"Door Plaque", price:799.00, imgsrc:"assets/Images/h8.jpeg"},
    {id:6009, name:"LED Lamp", price:599.00, imgsrc:"assets/Images/h16.jpeg"},
    {id:6010, name:"Wall Clock", price:1199.00, imgsrc:"assets/Images/h14.jpeg"},
    {id:6011, name:"Door Plaque", price:799.00, imgsrc:"assets/Images/h11.jpeg"},
    {id:6012, name:"Door Plaque", price:799.00, imgsrc:"assets/Images/h12.jpeg"},
    {id:6013, name:"Name Locket", price:499.00, imgsrc:"assets/Images/h13.jpeg"},
    {id:6014, name:"Door Plaque", price:699.00, imgsrc:"assets/Images/h10.jpeg"},
    {id:6015, name:"Wall Hanging", price:1199.00, imgsrc:"assets/Images/h15.jpeg"},
    {id:6016, name:"Door Plaque", price:799.00, imgsrc:"assets/Images/h9.jpeg"},
    {id:6017, name:"Door Plaque", price:799.00, imgsrc:"assets/Images/h5.jpeg"},
    {id:6018, name:"Door Plaque", price:799.00, imgsrc:"assets/Images/h7.jpeg"},
    {id:6019, name:"Door Plaque", price:799.00, imgsrc:"assets/Images/h3.jpeg"},
    {id:6020, name:"Wall Hanging", price:1199.00, imgsrc:"assets/Images/h2.jpeg"},
    {id:6021, name:"Door Plaque", price:499.00, imgsrc:"assets/Images/n8.jpeg"}
    
  
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


