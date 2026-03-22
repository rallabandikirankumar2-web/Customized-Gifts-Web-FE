import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BdaygiftsComponent } from './bdaygifts/bdaygifts.component';
import { WeddingComponent } from './wedding/wedding.component';
import { HomedecorsComponent } from './homedecors/homedecors.component';
import { ForherComponent } from './forher/forher.component';
import { ForhimComponent } from './forhim/forhim.component';
import { CouplesComponent } from './couples/couples.component';
import { ValentinesComponent } from './valentines/valentines.component';
import { OrnamentsComponent } from './ornaments/ornaments.component';
import { MothersdayComponent } from './mothersday/mothersday.component';
import { RakhiComponent } from './rakhi/rakhi.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LogoutComponent } from './logout/logout.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './auth.guard';
import { PolicyComponent } from './policy/policy.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { FinalpageComponent } from './finalpage/finalpage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ShowordersComponent } from './showorders/showorders.component';


const routes: Routes = [
  {path:"",      component:HomeComponent},
  {path:"home",      component:HomeComponent},
  {path:"login",     component:LoginComponent},
  {path:"register",  component:RegisterComponent},
  {path:"header",  component:HeaderComponent},
  {path:"bdaygifts",  component:BdaygiftsComponent},
  {path:"wedding",  component:WeddingComponent},
  {path:"homedecors",  component:HomedecorsComponent},
  {path:"forher",  component:ForherComponent},
  {path:"forhim",  component:ForhimComponent},
  {path:"couples",  component:CouplesComponent},
  {path:"valentines",  component:ValentinesComponent},
  {path:"ornaments",  component:OrnamentsComponent},
  {path:"mothersday",  component:MothersdayComponent},
  {path:"rakhi",  component:RakhiComponent},
  {path:"aboutus",  component:AboutusComponent},
  {path:"cart",      component:CartComponent},
  {path:"logout",    component:LogoutComponent},
  {path:"policy",    component:PolicyComponent},
  {path:"profile",    component:ProfileComponent},
  {path:"payment",    component:PaymentComponent},
  {path:"finalpage",    component:FinalpageComponent},
  {path:"adminlogin",    component:AdminloginComponent},
  {path:"adminpage",    component:AdminpageComponent},
  {path:"showorders",    component:ShowordersComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
