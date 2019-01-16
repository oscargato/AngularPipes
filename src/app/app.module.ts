import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID,NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
import { FooterComponent } from './components/footer/footer.component';

registerLocaleData(localeES);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  	{provide: LOCALE_ID, useValue:'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
