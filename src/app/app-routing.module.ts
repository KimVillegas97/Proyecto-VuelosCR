import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componets/login/login.component';

const routes: Routes = [

  {path:'LoginVuelosCR',component:LoginComponent},
  {path:'**',redirectTo:'LoginVuelosCR'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
