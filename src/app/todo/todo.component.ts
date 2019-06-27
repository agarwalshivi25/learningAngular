import { Component } from '@angular/core';
import {faEdit,faBell} from '@fortawesome/free-regular-svg-icons';
import {faPlus,faArchive,faTrash} from '@fortawesome/free-solid-svg-icons';
import {faLine} from '@fortawesome/free-brands-svg-icons';
import { GetLabelsService } from '../get-labels.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  title:string;
  isNotes:boolean=true;
  isCreateNote:boolean=false;
  displayNotes:boolean=true;
  showCreateNote:Boolean=true;
  isReminder:boolean=false;
  isImportant:boolean=false;
  isLabel:boolean=false;
  isArchive:boolean=false;
  isDelete:boolean=false;
  labels:string[];
 /*  faEdit=faEdit;
  faBell=faBell;
  faPlus=faPlus;
  faArchive=faArchive;
  faTrash=faTrash; */
  constructor(service:GetLabelsService) {
     this.title="My ToDo Application";
  this.labels=service.getlabels();
  //console.log(this.displayNotes+" "+ this.isCreateNote);
}

  
  onNotesClick(){
    this.isNotes=true;
  this.isCreateNote=false;
  this.showCreateNote=true;
  this.displayNotes=true;
  this.isReminder=false;
  this.isImportant=false;
  this.isLabel=false;
  this.isArchive=false;
  this.isDelete=false;
  }
   onCreateNotesClick():void{
    this.isNotes=true;
    this.isCreateNote=true;
    this.displayNotes=false;
  this.showCreateNote=true;
  this.isReminder=false;
  this.isImportant=false;
  this.isLabel=false;
  this.isArchive=false;
  this.isDelete=false;
  /* alert("Create Note "+ this.isCreateNote +" display notes "+this.displayNotes) ;
  console.log("Create Note "+ this.isCreateNote +" display notes "+this.displayNotes);
   */} 
  onReminderClick():void{
    this.isNotes=false;
  this.isCreateNote=false;
  this.showCreateNote=false;
  this.displayNotes=false;
  this.isReminder=true;
  this.isImportant=false;
  this.isLabel=false;
  this.isArchive=false;
  this.isDelete=false;
  //alert("call to hua ha "+this.isReminder+" "+this.isCreateNote);
    //console.log(this.isNotes ||this.isCreateNote || this.showCreateNote  );
  }
  onImportantClick(){
    this.isNotes=false;
  this.isCreateNote=false;
  this.displayNotes=false;
  this.showCreateNote=false;
  this.isReminder=false;
  this.isImportant=true;
  this.isLabel=false;
  this.isArchive=false;
  this.isDelete=false;
  }
  onLabelClick(){
    this.isNotes=false;
    this.displayNotes=false;
    this.isCreateNote=false;
  this.showCreateNote=false;
  this.isReminder=false;
  this.isImportant=false;
  this.isLabel=true;
  this.isArchive=false;
  this.isDelete=false;
  }
  onArchiveClick(){
    this.isNotes=false;
    this.displayNotes=false;
    this.isCreateNote=false;
  this.showCreateNote=false;
  this.isReminder=false;
  this.isImportant=false;
  this.isLabel=false;
  this.isArchive=true;
  this.isDelete=false;
  }
  onDeleteClick(){
    this.isNotes=false;
    this.displayNotes=false;
    this.isCreateNote=false;
  this.showCreateNote=false;
  this.isReminder=false;
  this.isImportant=false;
  this.isLabel=false;
  this.isArchive=false;
  this.isDelete=true;
}

}
