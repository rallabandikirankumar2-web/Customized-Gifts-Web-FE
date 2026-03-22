import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { BdaygiftsComponent } from './bdaygifts/bdaygifts.component';
import { FooterComponent } from './footer/footer.component';
import { WeddingComponent } from './wedding/wedding.component';
import { HomedecorsComponent } from './homedecors/homedecors.component';
import { CouplesComponent } from './couples/couples.component';
import { ForherComponent } from './forher/forher.component';
import { ForhimComponent } from './forhim/forhim.component';
import { ValentinesComponent } from './valentines/valentines.component';
import { OrnamentsComponent } from './ornaments/ornaments.component';
import { MothersdayComponent } from './mothersday/mothersday.component';
import { RakhiComponent } from './rakhi/rakhi.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EssentialsComponent } from './essentials/essentials.component';
import { GetallusersComponent } from './getallusers/getallusers.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { PolicyComponent } from './policy/policy.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { FinalpageComponent } from './finalpage/finalpage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { OderregistrationComponent } from './oderregistration/oderregistration.component';
import { ShowordersComponent } from './showorders/showorders.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    HeaderComponent,
    BdaygiftsComponent,
    FooterComponent,
    WeddingComponent,
    HomedecorsComponent,
    CouplesComponent,
    ForherComponent,
    ForhimComponent,
    ValentinesComponent,
    OrnamentsComponent,
    MothersdayComponent,
    RakhiComponent,
    AboutusComponent,
    EssentialsComponent,
    GetallusersComponent,
    CartComponent,
    PolicyComponent,
    ProfileComponent,
    PaymentComponent,
    FinalpageComponent,
    AdminloginComponent,
    AdminpageComponent,
    OderregistrationComponent,
    ShowordersComponent


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
