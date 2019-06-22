import { Component } from '@angular/core';
import {faEdit,faBell} from '@fortawesome/free-regular-svg-icons';
import {faPlus,faArchive,faTrash} from '@fortawesome/free-solid-svg-icons';
import {faLine} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  title:string;
  isNotes:boolean=true;
  isCreateNote:boolean=true;
  showCreateNote:Boolean=false;
  isReminder:boolean=false;
  isImportant:boolean=false;
  isLabel:boolean=false;
  isArchive:boolean=false;
  isDelte:boolean=false;
 /*  faEdit=faEdit;
  faBell=faBell;
  faPlus=faPlus;
  faArchive=faArchive;
  faTrash=faTrash; */
  constructor() { this.title="My ToDo Application";}

  
  onNotesClick(){
    this.isNotes=!this.isNotes;
  this.isCreateNote=!this.isCreateNote;
 // this.showCreateNote=!this.showCreateNote;
  this.isReminder=!this.isReminder;
  this.isImportant=!this.isImportant;
  this.isLabel=!this.isLabel;
  this.isArchive=!this.isArchive;
  this.isDelte=!this.isDelte;
  }
/*   onCreateNotesClick(){
    this.isNotes=!this.isNotes;
  this.isCreateNote=!this.isCreateNote;
  //this.showCreateNote=!this.showCreateNote;
  this.isReminder=!this.isReminder;
  this.isImportant=!this.isImportant;
  this.isLabel=!this.isLabel;
  this.isArchive=!this.isArchive;
  this.isDelte=!this.isDelte;
  } */
  onReminderClick():void{
    this.isNotes=!this.isNotes;
  this.isCreateNote=!this.isCreateNote;
  this.showCreateNote=!this.showCreateNote;
  this.isReminder=!this.isReminder;
  this.isImportant=!this.isImportant;
  this.isLabel=!this.isLabel;
  this.isArchive=!this.isArchive;
  this.isDelte=!this.isDelte;
  alert("call to hua ha"+this.isNotes+" "+this.isCreateNote);
    console.log(this.isNotes ||this.isCreateNote || this.showCreateNote  );
  }
  onImportantClick(){
    this.isNotes=!this.isNotes;
  this.isCreateNote=!this.isCreateNote;
  //this.showCreateNote=!this.showCreateNote;
  this.isReminder=!this.isReminder;
  this.isImportant=!this.isImportant;
  this.isLabel=!this.isLabel;
  this.isArchive=!this.isArchive;
  this.isDelte=!this.isDelte;
  }
  onLabelClick(){
    this.isNotes=!this.isNotes;
  this.isCreateNote=!this.isCreateNote;
  //this.showCreateNote=!this.showCreateNote;
  this.isReminder=!this.isReminder;
  this.isImportant=!this.isImportant;
  this.isLabel=!this.isLabel;
  this.isArchive=!this.isArchive;
  this.isDelte=!this.isDelte;
  }
  onArchiveClick(){
    this.isNotes=!this.isNotes;
  this.isCreateNote=!this.isCreateNote;
  //this.showCreateNote=!this.showCreateNote;
  this.isReminder=!this.isReminder;
  this.isImportant=!this.isImportant;
  this.isLabel=!this.isLabel;
  this.isArchive=!this.isArchive;
  this.isDelte=!this.isDelte;
  }
  onDeleteClick(){
    this.isNotes=!this.isNotes;
  this.isCreateNote=!this.isCreateNote;
  //this.showCreateNote=!this.showCreateNote;
  this.isReminder=!this.isReminder;
  this.isImportant=!this.isImportant;
  this.isLabel=!this.isLabel;
  this.isArchive=!this.isArchive;
  this.isDelte=!this.isDelte;
  }

}
