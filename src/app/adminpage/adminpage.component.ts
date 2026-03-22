import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  users:any;

  constructor( private userservice:UserService, private router:Router){
    this. users = this.userservice.cartItems;  


  }

  
  ngOnInit(): void {
    this.userservice.getAllUsers().subscribe(res=>{
      this.users=res;
      
    })
  }
  orders(){
    this.router.navigate(['showorders']);

  }

}
