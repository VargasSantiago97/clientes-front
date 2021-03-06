import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { CargaLiquidacionMensualComponent } from './components/carga-liquidacion-mensual/carga-liquidacion-mensual.component';
import {ListboxModule} from 'primeng/listbox';

//PRIME-NG
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import {FileUploadModule} from 'primeng/fileupload';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CargaLiquidacionMensualComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,


    //PRIME-NG
    ButtonModule,
    AccordionModule,
    InputTextareaModule,
    CalendarModule,
    InputNumberModule,
    FileUploadModule,
    DialogModule,
    ListboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
