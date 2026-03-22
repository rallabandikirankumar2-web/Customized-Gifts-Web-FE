import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

users: any;
user:any;
 
    constructor(private router: Router, private service: UserService,private toastr: ToastrService) {
      this.service.getAllUsers().subscribe((data: any) => {
        this.users = data;
        console.log(data);
        
      });
  }

  ngOnInit(){
  }

  // async login(loginForm: any) {
   
  //   this.users.forEach(async (user:any) => {

  //   if (loginForm.emailId === 'dad@gmail.com' && loginForm.password === 'Universal@123') {
      
     
  //     this.service.setUserLoggedIn();
  //     const user_Id = user.userId
  //     console.log(user_Id)
  //     this.service.setUserId(user_Id);
      
  //     Swal.fire({
  //       position: 'center',
  //       icon: 'success',
  //       title: 'Login Successfull',
  //       showConfirmButton: false,
  //       timer: 1500
  //     });
  //     this.router.navigate(['adminpage']);
   

  //   } else {

  //       await this.service.getuser(loginForm).then((userData: any) => {
  //         this.user = userData;
  //         console.log(userData);
  //         const user_Id = userData.userId
  //         console.log(user_Id)
  //         this.service.setUserId(user_Id);
  //       });

  //       if (this.user != null) {
  //         this.service.setUserLoggedIn();
         
  //         Swal.fire({
  //           position: 'center',
  //           icon: 'success',
  //           title: 'Login Successfull',
  //           showConfirmButton: false,
  //           timer: 1500
  //         });
  //         this.router.navigate(['home']);
        
        
         
         
  //       } else {
          
  //         Swal.fire({
  //           position: 'center',
  //           icon: 'warning',
  //           title: 'Invalid Credentials',
  //           showConfirmButton: false,
  //           timer: 1500
  //         });
  //         this.router.navigate(['login']);       
  //        }
  //       }   
  //   });
  // }
  // }





  async login(loginForm: any) {
    console.log(loginForm); 
    this.users.forEach(async (user:any) => {  

    if (loginForm.emailId === 'ADMIN' && loginForm.password === 'ADMIN') {
    
      Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Login Successfull',
              showConfirmButton: false,
              timer: 1500
            });
      this.service.setUserLoggedIn();
      const user_Id = user.userId
      console.log(user_Id)
      this.service.setUserId(user_Id);
      this.router.navigate(['adminpage']);

    
        } else {
          Swal.fire({
                      position: 'center',
                      icon: 'warning',
                      title: 'Invalid Credentials',
                      showConfirmButton: false,
                      timer: 1500
                    });
          this.router.navigate(['login']);
        }   
    }
 
  )}

}



