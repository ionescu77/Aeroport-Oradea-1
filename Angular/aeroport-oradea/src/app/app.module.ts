import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlecariComponent } from './plecari/plecari.component';
import { SosiriComponent } from './sosiri/sosiri.component';
import { BagajeExternComponent } from './bagaje-extern/bagaje-extern.component';
import { BagajeInternComponent } from './bagaje-intern/bagaje-intern.component';
import { CheckInComponent } from './check-in/check-in.component';
import { GateComponent } from './gate/gate.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderTabeleComponent } from './header-tabele/header-tabele.component';
import { AeroportService } from '../app/services/aeroport.service';

@NgModule({
  declarations: [
    AppComponent,
    PlecariComponent,
    SosiriComponent,
    BagajeExternComponent,
    BagajeInternComponent,
    CheckInComponent,
    GateComponent,
    NavbarComponent,
    FooterComponent,
    HeaderTabeleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AeroportService],
  bootstrap: [AppComponent]
})
export class AppModule {  }
