import { Component, OnInit } from '@angular/core';
import { GetNotesService } from '../get-notes.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  title="";
  note="";
  constructor(private service:GetNotesService) { }

  ngOnInit() {
  }
  onNoteSave(){
    if (this.title!="" || this.note!="") 
{   // console.log(title+" "+note);
this.service.saveNotes(this.title,this.note);
this.title="";
this.note="";
}
 }

}
