import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from "./product.component";
import { StarComponent } from 'src/shared/star.componenet';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
//import { IProductlist } from './productList.interface';

@NgModule({
  declarations: [
    AppComponent,ProductComponent,StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
