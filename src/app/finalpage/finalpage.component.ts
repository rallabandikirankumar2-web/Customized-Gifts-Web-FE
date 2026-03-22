import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finalpage',
  templateUrl: './finalpage.component.html',
  styleUrls: ['./finalpage.component.css']
})
export class FinalpageComponent implements OnInit {

 

  constructor(private userservice:UserService, private router:Router){
    
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  




  emptycart(){
    this.userservice.removeAllCart();
    this.router.navigate(['couples']);
  }

  emptycart1(){
    this.userservice.removeAllCart();
    this.router.navigate(['home']);
  }

}
