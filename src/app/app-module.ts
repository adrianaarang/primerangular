import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HooksComponent } from '../components/hookscomponent/hooks.component';
import { DeportesComponent } from '../components/deportescomponent/deportes.component';
import { FormsModule } from '@angular/forms';
import { FormsBindingComponent } from '../components/formsbindingcomponent/forms.binding.component';
import { SumarNumerosComponent } from '../components/sumarnumeroscomponent/sumar.numeros.component';
<<<<<<< HEAD
import { Prueba } from './components/prueba/prueba';
import { PruebaComponent } from './components/prueba-component/prueba-component';
@NgModule({
  declarations: [
    App,
    PrimerComponent,
    HooksComponent,
    DeportesComponent,
    FormsBindingComponent,
    SumarNumerosComponent,
    Prueba,
    PruebaComponent,
=======
@NgModule({
  declarations: [
    App, PrimerComponent
    , HooksComponent
    , DeportesComponent
    , FormsBindingComponent
    , SumarNumerosComponent
>>>>>>> 56c40987d30c231edd298b1192d1b4ef195c8929
  ],
  imports: [BrowserModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
