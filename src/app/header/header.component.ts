import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginStatus: any;
  cartItems: any;
 totalitem:number=0;
 

  constructor(private userService: UserService) {
   
  }
  
  ngOnInit(){
    this.userService.getLoginStatus().subscribe((loginStatusData: any) => {
      this.loginStatus = loginStatusData;
    });
    this.userService.getProducts().subscribe(res=>{
    this.totalitem= res.length;
    })
    
  }
}
