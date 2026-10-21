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
=======
import { TestComponent } from '../components/test-component/test-component';
>>>>>>> 94b73036b451bb645c7699188f01fac9c4358476
import { TablaMultiplicarComponent } from '../components/tabla-multiplicar-component/tabla-multiplicar-component';

@NgModule({
  declarations: [
<<<<<<< HEAD
    App, PrimerComponent
    , HooksComponent
    , DeportesComponent
    , FormsBindingComponent
    , SumarNumerosComponent
    ,TablaMultiplicarComponent
  

=======
    App,
    PrimerComponent,
    HooksComponent,
    DeportesComponent,
    FormsBindingComponent,
    SumarNumerosComponent,
    TestComponent,
    TablaMultiplicarComponent
>>>>>>> 94b73036b451bb645c7699188f01fac9c4358476
  ],
  imports: [BrowserModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
