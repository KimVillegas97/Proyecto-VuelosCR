import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componets/contacto/contacto.component';
import { HomePageComponent } from './componets/home-page/home-page.component';
import { IniciarSesionComponent } from './componets/iniciar-sesion/iniciar-sesion.component';
import { MisViajesComponent } from './componets/mis-viajes/mis-viajes.component';
import { OfertasComponent } from './componets/ofertas/ofertas.component';
import { RegistroComponent } from './componets/registro/registro.component';


const routes: Routes = [

  {path:'VuelosCR',component:HomePageComponent},
  {path:'Contacto',component:ContactoComponent},
  {path:'Iniciar-Sesion',component:IniciarSesionComponent},
  {path:'Mis-Viajes',component:MisViajesComponent},
  {path:'Ofertas',component:OfertasComponent},
  {path:'Registro',component:RegistroComponent},
  {path:'**',redirectTo:'VuelosCR'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
