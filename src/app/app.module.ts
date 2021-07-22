import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from "./componets/home-page/home-page.component";
import { NavbarComponent } from './componets/navbar/navbar.component';
import { MisViajesComponent } from './componets/mis-viajes/mis-viajes.component';
import { OfertasComponent } from './componets/ofertas/ofertas.component';
import { ContactoComponent } from './componets/contacto/contacto.component';
import { IniciarSesionComponent } from './componets/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './componets/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    MisViajesComponent,
    OfertasComponent,
    ContactoComponent,
    IniciarSesionComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
