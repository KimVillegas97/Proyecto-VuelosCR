import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './componets/home-page/home-page.component';


const routes: Routes = [

  {path:'VuelosCR',component:HomePageComponent},
  {path:'**',redirectTo:'VuelosCR'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
