import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from "./product.component";
import { StarComponent } from 'src/shared/star.componenet';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { TodoComponent } from './todo/todo.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { NotesComponent } from './notes/notes.component';
import { ReminderComponent } from './reminder/reminder.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { CreateReminderComponent } from './create-reminder/create-reminder.component';
import { PanelComponent } from './panel/panel.component';
import { ImportantComponent } from './important/important.component';
import { CreateLabelComponent } from './create-label/create-label.component'; 
//import { IProductlist } from './productList.interface';

@NgModule({
  declarations: [
    AppComponent,ProductComponent,StarComponent, TodoComponent, NotesComponent, ReminderComponent, CreateNoteComponent, CreateReminderComponent, PanelComponent, ImportantComponent, CreateLabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule ,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class AppModule {
  constructor(){
    library.add(fas,far);
  }
 }
