import { Component, OnInit } from '@angular/core';
import { GetNotesService } from '../get-notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
 // isFas:boolean=false;
  Notes;
  constructor(service:GetNotesService) { 
    this.Notes=service.getNotes();
  }

  ngOnInit() {
  }
  onFavClick(noteid,fav)
{
//this.isFas=!this.isFas;
//console.log(noteid + " " + fav);
this.Notes[noteid].NotesImp=!this.Notes[noteid].NotesImp;
/* console.log(this.Notes[noteid].Notesid + " "+ 
this.Notes[noteid].NotesImp);
 */}
}
