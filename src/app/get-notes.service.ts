import { Injectable } from '@angular/core';

 @Injectable(/* {
  providedIn: 'root'
} */) 
export class GetNotesService {

  constructor() { }
  getNotes():any{
return [ {'Notesid':0,
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
}