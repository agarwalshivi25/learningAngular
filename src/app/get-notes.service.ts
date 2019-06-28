import { Injectable } from '@angular/core';

 @Injectable(/* {
  providedIn: 'root'
} */) 
export class GetNotesService {
notes:{}[];
  constructor() { 
    this.notes=[ {'Notesid':0,
    'NotesHeading':'Notes1',
    'NotesSpecialNote':'Special Notes1',
    'NotesContent':'With supporting text below as a natural lead-in to additional content.',
    'NotesReminder':[{'TimeStamp':'Yesterday, 20:30','MarkDone':true,'isExpired':true},
    {'TimeStamp':'Today, 20:30','MarkDone':false,'isExpired':false}],
    'NotesLabel':['Notes_Label','Notes_Label2'],
    'NotesImp':true,
    
    },
    {'Notesid':1,
    'NotesHeading':'Notes2',
    'NotesSpecialNote':'Special Notes2',
    'NotesContent':'With supporting text below as a natural lead-in to additional content.',
    'NotesReminder':[{'TimeStamp':'Tomorrow, 20:30','MarkDone':false,'isExpired':false}],
    'NotesLabel':[],
    'NotesImp':false
    },
    {'Notesid':2,
    'NotesHeading':'Notes3',
    'NotesSpecialNote':'Special Notes3',
    'NotesContent':'With supporting text below as a natural lead-in to additional content.',
    'NotesReminder':[{'TimeStamp':'Yesterday, 20:30','MarkDone':false,'isExpired':true}],
    'NotesLabel':[],
    'NotesImp':false
    },
    {'Notesid':3,
    'NotesHeading':'Notes4',
    'NotesSpecialNote':'Special Notes4',
    'NotesContent':'With supporting text below as a natural lead-in to additional content.',
    'NotesReminder':[],
    'NotesLabel':[],
    'NotesImp':false
    } 
    ];
  }
  getNotes():any{
return this.notes;
  }
  saveNotes(title:string,note:string):any{
    this.notes.splice(0,0,
      {'Notesid':this.notes.length+1,
    'NotesHeading':title,
    'NotesSpecialNote':title,
    'NotesContent':note,
    'NotesReminder':[],
    'NotesLabel':[],
    'NotesImp':false
    }
    
    );
    
      }
  delNotes(index){
        
    this.notes.splice(index,1);
      }
}
