import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  isFas:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  onFavClick()
{
this.isFas=!this.isFas;
}
}
