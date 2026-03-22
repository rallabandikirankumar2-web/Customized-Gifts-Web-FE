import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  loginStatus: any;
  

  constructor(private userService: UserService) {
   
  }
  
  ngOnInit(){
    this.userService.getLoginStatus().subscribe((loginStatusData: any) => {
      this.loginStatus = loginStatusData;
    });
  }
 
}
