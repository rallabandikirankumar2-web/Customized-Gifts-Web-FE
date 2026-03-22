import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forher',
  templateUrl: './forher.component.html',
  styleUrls: ['./forher.component.css']
})
export class ForherComponent  implements OnInit{

  products: any;
  cartProducts: any;



 constructor(private userService : UserService){
  
  this.cartProducts = [];

  this.products = [
    {id:4001, name:"Combo",price:899.00,  imgsrc:"assets/Images/c28.jpeg"},
    {id:4002, name:"Lightings", price:499.00,  imgsrc:"assets/Images/c69.jpeg"},
    {id:4003, name:"Mug",  price:399.00,  imgsrc:"assets/Images/c45.jpeg"},
    {id:4004, name:"Heart Photo Frame",  price:499.00,  imgsrc:"assets/Images/c25.jpeg"},
    {id:4005, name:"Wooden Carving", price:499.00, imgsrc:"assets/Images/c46.jpeg"},
    {id:4006, name:"Wooden Carving",    price:399.00,  imgsrc:"assets/Images/c53.jpeg"},
    {id:4007, name:"Photo Frame", price:899.00, imgsrc:"assets/Images/c67.jpeg"},
    {id:4008, name:"Mug", price:299.00, imgsrc:"assets/Images/c27.jpeg"},
    {id:4009, name:"Wooden Carving", price:499.00, imgsrc:"assets/Images/c76.jpeg"},
    {id:4010, name:"Photo scrap Book", price:599.00, imgsrc:"assets/Images/c78.jpeg"},
    {id:4011, name:"Photo Frame", price:499.00, imgsrc:"assets/Images/c80.jpeg"},
    {id:4012, name:"Ring", price:299.00, imgsrc:"assets/Images/c88.jpeg"},
    {id:4013, name:"LED Photo Lamp", price:599.00, imgsrc:"assets/Images/c89.jpeg"},
    {id:4014, name:"Wooden Carving", price:499.00, imgsrc:"assets/Images/c95.jpeg"},
    {id:4015, name:"LED Photo Lamp", price:599.00, imgsrc:"assets/Images/c97.jpeg"},
    {id:4016, name:"Bottle", price:299.00, imgsrc:"assets/Images/n3.jpeg"}

    

  
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

