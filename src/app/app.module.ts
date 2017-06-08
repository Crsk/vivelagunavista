import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DosdormComponent } from './pages/dosdorm/dosdorm.component';
import { TresdormComponent } from './pages/tresdorm/tresdorm.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    InicioComponent,
    DosdormComponent,
    TresdormComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'inicio', component: InicioComponent },
      { path: 'dosdormitorios', component: DosdormComponent },
      { path: 'tresdormitorios', component: TresdormComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: '**', redirectTo: 'inicio' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
