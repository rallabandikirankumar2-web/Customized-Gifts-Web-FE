import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-ornaments',
  templateUrl: './ornaments.component.html',
  styleUrls: ['./ornaments.component.css']
})
export class OrnamentsComponent implements OnInit {
  products: any;
  cartProducts: any;



 constructor(private userService : UserService){
  
  this.cartProducts = [];

  this.products = [
    {id:8001, name:"Name Locket",price:299.00,  imgsrc:"assets/Images/j1.jpeg"},
    {id:8002, name:"Name Locket", price:1199.00,  imgsrc:"assets/Images/j2.jpeg"},
    {id:8003, name:"Name Bracelet",  price:399.00,  imgsrc:"assets/Images/j3.jpeg"},
    {id:8004, name:"Name Bracelet",  price:399.00,  imgsrc:"assets/Images/j4.jpeg"},
    {id:8005, name:"Name Ring", price:299.00, imgsrc:"assets/Images/j5.jpeg"},
    {id:8006, name:"Name Ring",    price:299.00,  imgsrc:"assets/Images/j6.jpeg"},
    {id:8007, name:"Name Ring", price:299.00, imgsrc:"assets/Images/j7.jpeg"},
    {id:8008, name:"Name Ring", price:299.00, imgsrc:"assets/Images/j8.jpeg"},
    {id:8009, name:"Name Ring", price:299.00, imgsrc:"assets/Images/j9.jpeg"},
    {id:8010, name:"Name Locket", price:299.00, imgsrc:"assets/Images/j10.jpeg"},
    {id:8011, name:"Name Locket", price:299.00, imgsrc:"assets/Images/j11.jpeg"},
    {id:8012, name:"Year Locket", price:299.00, imgsrc:"assets/Images/j12.jpeg"},
    {id:8013, name:"Name Locket", price:299.00, imgsrc:"assets/Images/j13.jpeg"}
    
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


