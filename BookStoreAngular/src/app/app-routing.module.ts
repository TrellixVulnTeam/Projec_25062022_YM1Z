import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
 {
   path:"",component:PublicLayoutComponent,
   children:[
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
    { path: "publicLayout", component: PublicLayoutComponent },
   ]
 },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
