import { BrowserModule } from '@angular/platform-browser';
// Para poder usar el locale_id en un pipe hay que importarlo del core(LOCALE_ID)
import { LOCALE_ID, NgModule } from '@angular/core';
// Para poder usar animaciones en ng
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

// Modulo personalizado para primeng
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';


// //Cambiar el locale de la app (OPCION 1)
//import  localeFr  from '@angular/common/locales/fr';
// import  localeEs  from '@angular/common/locales/es';
// import { registerLocaleData } from '@angular/common';
// a parte de importarlo tenemos que registrarlo aqui para que angular sepa
// registerLocaleData( localeEs );
// registerLocaleData( localeFr );

//Cambiar el locale de la app (OPCION 2)
import '@angular/common/locales/global/es'
import '@angular/common/locales/global/fr'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Siempre tendremos que importar el modulo de las rutas en el modulo raiz!!!!
    AppRouterModule,
    BrowserAnimationsModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    // Aqui es donde se aplica la injeccion del locale
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
