import { Injectable } from '@angular/core';

@Injectable(/* {
  //providedIn: 'root'
} */)
export class GetLabelsService {
labels:string[];
  constructor() { 
    this.labels=['Notes_Label','Notes_Label2','Notes_Label2'];
  }
  getlabels():string[]{
    return this.labels;
  }
  addlabels(label:string){
    //console.log(label);
    this.labels.splice(0,0,label);
    
  }
}
